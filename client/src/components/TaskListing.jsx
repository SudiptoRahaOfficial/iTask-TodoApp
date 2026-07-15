import React from 'react'
import SectionHeading from './SectionHeading'
import TaskCard from './TaskCard'

function TaskListing({ tasks, settasks, settask }) {
	return (
		<div className='w-3/5 m-auto bg-indigo-100 p-8 rounded-lg my-5'>
			<SectionHeading value={'List Of Your Tasks'} />
			{tasks.length <= 0 ? (
				<p className='font-medium text-md text-gray-500! bg-white text-center w-1/4 mx-auto mt-4 py-2 rounded-sm'>
					No Tasks Found!
				</p>
			) : (
				tasks.map((task) => (
					<TaskCard
						key={task.id}
						tasks={tasks}
						settasks={settasks}
						task={task}
						settask={settask}
					/>
				))
			)}
		</div>
	)
}

export default TaskListing