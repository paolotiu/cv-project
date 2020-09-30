import React, {Component} from 'react'
import {submitHandler, onChangeHandler} from './helper'
import uniqid from "uniqid";
import tictac from '../static/tictac.png'
import todo from '../static/todo.png'
import resto from '../static/resto.png'
import google from '../static/google.png'
import './Accomplishments.css'

class Accomplishments extends Component{
    constructor(props){
        super(props)

        this.state = {
            editing: false,
            titleTemp: '',
            paragraphTemp: '',
            titles: ['Education', 'Skills'],
            paragraphs: ['- Finished High School 2021', '-Proficient in Javascript(ES6) \n -Proficient in HTML and CSS \n -Basic skills in Python 3+ \n -Basic understanding of React JS']
        }

        this.submitHandler = this.submitHandler.bind(this);
        this.onChangeHandler = onChangeHandler.bind(this);
    }

    submitHandler(title, paragraph, index){
        let titles = this.state.titles.slice()
        let paragraphs = this.state.paragraphs.slice()
        titles[index] = title
        paragraphs[index] = paragraph
        this.setState({titles, paragraphs})
    }

    render(){
        let {editing, titles, paragraphs} = this.state;
        if(!editing){
            return(
                <div className="content">
                    <div className="text">
                    {titles.map((title, index) => <MainText  title={title} paragraph={paragraphs[index]} index={index}
                    submitHandler={this.submitHandler} key={uniqid()} />)}
                    </div>
                    <div className='projects'>
                        <Project title="To-Do list" link='https://paolotiu17.github.io/to-do-list/' 
                        desc="This project takes note of whatever you list. Using local storage the list stays even after refreshes"
                        img={todo}
                        />
                        <Project title="Tic-Tac-Toe" link="https://paolotiu17.github.io/tic-tac-toe/" 
                        desc="A simple tic-tac-toe game at first glance, but I spent most of the time configuring the AI using minimax algorithm"
                        img={tictac}
                        />
                        <Project title="Restaurant Page" link="https://paolotiu17.github.io/restaurant-page/" 
                        desc="In here I made a restaurant page that makes use of tabs, providing smooth and seamless tranistion to each page without reloading."
                        img={resto}
                        />
                        <Project title="Google Homepage Replica" link="https://paolotiu17.github.io/google-homepage/" 
                        desc="A design replica of the Google Homepage"
                        img={google}
                        />         
                    </div>             
                </div>
                
            )
        }else{
            return(
                <div>
                    <input type="textarea" />
                </div>
            )
        }
    }
}

class MainText extends Component{
    constructor(props){
        super(props)

        this.state = {
            title: this.props.title,
            paragraph: this.props.paragraph,
            editing: false
        }

        this.onChangeHandler = onChangeHandler.bind(this);
    }

    render(){
        let {editing, paragraph, title} = this.state

        if(!editing){
            return(
                <div className="maintext">
                    <h1 className="title">{title}</h1>  
                    <p className="paragraph">{paragraph}</p>
                    <span className="material-icons edit" onClick={() => this.setState({editing: true})} >
                    edit
                    </span>  
                </div>         
            )
        }else{
            return(
                <form className="maintext">
                    <input type="text" name="title" value={title} onChange={this.onChangeHandler} />
                    <br/>
                    <textarea cols="50" rows="10" name="paragraph" value={paragraph} onChange={this.onChangeHandler}></textarea>
                    <br/>
                    <button type="button" onClick={() => this.props.submitHandler(title, paragraph, this.props.index)}>Submit</button>
                </form>
            )
        }
    }
}

function Project(props){
    return(
        <div className="card">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <a href={props.link} ><h5 className="card-title">{props.title}</h5></a>
                <p className="card-text">{props.desc}</p>
            </div>
        </div>
    )
}


export default Accomplishments