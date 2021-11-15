import { AppBar, Box, Dialog, Icon, IconButton, makeStyles, Paper, Slide, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography, Grid, useTheme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: 'relative',
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const DISPLAY_PRECISION = 4;

function getTotalWeightOfWarp (warp) {
	const {
		totalEnds,
		denier,
	} = warp;
	// convert denier to gm/meter
	const weightGmPerMeter = denier / 9000;

	// total weight for given ends
	const totalWeightGms = weightGmPerMeter * totalEnds;

	// add additional 10% worth of yarn to be safe for practical usage
	const actualWeightGms = totalWeightGms * 1.1;
	const actualWeightKg = actualWeightGms / 1000;

	return actualWeightKg;
}

function getTotalWeightOfWeft (weft) {
	const {
		width,
		pick,
		denier,
	} = weft;

	const widthMeter = width / 39.37;
	const totalLengthTravelledByPick = widthMeter * pick;
	const totalLengthTravelledByPickInches = totalLengthTravelledByPick * 39.37;
	const practicalLengthRequired = totalLengthTravelledByPickInches * 1.1;
	const weightGmPerMeter = denier / 9000;
	const totalWeightGms = weightGmPerMeter * practicalLengthRequired;
	const totalWeightKg = totalWeightGms / 1000;

	return totalWeightKg;
}

export default function FullScreenDialog({
	open,
	handleClose,
	warps,
	wefts,
}) {
	const classes = useStyles();
	const theme = useTheme();
	const [warpSolutionRows, setWarpSolutionRows] = useState([]);
	const [warpSolutionSummary, setWarpSolutionSummary] = useState({ weight: 0, cost: 0 });
	const [weftSolutionRows, setWeftSolutionRows] = useState([]);
	const [weftSolutionSummary, setWeftSolutionSummary] = useState({ weight: 0, cost: 0 });
	
	useEffect(() => {
		if (open) {
			const warpSolutions = warps.map((warp) => {
				const weight = getTotalWeightOfWarp(warp);

				return {
					weight,
					cost: weight * warp.rate,
				};
			});
			setWarpSolutionRows(warpSolutions);

			const totalWarp = warpSolutions.reduce((p, warpSolution) => {
				return {
					weight: p.weight + warpSolution.weight,
					cost: p.cost + warpSolution.cost,
				}
			}, { weight: 0, cost: 0 });
			setWarpSolutionSummary(totalWarp);

			const weftSolutions = wefts.map((weft) => {
				const weight = getTotalWeightOfWeft(weft);
				return {
					weight,
					cost: weight * weft.rate,
				};
			});
			setWeftSolutionRows(weftSolutions);

			const totalWeft = weftSolutions.reduce((p, weftSolution) => {
				return {
					weight: p.weight + weftSolution.weight,
					cost: p.cost + weftSolution.cost,
				}
			}, { weight: 0, cost: 0 });
			setWeftSolutionSummary(totalWeft);
		}
	}, [
		open,
		warps,
		wefts,
	])

	return (
		<Dialog
			fullScreen
			open={open}
			onClose={handleClose}
			TransitionComponent={Transition}
		>
			<AppBar className={classes.appBar}>
				<Toolbar>
					<IconButton edge="start" className="text-light" onClick={handleClose}>
						<Icon>close</Icon>
					</IconButton>
					<Typography variant="h6" className={`text-light ${classes.title}`}>
						Total Cost
					</Typography>
				</Toolbar>
			</AppBar>

			<Grid
				container
				className="w-100 d-flex justify-content-center p-3 flex-grow-1"
				style={{ background: theme.palette.background.default }}
			>
        <Grid item xs={12} md={8} lg={6}>	
					<Box>
						<Box className="mb-1">
							<Typography variant="h5">
								Warps:
							</Typography>
						</Box>
						<TableContainer component={Paper}>
							<Table className={classes.table} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Warp</TableCell>
										<TableCell align="right">Weight (kg)</TableCell>
										<TableCell align="right">Cost</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{
										warpSolutionRows.map((row, index) => (
											<TableRow key={index}>
												<TableCell scope="row">
													{`Warp #${index + 1}`}
												</TableCell>
												<TableCell align="right">
													{row.weight.toPrecision(DISPLAY_PRECISION)}
												</TableCell>
												<TableCell align="right">
													{row.cost.toPrecision(DISPLAY_PRECISION)}
												</TableCell>
											</TableRow>
										))
									}

									<TableRow>
										<TableCell>
											<strong>
												Total
											</strong>
										</TableCell>
										<TableCell align="right">
											<strong>
												{warpSolutionSummary.weight.toPrecision(DISPLAY_PRECISION)}
											</strong>
										</TableCell>
										<TableCell align="right">
											<strong>
												{warpSolutionSummary.cost.toPrecision(DISPLAY_PRECISION)}
											</strong>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</Box>

					<Box className="mt-4">
						<Box className="mb-1">
							<Typography variant="h5">
								Wefts:
							</Typography>
						</Box>
						<TableContainer component={Paper}>
							<Table className={classes.table} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Weft</TableCell>
										<TableCell align="right">Weight (kg)</TableCell>
										<TableCell align="right">Cost</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{
										weftSolutionRows.map((row, index) => (
											<TableRow key={index}>
												<TableCell>{`Weft #${index + 1}`}</TableCell>
												<TableCell align="right">
													{row.weight.toPrecision(DISPLAY_PRECISION)}
												</TableCell>
												<TableCell align="right">
													{row.cost.toPrecision(DISPLAY_PRECISION)}
												</TableCell>
											</TableRow>
										))
									}

									<TableRow>
										<TableCell>
											<strong>
												Total
											</strong>
										</TableCell>
										<TableCell align="right">
											<strong>
												{weftSolutionSummary.weight.toPrecision(DISPLAY_PRECISION)}
											</strong>
										</TableCell>
										<TableCell align="right">
											<strong>
												{weftSolutionSummary.cost.toPrecision(DISPLAY_PRECISION)}
											</strong>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</Box>

					<Box className="mt-4">
						<div className="mb-2">
							<Typography variant="h6">
								Final Weight: {(warpSolutionSummary.weight + weftSolutionSummary.weight).toPrecision(DISPLAY_PRECISION)}kg
							</Typography>
						</div>
						<div>
							<Typography variant="h6">
								Final Cost: {(warpSolutionSummary.cost + weftSolutionSummary.cost).toPrecision(DISPLAY_PRECISION)}
							</Typography>
						</div>
					</Box>
				</Grid>
			</Grid>
		</Dialog>
	);
}
