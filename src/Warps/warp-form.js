import { Box, Card, CardContent, makeStyles, TextField, Typography, Icon } from '@material-ui/core';
import React, { useCallback } from 'react';

const useStyles = makeStyles((theme) => {
	return {
		title: {
			fontSize: 16,
			fontWeight: "bold"
		},
	}
});

export default function WarpForm({ name, warp, onChange, onRemove }) {
	const classes = useStyles();

	const handleChange = useCallback((e) => {
		const {
			target: {
				name,
				value
			},
		} = e;

		debugger;

		onChange({
			...warp,
			[name]: +value
		});
	}, [
		warp,
		onChange
	])

	return (
		<Card elevation={0} className="border">
			<CardContent>
				<Box className="d-flex justify-content-between">
					<div>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							{name}
						</Typography>
					</div>
					<div className="text-muted cursor-pointer" onClick={onRemove}>
						<Icon fontSize="small">close</Icon>
					</div>
				</Box>

				<Box className="mt-3">
					<div className="mb-3">
						<TextField
							label="Total Ends"
							fullWidth
							type="number"
							min="0"
							name="totalEnds"
							value={warp.totalEnds}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<TextField
							label="Denier"
							fullWidth
							type="number"
							min="0"
							name="denier"
							value={warp.denier}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<TextField
							label="Rate"
							fullWidth
							type="number"
							min="0"
							name="rate"
							value={warp.rate}
							onChange={handleChange}
						/>
					</div>
				</Box>
			</CardContent>
		</Card>
	)
}