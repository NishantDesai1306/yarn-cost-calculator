import { Box, Card, CardContent, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useCallback } from 'react';

const useStyles = makeStyles((theme) => {
	return {
		title: {
			fontSize: 16,
			fontWeight: "bold"
		},
	}
});

export default function WeftForm({ name, weft, onChange, onRemove }) {
	const classes = useStyles();

	const handleChange = useCallback((e) => {
		const {
			target: {
				name,
				value
			},
		} = e;

		onChange({
			...weft,
			[name]: +value
		});
	}, [
		weft,
		onChange
	])

	return (
		<Card elevation={0} className="border">
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					{name}
				</Typography>

				<Box className="mt-3">
					<div className="mb-3">
						<TextField
							label="Width (in)"
							fullWidth
							type="number"
							min="0"
							name="width"
							value={weft.width}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<TextField
							label="Pick"
							fullWidth
							type="number"
							min="0"
							name="pick"
							value={weft.pick}
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
							value={weft.denier}
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
							value={weft.rate}
							onChange={handleChange}
						/>
					</div>
				</Box>
			</CardContent>
		</Card>
	)
}