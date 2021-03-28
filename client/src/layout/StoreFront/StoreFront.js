import React from 'react'
import TopNav from './TopNav';
import './../../css/style.css';

export default function StoreFront({children}) {
    return (
        <>
         <TopNav />
        {children}
      
      </>
      
    )
}
