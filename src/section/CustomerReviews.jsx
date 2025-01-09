import React from 'react'
import { reviews } from '../constants/data'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Are
        <span className='text-coral-red '>Our Customers</span> Saying?

      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map(review => {
          return <ReviewCard key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
    })}
      </div>
    </section>
  )
}

export default CustomerReviews