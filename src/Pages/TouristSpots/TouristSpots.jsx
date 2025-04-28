import React from 'react'
import { Link } from 'react-router-dom';

const TouristSpots = ({touristspots}) => {

    const {id, name, location, image, description}= touristspots;

  return (
    <div>
<div className="card card-side text-black bg-[#EFF3EA] shadow-sm hover:shadow-lg ">
  <figure>
    <img
    className='h-84 w-84 object-fit'
      src={image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl text-black">{name}</h2>
    <p>{location}</p>
    <div className="card-actions justify-end">
       <Link to={`/touristspots/${id}`}>
       <button className="btn btn-primary">View Details</button>
       </Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default TouristSpots