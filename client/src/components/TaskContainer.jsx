import React, { useState } from 'react'
import AddTask from './AddTask'
import TaskListing from './TaskListing'

function TaskContainer() {
	const [tasks, settasks] = useState([])
	const [task, settask] = useState('')

	// function for adding new task
	function handleAdd() {
		if (task.length <= 0) return
		const newTask = {
			text: task,
			id: crypto.randomUUID(),
			isCompleated: false,
		}
		settasks([...tasks, newTask])
		settask('')
	}

	return (
		<div>
			<AddTask task={task} settask={settask} handleAdd={handleAdd} />
			<TaskListing tasks={tasks} settasks={settasks} />
		</div>
	)
}

export default TaskContainer