import React from 'react';
import './Rental.css';
import { rental } from '../../data';

const Rental = () => {
  return (
    <div className="Rental__Container">
      <h2>Rental Properties</h2>

      <div className="Rental__Cards">
        {rental &&
          rental.map((data) => (
            <div className="Rental__Card" key={data.id}>
              <div className="Card__Upper">
                <img src={data.image} alt="blog" />
              </div>
              <div className="Card__Below">
                <h3>{data.heading}</h3>
                <div className='Rental__Middle'>
                  <div className='Rental__Middle__Left'>


                    <img src="/assets/Rental/bedroom.jpeg" alt="blog" />
                    <p>{data.bedrooms} Bedrooms</p>
                  </div>
                  <div className='Rental__Middle__Middle'>


                    <span> | </span>

                  </div>
                  <div className='Rental__Middle__Right'>


                    <img src="/assets/Rental/guest.jpeg" alt="blog" />
                    <p>{data.guests} Guests</p>
                  </div>
                </div>

              <h4>Starting from</h4>
              <div className='Rental__Bottom'>

                <h3>{data.amount}</h3>
                <span>night</span>
              </div>
              </div>
            </div>

          ))}
      </div>
    </div>
  );
};

export default Rental;
