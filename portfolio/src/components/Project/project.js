import React from 'react'
import { Button } from 'react-bootstrap'
import './project.css'
import project from '../../assets/project.png'


const Project = () => {
  return (
    <div class="col-md-12 p-5" id="projects">
        <h1 class="gradient__text titleText">PERSONAL WORK</h1>
            <div class="project-cards-container d-flex flex-row flex-nowrap">
                <div class="mx-3 my-3 p-4 card" style={{minWidth: '18rem', maxWidth: '35rem', height: '550px'}}>
                    <h5 class="card-header" style={{paddingBottom: '15px', paddingTop: '5px'}}>Vehicle Service Management System</h5>
                    <img class="card-img-top" src={project} alt='cdacproject' style={{objectFit: 'cover'}}/>
                    <div class="card-body">
                        <div class="card-title h5"> ReactJs, Spring Boot, MySQL </div>
                        <p class="card-text">Vehicle Service Management System is a application that implements a system that will automate
                        daily operations and transactions in a vehicle service garage.
                        </p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">
                            <Button href='https://github.com/AmitBodare/cdac_final_project.git'>Github Link</Button>
                        </small>
                    </div>
                </div>
                
            </div>
    </div>
  )
}

export default Project
