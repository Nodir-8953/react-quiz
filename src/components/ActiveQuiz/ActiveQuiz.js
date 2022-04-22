import React, { Component } from 'react'
import classes from './ActiveQuiz.css'
import AnswerList from './AnswerList/AnswerList'

const ActiveQuiz = props => (
    <div className='ActiveQuiz'>
            <p className='Question'>
                <span>
                    <strong>
                        {props.activeQuestion}.
                    </strong>&nbsp;
                    {props.question}
                </span>
                <small>{props.activeQuestion} of {props.quizLength}</small>
            </p>
            <AnswerList
                answer={props.answers}
                answerClick={props.answerClick}
                state={props.state}
            />
        </div>
)
 
export default ActiveQuiz;