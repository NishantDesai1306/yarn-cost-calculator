import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Logo from './assets/logo.png'

const useStyles = makeStyles((theme) => {
	return {
		title: {
			flexGrow: 1,
			color: "white"
		},
		logoContainer: {
			marginRight: 10,
			height: 40,
			width: 40,
			padding: 5,
			borderRadius: 20,
			background: 'white',
		},
		logo: {
			height: '100%',
			width: '100%',
		}
	}
});

function ElevationScroll(props) {
	const { children } = props;
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));
	const introHeight = isDesktop ? 0.8 : 1;

	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: (window.screen.height * introHeight) - 200,
	});

	return React.cloneElement(children, {
		elevation: !!trigger ? 4 : 0,
	});
}

export default function MyAppBar(props) {
	const classes = useStyles();

	return (
		<ElevationScroll {...props}>
			<AppBar position='fixed' elevation={0}>
				<Toolbar>
					<div className="d-flex align-items-center">
						<div className={classes.logoContainer}>
							<img alt="Logo" className={classes.logo} src={Logo} />
						</div>
						<Typography variant='h6' className={classes.title}>
							Cost Calculator
						</Typography>
					</div>

					<Box>
						<Button
							onClick={() => window.showInstallPrompt()}
							color='inherit'
							className='install-handle d-none mx-3'
							startIcon={<Icon>get_app</Icon>}
						>
							Install
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</ElevationScroll>
	);
}