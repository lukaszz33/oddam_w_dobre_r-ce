import React from 'react'
import HomeHeader from './HomeHeader/HomeHeader'
import HomeThreeColumns from './HomeThreeColumns/HomeThreeColumns'
import HomeSteps from './HomeSteps/HomeSteps'
import HomeAbout from './HomeAbout/HomeAbout'
import Contact from './Contact/Contact'
import { Outlet } from 'react-router-dom'



const Home = () => {
	return (
		<>
			<HomeHeader />
			<HomeThreeColumns />
			<HomeSteps />
			<HomeAbout />
			<Contact />
		</>
	)
}

export default Home