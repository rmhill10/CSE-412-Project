import React from 'react'
import ComputerPartList from '../components/ComputerPartList'
import Header from '../components/Header'
import SortComputerParts from '../components/SortComputerParts'

const Home = () => {
    return (
        <div>
            <Header/>
            <SortComputerParts/>
            <ComputerPartList/>
        </div>
    )
}

export default Home
