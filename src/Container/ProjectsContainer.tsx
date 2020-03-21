import React from 'react';
import { Route } from 'react-router-dom';
import CreateProject from '../components/Projects/CreateProject'
import Login from '../components/Auth/Login/Login'
import Register from '../components/Auth/Register/Register'
import ProjectsList from '../components/Projects/ProjectsList'


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