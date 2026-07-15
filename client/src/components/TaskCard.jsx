import React from 'react'
import Button from './Button'

function TaskCard({ tasks, settasks, task }) {
	function hanleDelete() {
		const taskId = task.id
		const newTasks = tasks.filter((task) => task.id !== taskId)
		settasks(newTasks)
	}

	function hanleEdit() {
		const taskId = task.id
		
	}

	return (
		<div className='bg-white flex items-center justify-between p-4 my-4 rounded-md'>
			<div className='flex items-center gap-3 w-4/5'>
				<input
					type='checkbox'
					className='h-4 w-4 cursor-pointer accent-yellow-500'
				/>

				<p className='flex-1'>{task.text}</p>
			</div>

			<div className='actions flex gap-3'>
				<Button value='Edit' onClickFunc={hanleEdit} />
				<Button value='Delete' onClickFunc={hanleDelete} />
			</div>
		</div>
	)
}

export default TaskCard