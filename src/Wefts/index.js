import { Fab, Icon } from '@material-ui/core';
import React, { useCallback } from 'react';

import WeftForm from './weft-form';

export const DEFAULT_WEFT = {
	width: 48,
	pick: 60,
	denier: 143,
	rate: 350,
};

export default function Wefts({ wefts, onChange }) {
	const handleAddWeft = useCallback(() => {
		onChange([
			...wefts,
			DEFAULT_WEFT,
		]);
	}, [
		wefts,
		onChange,
	]);

	const handleChangeWeft = useCallback((index, updatedWeft) => {
		const newWefts = wefts.map((weft, weftIndex) => {
			return weftIndex === index ? updatedWeft : weft;
		});

		onChange(newWefts);
	}, [
		wefts,
		onChange,
	]);

	const handleRemoveWeft = useCallback((index) => {
		const newWefts = wefts.filter((weft, weftIndex) => weftIndex !== index);
		onChange(newWefts);
	}, [
		wefts,
		onChange,
	]);

	return (
		<div className="weft-container">
			{
				wefts.map((weft, index) => {
					return (
						<div className="mb-3" key={index}>
							<WeftForm
								name={`Weft #${index + 1}`}
								weft={weft}
								onChange={(weft) => handleChangeWeft(index, weft)}
								onRemove={() => handleRemoveWeft(index)}
							/>
						</div>
					)
				})
			}

			<div className="d-flex justify-content-end">
				<Fab
					className="text-light"
					color="primary"
					aria-label="add"
					onClick={handleAddWeft}
				>
					<Icon>add</Icon>
				</Fab>
			</div>
		</div>
	)
}
