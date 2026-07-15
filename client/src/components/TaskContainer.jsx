import React, { useState, useEffect } from 'react'
import AddTask from './AddTask'
import TaskListing from './TaskListing'

function TaskContainer() {
	const [tasks, settasks] = useState(() => {
		const storedTasks = localStorage.getItem('tasks')

		return storedTasks ? JSON.parse(storedTasks) : []
	})

	const [task, settask] = useState('')

	const [showFinished, setshowFinished] = useState(false)

	function handleShowFinishedChange() {
		setshowFinished(!showFinished)
	}

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

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
		<div className='my-10'>
			<AddTask task={task} settask={settask} handleAdd={handleAdd} />
			<TaskListing
				tasks={tasks}
				settasks={settasks}
				settask={settask}
				showFinished={showFinished}
				handleShowFinishedChange={handleShowFinishedChange}
			/>
		</div>
	)
}

export default TaskContainer