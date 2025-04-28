import React from 'react';

const Countries = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center p-5'>
      {/* UAE */}
      <div className="card bg-[#EFF3EA] h-84 w-96 shadow-sm">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VUFFfGVufDB8MHwwfHx8MA%3D%3D"
            alt="UAE"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">United Arab Emirates</h2>
          <p>Home to Dubai’s futuristic skyline and Abu Dhabi’s Grand Mosque, UAE blends modern luxury with deep cultural roots.</p>
        </div>
      </div>

      {/* Jordan */}
      <div className="card bg-[#EFF3EA] h-84 w-96 shadow-sm">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1699940164730-0b60f5c88d5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEpvcmRhbnxlbnwwfDB8MHx8fDA%3D"
            alt="Jordan"
          />
        </figure>
        <div className="card-body  text-black">
          <h2 className="card-title">Jordan</h2>
          <p>Jordan is famous for Petra, the ancient rose-red city carved into cliffs, and the healing waters of the Dead Sea.</p>
        </div>
      </div>

      {/* Saudi Arabia */}
      <div className="card bg-[#EFF3EA] h-74 w-96 shadow-sm">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1590959914819-b767b9fe4cfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2F1ZGklMjBBcmFiaWF8ZW58MHwwfDB8fHww"
            alt="Saudi Arabia"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">Saudi Arabia</h2>
          <p>Explore Al-Ula’s ancient tombs and rock formations, and the spiritual heart of Islam in Mecca and Medina.</p>
        </div>
      </div>

      {/* Oman */}
      <div className="card bg-[#EFF3EA] w-96 h-84 shadow-sm">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1621680696874-edd80ce57b72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T21hbnxlbnwwfDB8MHx8fDA%3D"
            alt="Oman"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">Oman</h2>
          <p>Oman offers a calm and authentic Arabian experience with forts, deserts, mountains, and pristine beaches.</p>
        </div>
      </div>

      {/* Qatar */}
      <div className="card bg-[#EFF3EA] w-96 h-84 shadow-sm">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1669300884869-e6e11c67c031?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cWF0YXJ8ZW58MHwwfDB8fHww"
            alt="Qatar"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">Qatar</h2>
          <p>Modern skyscrapers meet traditional souqs in Doha, while desert safaris and museums offer rich cultural experiences.</p>
        </div>
      </div>

      {/* Lebanon */}
      <div className="card bg-[#EFF3EA] w-96 h-84 shadow-sm">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1501960645408-12c9bcfca49f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGViYW5vbnxlbnwwfDB8MHx8fDA%3D"
            alt="Lebanon"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">Lebanon</h2>
          <p>Lebanon mixes Mediterranean charm with ancient ruins like Baalbek and modern life in Beirut’s vibrant streets.</p>
        </div>
      </div>
    </div>
  );
};

export default Countries;
