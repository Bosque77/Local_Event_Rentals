import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Margin = styled.div`
margin-left:1em
`

const NavText = styled.div`
	color: black;
	a{
		color:black;
		text-decoration: none;
	};


`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const M: any

const NavBar = () => {


	useEffect(() => {
		const elems = document.querySelectorAll('.dropdown-trigger')
		M.Dropdown.init(elems, {})
	}, [])



	return (
		<nav>

			<div className="nav-wrapper left-align white">
				<NavText>
					<Margin>
						<a href="#" className="brand-logo">Local Event Rentals</a>
					</Margin>

					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/about'>About</Link></li>
						<li className='dropdown-trigger' data-target='dropdown1'><Link to='/products'>Products</Link></li>
						<li><Link to='/contact'>Contact</Link></li>
						<li><Link to='/FAQ'>FAQ</Link></li>
					</ul>
				</NavText>
			</div>

			<ul id='dropdown1' className='dropdown-content'>
				<li><a href="#!">one</a></li>
				<li><a href="#!">two</a></li>
				<li className="divider" tabIndex={-1}></li>
				<li><a href="#!">three</a></li>
				<li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
				<li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
			</ul>

		</nav>)
}

export default NavBar