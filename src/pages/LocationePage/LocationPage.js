import React from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import LocationContainer from '../../component/LocationContainer/LocationContainer';
import Navbar from '../../component/Navbar/Navbar';
import "./LocationPage.scss"
export default function LocationPage() {
  return (
    <div className="main-screen">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <LocationContainer />
      </div>
    </div>
  )
}
