import React from 'react'
import ImageHero from '../../assets/Home-Hero-Image.jpg'
import Decoration from '../../assets/Decoration.svg'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

const HomeHeader = () => {
	return (
		<div className='header__box header__box--main'>
			<img className='header__image' src={ImageHero} alt='banner' />
			<div className='header__box--content'>
				<div className='header__banner--box'>
					<h1 className='global__title'>
						Zacznij pomagać! <br />
						Oddaj niechciane rzeczy w zaufane ręce
					</h1>
					<img src={Decoration} alt='dekoracja' />
					<div className='header__buttons--box'>
						<Link to='/logowanie'>
						<button className='header__buttons--item'>
							ODDAJ
							<br /> RZECZY
						</button>
						</Link>
						<Link to='/logowanie'>
						<button className='header__buttons--item'>ZORGANIZUJ<br/> ZBIÓRKĘ</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeHeader