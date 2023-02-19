import React from 'react'

const Pagination = ({Previous, onNext}) => {
    const handlePrevious = () => {
        
    };

    const handleNext = () => {

    };
    
    
    


  return (
    <nav>
        <ul className='pagination justify-content-center'>
            <li className='page-item'>
                <button className='page-link' onClick={handlePrevious()}>Previous</button>

            </li>
            <li className='page-item'>
                <button className='page-link' onClick={handleNext()}>Next</button>

            </li>
        </ul>

    </nav>
  )
}

export default Pagination