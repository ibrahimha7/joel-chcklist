import React from 'react';
import { Route } from 'react-router-dom';
import CreateProject from '../Projects/CreateProject';
import Login from '../Auth/Login/Login'
import Register from '../Auth/Register/Register'
import ProjectsList from '../Projects/ProjectsList'


const ProjectsContainer = ()=>{
      return (
        <div>
            <Route path="/login" exact render = { () => <Login />}/>
            <Route path="/register" exact render = { () => <Register /> }/>
            <Route path="/" exact render = { () => <ProjectsList /> }/>
            <Route path="/" exact render = { () => <CreateProject /> }/>

            
            
            
                     
        </div>
        )
    } 
  export default ProjectsContainer;