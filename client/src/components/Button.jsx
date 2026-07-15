import React from 'react'

function Button({ type = 'button', onClickFunc, value }) {
	return (
		<button
			type={type}
			onClick={onClickFunc}
			className='bg-yellow-500 hover:bg-yellow-400 duration-100 text-sm font-bold py-1 px-4 rounded-sm cursor-pointer'
		>
			{value}
		</button>
	)
}

export default Button