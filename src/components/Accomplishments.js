import React, {Component} from 'react'
import {submitHandler, onChangeHandler} from './helper'
import uniqid from "uniqid";

class Accomplishments extends Component{
    constructor(props){
        super(props)

        this.state = {
            editing: false,
            titleTemp: '',
            paragraphTemp: '',
            titles: ['sample', 'test'],
            paragraphs: ['dnsodskadjkasd', 'iasjdioasjiojsd']
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
                <div>
                    {titles.map((title, index) => <MainText title={title} paragraph={paragraphs[index]} index={index}
                    submitHandler={this.submitHandler} key={uniqid()} />)}
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
                <div>
                    <p>{title}</p>  
                    <p>{paragraph}</p>
                    <span className="material-icons edit" onClick={() => this.setState({editing: true})} >
                    edit
                    </span>  
                </div>         
            )
        }else{
            return(
                <form >
                    <input type="text" name="title" value={title} onChange={this.onChangeHandler} />
                    <br/>
                    <textarea cols="50" rows="10" name="paragraph" value={paragraph} onChange={this.onChangeHandler}></textarea>
                    <button type="button" onClick={() => this.props.submitHandler(title, paragraph, this.props.index)}>Submit</button>
                </form>
            )
        }
    }
}


export default Accomplishments