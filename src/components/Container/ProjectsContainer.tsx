import React, { useState } from 'react';
import CreateProject from '../Projects/CreateProject';
import Login from '../Auth/Login/Login'
import Register from '../Auth/Register/Register'
import ProjectsList from '../Projects/ProjectsList'


const ProjectsContainer = ()=>{
      return (
        <div>
            <CreateProject />
            <Login />
            <Register />
            <ProjectsList />          
        </div>
        )
    } 
  export default ProjectsContainer;