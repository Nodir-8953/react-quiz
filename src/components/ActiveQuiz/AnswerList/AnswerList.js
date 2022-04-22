import React from 'react';
import './AnswerList.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswerList = props => (
    <ul className='AnswerList'>
            {props.answer.map((answer, index)=>{
                return (
                    <AnswerItem
                        key={index}
                        answer={answer}
                        answerClick={props.answerClick}
                        state={props.state ? props.state[answer.id] : null}
                    />
                )
            })
        }
        </ul>
)
 
export default AnswerList;