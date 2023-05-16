import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRoute = ({isAuth, redirect, children, adminRoute=false, isAdmin}) => {
  if(!isAuth){
    return <Navigate to={redirect ? redirect : '/login'}/>
  }

  if(adminRoute && !isAdmin){
    return <Navigate to={redirect ? redirect : '/'}/>
  }
  
  return children ? children : <Outlet/>
}

export default ProtectedRoute