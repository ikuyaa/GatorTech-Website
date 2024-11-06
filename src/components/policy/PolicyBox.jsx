'use client';
import React from 'react'
import './PolicyBox.css'
import Link from 'next/link';

const PolicyBox = () => {
  return (
    <div className="policy-box-container">
        <h1 className="policy-header"> Privacy Policy</h1>
        <p className="policy-last-updated">Last updated: July 04, 2024</p>
        <p className="policy-header-p">
            Temp Header.
        </p>
        <ol className="table-of-contents">
            <h1 className="table-of-contents-h1">Table of Contents</h1>
            <li><Link href="#section-1">Temp</Link></li>

        </ol>

        <div className="policy-section" id="section-1">
          <h2>1. Temp</h2>
          <p>
          Temp.
          </p>
        </div>
    </div>
  )
}

export default PolicyBox
