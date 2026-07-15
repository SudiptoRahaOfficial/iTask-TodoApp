import React, { useState } from 'react'
import AddTask from './AddTask'
import TaskListing from './TaskListing'

function TaskContainer() {
	const [tasks, settasks] = useState([])

	return (
		<div>
			<AddTask tasks={tasks} settasks={settasks} />
			<TaskListing tasks={tasks} settasks={settasks} />
		</div>
	)
}

export default TaskContainer