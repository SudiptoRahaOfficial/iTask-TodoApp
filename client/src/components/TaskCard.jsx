import React from 'react'
import Button from './Button'

function TaskCard({ tasks, settasks, task, settask }) {
	function hanleDelete() {
		const taskId = task.id
		const newTasks = tasks.filter((task) => task.id !== taskId)
		settasks(newTasks)
	}

	function hanleEdit() {
		settask(task.text)
		hanleDelete()
	}

	function handleDoneStatus(event) {
		const id = event.target.name
		const targetTaskIndex = tasks.findIndex((task) => task.id === id)
		const newTasks = [...tasks]
		newTasks[targetTaskIndex].isCompleated =
			!newTasks[targetTaskIndex].isCompleated
		settasks(newTasks)
	}

	return (
		<div className='bg-white flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 my-3 sm:my-4 rounded-md'>
			<div className='flex items-center gap-3 w-full'>
				<input
					onChange={handleDoneStatus}
					name={task.id}
					checked={task.isCompleated}
					type='checkbox'
					className='h-3 sm:h-4 w-3 sm:w-4 cursor-pointer accent-indigo-300'
				/>

				<p
					className={`flex-1 text-sm sm:text-base ${task.isCompleated && 'text-gray-400!'}`}
				>
					{task.text}{' '}
					{task.isCompleated && (
						<span className='text-green-500! font-semibold sm:font-bold'>
							{' '}
							- DONE ✅
						</span>
					)}
				</p>
			</div>

			<div className='actions flex gap-5 sm:gap-3 mt-4 sm:mt-0'>
				<Button value='Edit' onClickFunc={hanleEdit} />
				<Button value='Delete' onClickFunc={hanleDelete} />
			</div>
		</div>
	)
}

export default TaskCard