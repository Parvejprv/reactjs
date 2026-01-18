import React from 'react'
import Card from "./components/Card.jsx"
const App = () => {
  return (
    <div className='parent'>
      <Card user="Shivam Kumar" age={28} description="Lorem ipsum dolor sit amet consectetur adipisicing elit." img="https://images.unsplash.com/photo-1713185439228-6d18bf581881?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="giannatti network"
        alt="profile picture" />
      <Card user="Parvej Alam" age={27} description="Lorem ipsum dolor sit amet consectetur adipisicing elit."  img="https://images.unsplash.com/photo-1673992274796-1ac08c514b40?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="solid-old view profile picture"
        alt="profile picture" />

      <Card user="Mark Abram" age={27} description="Lorem ipsum dolor sit amet consectetur adipisicing elit."  img="https://images.unsplash.com/photo-1766543497004-2fd76e88f605?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="solid-old view profile picture"
        alt="profile picture" />
     
    </div>
  )
}

export default App
