import { useState, useEffect } from 'react';
import Question from '../components/Question';
import axios from 'axios';
import {nanoid} from 'nanoid';

function Quizzical() {

    const [questionsData, setQuestionsData] = useState([]);

    console.log(questionsData);

    useEffect(() => {
        async function fetchData() {
            const fetchPosts = await axios.get(
                'https://opentdb.com/api.php?amount=5&category=20&difficulty=hard&type=multiple'
            );
            setQuestionsData(fetchPosts.data.results);
        }
        fetchData();
    }, []);

    const questionsElements = questionsData.map(question =>
        <Question 
            key={nanoid()} 
            question={question.question} 
            correctAnswer={question.correct_answer} 
            incorrectAnswerOne={question.incorrect_answers[0]}
            incorrectAnswerTwo={question.incorrect_answers[1]}
            incorrectAnswerThree={question.incorrect_answers[2]}
        />
    );

    return (
        <div>
            {questionsElements}
        </div>
    );
}

export default Quizzical;