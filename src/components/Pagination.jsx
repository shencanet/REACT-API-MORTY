import React from 'react'
import App from '../App';

const Pagination = ({prev, next, onPrevious, onNext}) => {
    const handlePrevious = () => {
        onPrevious();
    };

    const handleNext = () => {

        onNext();
    };
    
    
    


  return (
    <nav>
        <ul className='pagination justify-content-center'>
        {prev ? (
            <li className='page-item'>
                <button className='page-link' onClick={handlePrevious}>Previous</button>

            </li>
            ) : null}
            <li className='page-item'>
                <button className='page-link' onClick={handleNext}>Next</button>

            </li>
        </ul>

    </nav>
  )
}

export default Pagination