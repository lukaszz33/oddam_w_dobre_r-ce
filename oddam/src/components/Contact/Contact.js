import React from 'react'
import decoration from '../../assets/Decoration.svg'
import background from '../../assets/Background-Contact-Form.jpg'
import facebook from '../../assets/Facebook.svg'
import instagram from '../../assets/Instagram.svg'
import { useState } from 'react'

const Contact = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [name, setName] = useState(false)
	const [email, setEmail] = useState(false)
	const [text, setText] = useState(false)

	const handleChange = e =>
		setForm(prev => ({
			...prev,
			[e.target.id]: e.target.value,
		}))

	const submitHandler = async e => {
		e.preventDefault()

		if (!form.name || form.name.length < 1 || form.name.includes(' ')) {
			setName(true)
		} else {
			setName(false)
		}
		if (!form.email || form.email.length < 4 || !form.email.includes('@')) {
			setEmail(true)
		} else {
			setEmail(false)
		}
		if (!form.text || form.text.length < 120 ) {
			setText(true)
		} else {
			setText(false)
		}
		const body = JSON.stringify({
			form,
		})

		const res = await fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body,
		})
		console.log(res)
		const resul = await res.json()
		console.log(resul)
	}

	return (
		<>
			<div className='contact__box' id='contact'>
				<div className='contact__box--img'>
					<img className='contact__image--item' src={background} alt='ubrania' />
				</div>
				<div className='contact__box--content'>
					<h2 className='global__title'>Skontaktuj się z nami!</h2>

					<img src={decoration} alt='dekoracja' />
					<form onSubmit={submitHandler}>
						<div className='contact__inputs--box'>
							<div className='contact__name--box'>
								<p className='contact__placeholder'>Wpisz swoje imię</p>
								<input
									id='name'
									className={`contact__inputs--item ${text === false ? true : ('contact__validate--error-border')}`}
									type={'text'}
									value={form.name}
									onChange={handleChange}></input>
									{name === false ? true : ( <p className='contact__validate--error'>Podanę imię jest nieprawidłowe</p>)}
							</div>
							<div className='contact__email--box'>
								<p className='contact__placeholder'>Wpisz swłój email</p>
								<input
									id='email'
									className={`contact__inputs--item ${text === false ? true : ('contact__validate--error-border')}`}
									type={'email'}
									value={form.email}
									onChange={handleChange}></input>
									{email === false ? true : ( <p className='contact__validate--error'>Podany e-mail jest nieprawidłowy</p>)}
							</div>
						</div>
						<div className='contact__textarea--box'>
							<p className='contact__placeholder'>Wpisz swoją wiadomość</p>
							<textarea
								id='text'
								className={`contact__inputs--item contact__inputs--textarea ${text === false ? true : ('contact__validate--error-border')}`}
								type={'textarea'}
								value={form.text}
								onChange={handleChange}
							/>
							{text === false ? true : ( <p className='contact__validate--error'>Wiadomość musi zawierać conajmniej 120 znaków</p>)}
						</div>
						<button className='contact__button' type='submit'>
							Wyślij
						</button>
					</form>
				</div>
			</div>

			<p className='contact__footer--txt'>Copyright by Coders Lab</p>
			<div className='contact__footer--box'>
				<div className='contact__footer--icons'>
					<img className='contact__footer--fb' src={facebook} alt='ikonka facebooka' />
					<img className='contact__footer--ig' src={instagram} alt='ikonka instagrama' />
				</div>
			</div>
		</>
	)
}

export default Contact