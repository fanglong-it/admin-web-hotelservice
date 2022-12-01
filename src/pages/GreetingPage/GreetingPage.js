import React from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import "./GreetingPage.scss"
import GreetingContainer from '../../component/GreetingContainer/GreetingContainer';
import Navbar from '../../component/Navbar/Navbar';
export default function GreetingPage() {
  return (
    <div className="main-screen">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <GreetingContainer />
      </div>
    </div>
  )
}
