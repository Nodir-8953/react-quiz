import React from 'react';
import Button from '../ui/Button/Button'
import classes from './FinishedQuiz.module.css'
import {Link} from 'react-router-dom'
const FinishedQuiz = props =>{
    const succesCount = Object.keys(props.results).reduce((total, key)=>{
        if(props.results[key]==='succes'){
            total++
        }
        return total
    }, 0)
    return(
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index)=>{
                    const cls = [
                        'fa',
                        props.results[quizItem.id]==='error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ]
                    return(
                        <li key={index}>
                            <strong>
                                {index+1}
                            </strong>. &nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>
            <p>True is {succesCount} on {props.quiz.length}</p>
            <div>
                {/* <button onClick={props.retry}>Repeat</button> */}
                <Button 
                    onClick={props.retry} 
                    type='primary'
                >
                    Repeat
                </Button>
                <Link to='/'>
                    <Button 
                        type='succes'
                    >
                        Go to the test list
                    </Button>
                </Link>
            </div>
        </div>
    )
}
export default FinishedQuiz