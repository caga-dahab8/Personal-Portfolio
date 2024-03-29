import React from 'react'
import hospital from "../assets/HospitalWeb.png"
import University from "../assets/UniversityDashboard.png"
import hotel from "../assets/HotelWebsite.png"
import register from "../assets/UniversityRegisterationSystem.png"
import task from "../assets/TaskApp.png"
import gusser from "../assets/GusserApp.png"


export default function Projects() {
  return (
    <section id='Projects'>
            <div className='Projects'>
                <h1>Some Of My <span>Projects</span></h1>
                <div className="box-container">
                <div className="box">
                        <img src={hospital} alt="Hospital Web" />
                        <h4>Hospital Web</h4> 
                    </div>
                    <div className="box">
                        <img src={University} alt="University Management System" />
                        <h4>University Management System</h4>
                    </div>
                    <div className="box">
                        <img src={hotel} alt="Hotel Web" />
                        <h4>Hotel Web</h4>
                    </div>
                    <div className="box">
                        <img src={register} alt="Student Registeration System" />
                        <h4>Student Registeration System</h4>
                    </div>
                    <div className="box">
                        <img src={task} alt="Task App" />
                        <h4>Task App</h4>
                    </div>
                    <div className="box">
                        <img src={gusser} alt="Gusser App" />
                        <h4>Gusser App</h4>
                    </div>
                </div>
            </div>
        </section>
  )
}
