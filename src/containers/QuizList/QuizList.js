import React, { Component } from 'react';
import classes from './QuizList.module.css'
import {Link} from 'react-router-dom'
export default class QuizList extends Component {
    renderQuizes(){
        return [1,2,3].map((quiz, index)=>{
            return (
                <li 
                    key={index}
                >
                    <Link
                        to={'/quiz/' + quiz}
                    >
                        Test {quiz}
                    </Link>
                </li>
            )
        })
    }
    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>List of tests</h1>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
               
            </div>
        )
    }
}