import React from 'react'
import Logo from './Logo'

function Navbar() {
	return (
		<nav className='bg-yellow-500 py-2'>
			<div className='container w-3/4 m-auto flex justify-between'>
				<Logo />
				<ul className='flex gap-5'>
					<li className='font-medium cursor-pointer'>Home</li>
					<li className='font-medium cursor-pointer'>Your Tasks</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar