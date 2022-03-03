function Question(props) {
    return (
        <div>
            <br/>
            <h1>QUESTION: {props.question}</h1>
            <h1>CORRECT: {props.correctAnswer}</h1>
            <h1>INCORRECT: {props.incorrectAnswerOne}</h1>
            <h1>INCORRECT: {props.incorrectAnswerTwo}</h1>
            <h1>INCORRECT: {props.incorrectAnswerThree}</h1>
            <br/>
        </div>
    );
}

export default Question;