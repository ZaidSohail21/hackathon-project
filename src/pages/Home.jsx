import React from 'react'
import Navbar from '../component/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg">
          This is the home page of our React application. Use the navigation bar to explore different sections.
        </p>
      </div>
    </div>
  )
}

export default Home
