import React from 'react'
import Decoration from '../../assets/Decoration.svg'
import icon1 from '../../assets/Icon-1.svg'
import icon2 from '../../assets/Icon-2.svg'
import icon3 from '../../assets/Icon-3.svg'
import icon4 from '../../assets/Icon-4.svg'
import { Link } from 'react-router-dom'

const HomeSteps = () => {
	return (
		<>
			<div className='homesteps__box--title' id='steps'>
				<h2 className='global__title'>Wystarczą 4 proste kroki</h2>
				<img src={Decoration} alt='dekoracja' />
			</div>
			<div className='homesteps__box--main'>
				<div className='homesteps__box--small'>
					<img className='homesteps__icons' src={icon1} alt='ikona t-shirtu' />
					<p className='homesteps__text1'>Wybierz rzeczy</p>
					<p className='homesteps__text1 homesteps__text2'>
						ubrania, zabawki,
						<br /> sprzęt i inne
					</p>
				</div>
				<div className='homesteps__box--small'>
					<img className='homesteps__icons' src={icon2} alt='ikona torby' />
					<p className='homesteps__text1'>Spakuj je</p>
					<p className='homesteps__text1 homesteps__text2'>
						skorzystaj z<br /> worków na śmieci
					</p>
				</div>
				<div className='homesteps__box--small'>
					<img className='homesteps__icons' src={icon3} alt='ikona lupki' />
					<p className='homesteps__text1'>
						Zdecyduj komu
						<br /> chcesz pomóc
					</p>
					<p className='homesteps__text1 homesteps__text2'>
						wybierz zaufane
						<br /> miejsce
					</p>
				</div>
				<div className='homesteps__box--small'>
					<img className='homesteps__icons' src={icon4} alt='ikona kuriera' />
					<p className='homesteps__text1'>Zamów kuriera</p>
					<p className='homesteps__text1 homesteps__text2'>
						kurier przyjedzie
						<br /> w dogodnym terminie
					</p>
				</div>
			</div><Link to='/logowanie' style={{ textDecoration:'none' }}>
			<div className='header__buttons--item homesteps__button'>
				ODDAJ
				<br /> RZECZY
			</div></Link>
		</>
	)
}

export default HomeSteps