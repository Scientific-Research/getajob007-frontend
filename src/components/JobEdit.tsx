import { useContext } from 'react';
import { AppContext } from '../appContext';
import { IJob } from '../interfaces';

interface IProps {
	job: IJob;
}

export const JobEdit = ({ job }: IProps) => {
	// const { handleDeleteJob } = useContext(AppContext);

	return (
		<form>
			<fieldset>
				<legend>Editing Job</legend>
				<div className="row">
					<label>Title</label>
					<div>
						<input type="text" />
					</div>
				</div>
				<div className="row">
					<label>Description</label>
					<div>
						<input type="text" />
					</div>
				</div>
			</fieldset>
		</form>
	);
};
