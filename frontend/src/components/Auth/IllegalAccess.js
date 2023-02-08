import React from 'react'
import {Navigate } from 'react-router-dom'
import {useAlert} from 'react-alert'

const IllegalAccess = () => {
    const alert = useAlert();

    alert.error("Please Login to access this resource")

       

  return  < Navigate to = "/login" />
      
}

export default IllegalAccess