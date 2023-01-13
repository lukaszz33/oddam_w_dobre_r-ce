import React from 'react'
import people from '../../assets/People.jpg'
import signature from '../../assets/Signature.svg'
import decoration from '../../assets/Decoration.svg'

const HomeAbout = () => {
	return (
		<>
			<div className='homeabout__box' id='aboutus'>
				<div className='homeabout__box--title'>
					<h2 className='global__title'>O nas</h2>
					<img src={decoration} alt='dekoracja' />
					<p className='homeabout__text'>
                    Nulla pulvinar, ex sed gravida consequat, felis ligula imperdiet sem, at condimentum arcu nunc nec sem.
					</p>
					<img className='homeabout__signature' src={signature} alt='podpis' />
				</div>
				<div className='homeabout__box--img'>
					<img className='homeabout__img--item' src={people} alt='ludzie' />
				</div>
			</div>
		</>
	)
}

export default HomeAbout