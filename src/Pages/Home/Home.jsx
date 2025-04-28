import React from 'react'
import Carousel from '../Carousel/Carousel'
import TouristSpots from '../TouristSpots/TouristSpots'
import { useLoaderData } from 'react-router-dom'
import Countries from '../Countries/Countries'

const Home = () => {

  const touristspots = useLoaderData();
  console.log(touristspots)

  return (
    <div className='space-y-10 m-5 bg-[#F8FAFC]'>
      <Carousel></Carousel>
      <div className='grid grid-cols-3 gap-5'>
          {
            touristspots.map((atouristspots) => (<TouristSpots key={atouristspots.id} touristspots={atouristspots} ></TouristSpots>))
          }
      </div>
      <Countries></Countries>
    </div>
  )
}

export default Home