import React from 'react'
import SectionHeading from './SectionHeading'
import Button from './Button'

function AddTask({ task, settask, handleAdd }) {
	return (
		<div className='w-3/5 m-auto bg-yellow-200 p-5 flex justify-evenly gap-5 rounded-lg my-5'>
			<SectionHeading value={'Add New Task'} />
			<div className='w-3/5 flex gap-5'>
				<input
					onChange={(event) => settask(event.target.value)}
					value={task}
					type='text'
					placeholder='Enter Task Here'
					className='w-full rounded border border-gray-300 bg-white py-1 ps-3 text-gray-800 placeholder-gray-400 text-sm outline-none'
				/>
				<Button value={'Add'} onClickFunc={handleAdd} />
			</div>
		</div>
	)
}

export default AddTask