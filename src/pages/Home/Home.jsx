import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/banner1/Banner'
import Rewards from '../../components/pages/rewards/rewards'
import WorkWithUs from '../../components/pages/workWithUs/workWithUs'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'
import GetStarted from '../../components/pages/getStarted/getStated'

const Home = () => {
    return (
        <div className='home-page'>
            <Navbar />
            <Banner/>
            <GetStarted/>
            <WorkWithUs/>
            <Rewards/>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default Home
