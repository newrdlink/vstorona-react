import React from 'react'
import './ErrorByResponse.css'

const ErrorByResponse = ({ errorResponse }) => {
  return (
    <span className="error-response">{errorResponse}</span>
  )
}

export default ErrorByResponse
