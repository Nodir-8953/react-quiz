import React, { Component } from 'react';
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz' 
class Quiz extends Component {
    state={
        results: {}, //{[id]: succes error}
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // {[id]: succes error}
        quiz: [
            {
                question: "What color of sky?",
                rightAnswer: 3,
                id: 1,
                answers: [

                        {text: 'Green', id: 1},
                        {text: 'Black', id: 2},
                        {text: 'Blue', id: 3},
                        {text: 'White', id: 4}
                    
                ]
            },
            {
                question: "When was born Ilon Mask?",
                rightAnswer: 2,
                id: 2,
                answers: [

                        {text: '1990', id: 1},
                        {text: '1980', id: 2},
                        {text: '1970', id: 3},
                        {text: '1960', id: 4}
                    
                ]
            }
        ]
    }
    onAnswerClickHandler = (answerId)=>{
        
        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key]==='succes'){
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results
        if(question.rightAnswer===answerId){
            if(!results[question.id]){
                results[question.id]= 'succes'
            }
            this.setState({
                answerState: {[answerId]: 'succes'},
                results
            })
            const timeout = window.setTimeout(()=>{
                if(this.isQuizFinished()){
                    this.setState({
                        isFinished: true
                    })
                }else{
                    this.setState({
                        activeQuestion: this.state.activeQuestion+1,
                        answerState: null
                    })
                }
            }, 1000)    
        
            
            
        }else{
            results[question.id]='error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }


        
    }
    isQuizFinished(){
        return this.state.activeQuestion+1===this.state.quiz.length
    }
    retryHandler =()=>{
        this.setState({
            results: {}, //{[id]: succes error}
            isFinished: false,
            activeQuestion: 0,
            answerState: null, // {[id]: succes error}
        })
    }
    // componentDidMount(){
    //     console.log("Qiuz ID= ", this.props.match.params.id)
    // }
    render(){
        
        return (
            <div className='Quiz'>     
                <div className='QuizWrapper'>
                    <h1>Answer is all Questions</h1>
                    {
                        this.state.isFinished 
                            ? 
                            <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                retry={this.retryHandler}
                            />
                            :
                            <ActiveQuiz 
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                answerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                activeQuestion={this.state.activeQuestion+1}
                                state={this.state.answerState}
                            />
                            
                    
                    }
                </div>
            </div>
            
        )
    }
    
}
 
export default Quiz;