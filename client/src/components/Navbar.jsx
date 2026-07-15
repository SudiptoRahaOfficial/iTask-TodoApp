import React from 'react'
import Logo from './Logo'

function Navbar() {
	return (
		<nav className='bg-indigo-300 py-2'>
			<div className='w-14/15 sm:w-3/4 m-auto flex justify-between items-center'>
				<Logo />
				<ul className='flex gap-4 sm:gap-6'>
					<li className='text-sm sm:text-base font-medium cursor-pointer'>
						Home
					</li>
					<li className='text-sm sm:text-base font-medium cursor-pointer'>
						Your Tasks
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar