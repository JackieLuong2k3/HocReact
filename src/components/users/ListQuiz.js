import 'bootstrap/dist/css/bootstrap.min.css';
import '../users/ListQuiz.scss'
import { useEffect, useState } from 'react';
import { getQuizbyUser } from '../../service/apiService';
import { Link } from 'react-router-dom';
const ListQuiz = () => {
    const [arrListQuiz, setArrListQuiz] = useState([]);

    useEffect(() => {
        fetchQuizbyUser()
    }, [])
    const fetchQuizbyUser = async () => {
        let res = await getQuizbyUser();
        setArrListQuiz(res.DT)

    }
    return (
        <div className='list-quiz-container'>
            {arrListQuiz && arrListQuiz.length > 0 ?
                arrListQuiz.map((quiz, index) => {
                    return (
                        <div className="card" style={{ width: '18rem' }} key={quiz.id}>
                            <img style={{ width: '286px', height: '190px' }} className="card-img-top" src={`data:image/jpeg;base64,${quiz.image}`} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Quiz {quiz.id}</h5>
                                <p className="card-text">{quiz.description}</p>
                                <Link state={{ id: quiz.id, title: quiz.description }}
                                    to={`/quiz/${quiz.id}`}
                                    className="btn btn-primary">
                                    Go to Quiz
                                </Link>
                            </div>
                        </div>
                    )
                })
                :
                <div>
                    <h2>No data</h2>
                </div>
            }

        </div>
    )
}

export default ListQuiz;