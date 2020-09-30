import React from 'react'
import './Header.css'
import github from '../static/github.png'

function Header(props){

    return(
        <div className="header">
            <p>Tiu</p>      
            <a href="https://github.com/paolotiu17"><img src={github} alt="" /></a>
        </div>
    )
}

export default Header