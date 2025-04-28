import React from 'react'

const Carousel = () => {
  return (
    <div>
            <div className="carousel rounded-box h-[80vh] grid  grid-cols-6 ">
<div className="carousel-item relative">
  <img
    src="https://img.freepik.com/free-photo/front-view-man-wearing-scarf-desert_23-2149408639.jpg?ga=GA1.1.131577898.1742157551&semt=ais_hybrid&w=740"
    alt="Dhaka"
    className="w-full object-cover transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
  />
  <p className="absolute bottom-0 bg-[#FFFDF0] bg-opacity-50 text-black w-full text-center p-2 transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
  Jordan
    </p>
</div>
<div className="carousel-item relative">
  <img
    src="https://images.pexels.com/photos/5973562/pexels-photo-5973562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Dhaka"
    className="w-full object-cover transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
  />
  <p className="absolute bottom-0 bg-[#FFFDF0] bg-opacity-50 text-black w-full text-center p-2">
  Saudi Arabia
  </p>
</div>
<div className="carousel-item relative">
  <img
    src="https://images.pexels.com/photos/30133114/pexels-photo-30133114/free-photo-of-portrait-of-elderly-nomad-in-mhamid-desert-morocco.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="Dhaka"
    className="w-full object-cover transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
  />
  <p className="absolute bottom-0 bg-[#FFFDF0] bg-opacity-50 text-black w-full text-center p-2">
    Yemen
  </p>
</div>
<div className="carousel-item relative">
  <img
    src="https://images.pexels.com/photos/29831897/pexels-photo-29831897/free-photo-of-egyptian-farmer-with-cows-in-rural-cairo.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="Dhaka"
    className="w-full object-cover transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
  />
  <p className="absolute bottom-0 bg-[#FFFDF0] bg-opacity-50 text-black w-full text-center p-2">
    Morocco
  </p>
</div>
<div className="carousel-item relative">
  <img
    src="https://img.freepik.com/free-photo/group-friends-looking-menu-arab-restaurant_23-2147796863.jpg?ga=GA1.1.131577898.1742157551&semt=ais_hybrid&w=740"
    alt="Dhaka"
    className="w-full object-cover transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
  />
  <p className="absolute bottom-0 bg-[#FFFDF0] bg-opacity-50 text-black w-full text-center p-2">
    Tunisia
  </p>
</div>
<div className="carousel-item relative">
  <img
    src="https://img.freepik.com/free-photo/muslim-man-front-golden-wall_23-2147796853.jpg?ga=GA1.1.131577898.1742157551&semt=ais_hybrid&w=740"
    alt="Dhaka"
    className="w-full object-cover transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
  />
  <p className="absolute bottom-0 bg-[#FFFDF0] bg-opacity-50 text-black w-full text-center p-2">
    Egypt
  </p>
</div>

</div>
    </div>
  )
}

export default Carousel