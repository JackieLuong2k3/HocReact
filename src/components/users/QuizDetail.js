import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import { getQuizUserbyId } from "../../service/apiService";
import './QuizDetail.scss'
import _, { set } from "lodash";
import Question from "./Question";

const QuizDetail = () => {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const param = useParams();
    const quizid = param.id;
    useEffect(() => {
        fetchQuestionOfQuiz()
    }, [quizid])

    const fetchQuestionOfQuiz = async () => {
        let res = await getQuizUserbyId(quizid);
        let data_raw = res.DT
        let data1 = _.chain(data_raw)
            // Group the elements of Array based on `color` property
            .groupBy("id")
            // `key` is group's name (color), `value` is the array of objects
            .map((value, key) => {
                let answer = []
                let image = null; let questionDescription = null
                value.forEach((item, index) => {
                    if (index === 0) {
                        image = item.image;
                        questionDescription = item.description
                    }
                    item.answers.isSelected = false;
                    answer.push(item.answers);
                })
                return {
                    QuestionId: key, answer, questionDescription, image
                }

            })
            .value()
        console.log("check data ", data1);
        setData(data1)

    }
    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }
    const handleNext = () => {
        if (index < data.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(data.length - 1)
        }
    }
    const handleCheckBox = (aid, qid) => {
        
        const dataClone = [];
        data.map((item) => {
            dataClone.push(item)
        })
        console.log("clone",dataClone);
        
        let question = dataClone.find(item => +item.QuestionId === +qid)
        
            console.log("q", question);
            let b = question.answer.map(item => {
                if (item.id == +aid) {
                    item.isSelected = !item.isSelected
                }
                return item;
            })
            question.answer = b;
        
        let index = dataClone.findIndex(item => +item.QuestionId === +qid)
        if (index > -1) {
            dataClone[index] = question
            setData(dataClone)
            console.log(data);
            
        }

    }
    return (
        <div className="quiz-detail-container">
            <div className="left-content">
                <div className="title">
                    Quiz {location.state.id}: {location.state.title}
                </div>
                <Question
                    index={index}
                    handleCheckBox={handleCheckBox}
                    dataQuiz={data && data.length > 0 ? data[index] : []} />
                <div>
                    <button onClick={handlePrev} type="button" className="btn btn-primary">Prev</button>

                    <button onClick={handleNext} type="button" className="btn btn-secondary">Next</button>
                </div>
            </div>
            <div className="right-content">
                countdown
            </div>
        </div>
    )

}
export default QuizDetail