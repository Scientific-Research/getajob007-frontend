import { useContext } from 'react';
import { AppContext } from '../appContext';
import { IJob } from '../interfaces';

interface IProps {
	job: IJob;
}

export const JobEdit = ({ job }: IProps) => {
	// const { handleDeleteJob } = useContext(AppContext);

	return (
		<div>
			<a href={job.url} target="_blank">
				{job.title}
			</a>
		</div>
	);
};
