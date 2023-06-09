import React, { createElement } from 'react'
import './MessagesBody.css';

export default function MessagesBody({userEmail, directMessage}) {
  if (directMessage) {
    return (
      <div>
        <p>{userEmail}</p>
        <p>{directMessage}</p>
      </div>
    )
  } else {
  return (
    null
  )
  }
}