import React, { useEffect, useState } from 'react'
import Decoration from '../../assets/Decoration.svg'
import { Link } from 'react-router-dom'
export default function Login() {
	return (
		<>
			<div className='login__box'>
				<h2 className='global__title'>Zaloguj się</h2>
				<img src={Decoration} alt='dekoracja' className='login__decoration' />
				<div className='login__inputs--box'>
					<p className='login__input--title'>Email</p>
					<input className='contact__inputs--item'></input>
					<p className='login__input--title'>Hasło</p>
					<input className='contact__inputs--item'></input>
				</div>
				<div className='login__action--box'>
				<Link to='/rejestracja'>
					<button className='header__login--buttons login__button--action'>Załóż konto</button></Link>
					<button className='header__login--buttons login__button--action'>Zaloguj się</button>
				</div>
			</div>
		</>
	)
}