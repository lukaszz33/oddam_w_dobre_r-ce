import React from 'react'
import HomeHeader from './HomeHeader/HomeHeader'
import HomeThreeColumns from './HomeThreeColumns/HomeThreeColumns'
import HomeSteps from './HomeSteps/HomeSteps'
import HomeAbout from './HomeAbout/HomeAbout'
import Contact from './Contact/Contact'
import Login from './Login/Login';
import { Outlet } from 'react-router-dom'
import { HomeWhoWeHelp } from './HomeWhoWeHelp/HomeWhoWeHelp'



const Home = () => {
	return (
		<>
			<HomeHeader />
			<HomeThreeColumns />
			<HomeSteps />
			<HomeAbout />
			<HomeWhoWeHelp/>
			<Contact />
		</>
	)
}

export default Home