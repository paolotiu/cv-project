import React, { Component } from 'react'
import {onChangeHandler, submitHandler} from './helper'
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
                <div>
                    <p>
                        {firstName} {lastName}
                    </p>
                    <p>{email}</p>
                    <p>{number}</p>

                    <button
                        type="button"
                        onClick={() => this.setState({ editing: true })}
                    >
                        Edit
                    </button>
                </div>
            )
        } else {
            return (
                <div>
                    <form onSubmit={this.submitHandler}>
                        <div className="name">
                            <input
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={this.onChangeHandler}
                            />
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



// class Name extends Component{
//     constructor(props){
//         super(props)
//         this.state = {

//         }

//     }

//     render(){
//         let {firstName, lastName, onChangeHandler, submitHandler} = this.props
//         if(!this.props.editing){
//             return(
//                 <p>{firstName} {lastName}</p>
//                 )
//         }else{
//             return(
//             <div>
//                 <form onSubmit={submitHandler}>
//                     <input type="text" name='firstName' value={firstName} onChange={onChangeHandler}/>
//                     <input type="text" name='lastName' value={lastName} onChange={onChangeHandler}/>
//                     <button type='submit'> Submit </button>
//                 </form>
//             </div>
//             )

//         }

//     }
// }

export default GeneralInfo
