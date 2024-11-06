'use client';
import React, { useEffect, useState } from 'react'
import './HomeServiceStatus.css'
import getStatus from '@/helpers/getStatus';

export default function HomeServiceStatus() {
  let [currentStatus, setCurrentStatus] = useState(``)

  useEffect(() => {
    async function getCurrentStatus() {
      const statusReq = await getStatus();
      const statusText = JSON.stringify(statusReq);
      setCurrentStatus(statusText.replaceAll('"', ''));
    }
    
    getCurrentStatus();
  })

  
  function setStyle() {
    switch(currentStatus) {
      case 'Operational':
        return "status-text-operational"
      
      case 'Down':
        return "status-text-down"
    }
  }

  return (
    <div className='status-container'>
        <h1>Operations Status:</h1>&nbsp;&nbsp;<h1 className={setStyle()}>{currentStatus}</h1>
    </div>
  )
}
