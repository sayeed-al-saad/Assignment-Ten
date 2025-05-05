import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'


const Details = () => {

  const {id} = useParams();
  const spots = useLoaderData();

  const spot = spots.find(item => item.id === parseInt(id))

  return (
    <div className='flex gap-5 m-5'>
      <div className='flex-1/4'>
          <img className='h-[80vh] object-contain rounded-2xl w-full' src={spot.image} alt="" />
      </div>
      <div className='flex-3/4 p-10 rounded-2xl bg-[#EFF3EA]'>
          <p className='text-4xl font-black text-black'>{spot.name}</p>
          <p className='text-xl font-extrabold text-black pt-2'>{spot.location}</p>
          <p className='text-md font-medium text-black pt-5'>{spot.description}</p>
          <p className='text-black text-xl font-extrabold mt-10 mb-4'>Facilities:</p>
          <div className='flex gap-16 text-accent-content'>
            {/* For TSX uncomment the commented types below */}
                
            <div className="flex flex-wrap gap-20git">
  <div className="flex flex-col items-center">
    <div className="radial-progress" style={{ "--value": 56 }} aria-valuenow={56} role="progressbar">56%</div>
    <p className="mt-2 text-sm font-medium">Transportation</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="radial-progress" style={{ "--value": 20 }} aria-valuenow={20} role="progressbar">20%</div>
    <p className="mt-2 text-sm font-medium">Food</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="radial-progress" style={{ "--value": 60 }} aria-valuenow={60} role="progressbar">60%</div>
    <p className="mt-2 text-sm font-medium">Accommodation</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="radial-progress" style={{ "--value": 80 }} aria-valuenow={80} role="progressbar">80%</div>
    <p className="mt-2 text-sm font-medium">Safety</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="radial-progress" style={{ "--value": 100 }} aria-valuenow={100} role="progressbar">100%</div>
    <p className="mt-2 text-sm font-medium">Sightseeing</p>
  </div>
</div>

          </div>
          <button className='btn btn-active  w-full mt-26'> <span className='font-extrabold'>Cost:</span> {spot.estimatedCostFromBangladesh}</button>
      </div>
    </div>
  )
}

export default Details