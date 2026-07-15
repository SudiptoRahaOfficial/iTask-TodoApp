import React from 'react'
import SectionHeading from './SectionHeading'
import TaskCard from './TaskCard'

function TaskListing({
	tasks,
	settasks,
	settask,
	showFinished,
	handleShowFinishedChange,
}) {
	return (
		<div className='w-14/15 md:w-5/7 lg:w-4/5 xl:w-3/5 m-auto bg-indigo-100 p-4 sm:p-8 rounded-lg my-5'>
			<div className='flex items-center justify-between'>
				<SectionHeading value={'List Of Your Tasks'} />
				<p className='flex items-center gap-1 me-1'>
					<input
						onChange={handleShowFinishedChange}
						checked={showFinished}
						type='checkbox'
						className='h-3 sm:h-4 w-3 sm:w-4 cursor-pointer accent-indigo-300'
					/>
					<span className='font-bold text-xs sm:text-sm'>
						Show Finished
					</span>
				</p>
			</div>
			{tasks.length <= 0 ? (
				<p className='font-medium text-sm sm:text-base text-gray-500! bg-white text-center w-3/7 sm:w-1/4 mx-auto mt-4 py-2 rounded-sm'>
					No Tasks Found!
				</p>
			) : (
				tasks.map(
					(task) =>
						(showFinished || !task.isCompleated) && (
							<TaskCard
								key={task.id}
								tasks={tasks}
								settasks={settasks}
								task={task}
								settask={settask}
							/>
						),
				)
			)}
		</div>
	)
}

export default TaskListing