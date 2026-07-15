import React from 'react'
import SectionHeading from './SectionHeading'
import TaskCard from './TaskCard'

function TaskListing() {
  return (
		<div className='w-3/5 m-auto bg-yellow-200 p-8 rounded-lg my-5'>
			<SectionHeading value={'List Of Your Tasks'} />
			<TaskCard />
		</div>
  )
}

export default TaskListing
