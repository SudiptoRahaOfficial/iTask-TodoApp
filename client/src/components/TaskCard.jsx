import React from 'react'
import Button from './Button'

function TaskCard({ task={text: 'sudipto', id: '001', isCompleated: false} }) {
    
  return (
		<div>
			<p>{task.text}</p>
			<div className='actions'>
				<Button value={'Edit'} />
				<Button value={'Delete'} />
			</div>
		</div>
  )
}

export default TaskCard
