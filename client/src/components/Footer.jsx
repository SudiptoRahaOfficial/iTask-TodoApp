import React from 'react'
import Logo from './Logo'

function Footer() {
	return (
		<footer className='bg-yellow-500 py-2'>
			<div className='container w-3/4 m-auto flex justify-between'>
				<Logo />
				<span className='text-sm font-serif cursor-pointer'>
					&copy; {new Date().getFullYear()} iTask. All rights
					reserverd.
				</span>
			</div>
		</footer>
	)
}

export default Footer