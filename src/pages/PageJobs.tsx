import { useContext } from 'react';
import { AppContext } from '../appContext';
import { IJob, ISkill } from '../interfaces';
import { JobDisplay } from '../components/JobDisplay';
import { JobEdit } from '../components/JobEdit';

export const PageJobs = () => {
	const { jobs, handleDeleteJob } = useContext(AppContext);
	return (
		<div className="page pageJobs">
			<div className="jobs">
				<h2>There are {jobs.length} jobs:</h2>
				{jobs.map((job: IJob) => {
					return (
						<>
						{job.userIsEditing}
							<JobDisplay job={job} />
							<JobEdit job={job} />
						</>
					);
				})}
			</div>
		</div>
	);
};
