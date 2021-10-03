import AtButton from './shared/Button';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Quiz = () => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        let resultsArray = [];
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( res => {
            res.data.map(data => resultsArray.push(data));
            setQuestions(resultsArray);
        })
        .catch( err => alert(err))
    }
    ,[]);

    return (
    <>
        <h1>Hey, welcome to quiz!</h1>
        <h2>Answer these questions</h2>
            <ul>
                {
                    questions.length > 0 ? 
                        questions.map(question => 
                            <li key={uuidv4()}>{question.name}</li>
                        )
                    : <li>Loading..</li>
                }
            </ul>
        <Link to="/quiz">
            <AtButton>Next</AtButton>
        </Link>
    </>
    );
}

export default Quiz;