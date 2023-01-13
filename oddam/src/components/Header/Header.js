import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<div className='header__box--login'>
				<Link to='/logowanie'>
					<button className='header__login--buttons'>Zaloguj</button>
				</Link>
				<Link to='/rejestracja'>
					<button className='header__login--buttons'>Załóż konto</button>
				</Link>
			</div>
			<div>
				<nav>
					<ul className='header__nav'>
						<li className='header__nav--item'>
							<a className='header__nav--link' href='/'>
								Start
							</a>
						</li>
						<LinkScroll to='steps' smooth={true} duration={900}>
							<li className='header__nav--item'>O co chodzi ?</li>
						</LinkScroll>
						<LinkScroll to='aboutus' smooth={true} duration={900}>
							<li className='header__nav--item'>O nas</li>
						</LinkScroll>
						<LinkScroll to='ourhelp' smooth={true} duration={900}>
							<li className='header__nav--item'>Fundacja i organizacje</li>
						</LinkScroll>
						<LinkScroll to='contact' smooth={true} duration={900}>
							<li className='header__nav--item'>Kontakt</li>
						</LinkScroll>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default Header