import React, { Component } from 'react'
import {onChangeHandler, submitHandler} from './helper'
import cat from '../static/cat.jpg'
import './General.css'

class GeneralInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            firstName: 'Gabriel Paolo',
            lastName: 'Tiu',
            number: 12345678910,
            email: 'paolotiu17@gmail.com',
        }

        this.onChangeHandler = onChangeHandler.bind(this)
        this.submitHandler = submitHandler.bind(this)
    }

    render() {
        let { email, number, editing, firstName, lastName } = this.state

        if (!editing) {
            return (
                <div className="general-info">
                    <img src={cat} alt="" className="profile-pic"/>
                    <p>
                        {firstName} {lastName}
                    </p>
                    <p>{email}</p>
                    <p>{number}</p>
                    {/* <div className="button-group">
                        <Btn name="Experience"/>
                        <Btn name="Projects"/>
                    </div> */}
                    <br/>
                    <span className="material-icons edit"  onClick={() => this.setState({ editing: true })}>
                    edit
                    </span>
                    
                </div>
            )
        } else {
            return (
                <div className="general-info">
                    <form onSubmit={this.submitHandler}>
                        <div className="name">
                            <input
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={this.onChangeHandler}
                            />
                            <br/>
                            <br/>
                            <input
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={this.onChangeHandler}
                            />
                        </div>
                        <div className="email">
                            <input 
                                type="text" 
                                name="email" 
                                value={email}
                                onChange={this.onChangeHandler}
                            />
                        </div>
                        <div className="number">
                            <input
                                type="tel"
                                name="number"
                                value={number}
                                onChange={this.onChangeHandler}
                            />
                        </div>
                        <button type="submit"> Submit </button>
                    </form>
                </div>
            )
        }
    }
}


function Btn(props){
    return(
        <button className="btn btn-light" >{props.name}</button>
    )
}

export default GeneralInfo
