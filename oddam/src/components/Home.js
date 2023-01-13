import React from 'react'
import HomeHeader from './HomeHeader/HomeHeader'
import HomeThreeColumns from './HomeThreeColumns/HomeThreeColumns'
import HomeSteps from './HomeSteps/HomeSteps'
import HomeAbout from './HomeAbout/HomeAbout'
import { Outlet } from 'react-router-dom'



const Home = () => {
	return (
		<>
			<HomeHeader />
			<HomeThreeColumns />
			<HomeSteps />
			<HomeAbout />
		</>
	)
}

export default Home