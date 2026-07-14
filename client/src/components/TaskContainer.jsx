import React from 'react'
import AddTask from './AddTask'
import TaskListing from './TaskListing'

function TaskContainer() {
  return (
		<div>
          <AddTask />
          <TaskListing />
		</div>
  )
}

export default TaskContainer
