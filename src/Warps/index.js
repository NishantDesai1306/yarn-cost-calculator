import { Fab, Icon } from '@material-ui/core';
import React, { useCallback } from 'react';

import WarpForm from './warp-form';

export const DEFAULT_WARP = {
	totalEnds: 4200,
	denier: 43,
	rate: 471,
};

export default function Warps({ warps, onChange }) {
	const handleAddWarp = useCallback(() => {
		onChange([
			...warps,
			DEFAULT_WARP,
		]);
	}, [
		warps,
		onChange,
	]);

	const handleChangeWarp = useCallback((index, updatedWarp) => {
		const newWarps = warps.map((warp, warpIndex) => {
			return warpIndex === index ? updatedWarp : warp;
		});

		onChange(newWarps);
	}, [
		warps,
		onChange,
	]);

	const handleRemoveWarp = useCallback((index) => {
		const newWarps = warps.filter((warp, warpIndex) => warpIndex !== index);
		onChange(newWarps);
	}, [
		warps,
		onChange,
	]);

	return (
		<div className="warp-container">
			{
				warps.map((warp, index) => {
					return (
						<div className="mb-3" key={index}>
							<WarpForm
								name={`Warp #${index + 1}`}
								warp={warp}
								onChange={(warp) => handleChangeWarp(index, warp)}
								onRemove={() => handleRemoveWarp(index)}
							/>
						</div>
					)
				})
			}

			<div className="d-flex justify-content-end">
				<Fab
					color="primary"
					className="text-light"
					aria-label="add"
					onClick={handleAddWarp}
				>
					<Icon>add</Icon>
				</Fab>
			</div>
		</div>
	)
}
