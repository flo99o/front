import React from 'react'
import Comment from '../components/Comment'
import Hero from '../components/Hero'
import LatestJob from '../components/LatestJob'
import FilterBar from '../components/FilterBar'
import NavBar from '../components/Navbar'

 const Homepage = () => {
    return (
        <div className="global_container global_container--homepage">
             <NavBar />
            <Hero/>
            <FilterBar />
            <LatestJob/>
            <Comment/>
        </div>
    )
}

export default Homepage