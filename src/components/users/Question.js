import _ from "lodash";

const Question = (props) => {
    const { dataQuiz, index } = props;
    const handleChecked=(e,aid,qid)=>{
        console.log(e.target.checked,aid,qid);
        
    }
    if (_.isEmpty(dataQuiz)) {
        return (<></>)
    }
    return (
        <>
            {dataQuiz && dataQuiz.image ?
                <div className="body-quiz1">
                    <img className="quiz-image" src={`data:image/jpeg;base64,${dataQuiz.image}`} />
                </div>
                :
                <div className="body-quiz1">
                </div>
            }

            <div className="body-quiz2">
                <div className="question"> Question {index+1} : {dataQuiz.questionDescription}</div>
                {dataQuiz.answer.map((item, index) => {
                    return (
                        <div className="answer" key={index}>
                            <div className="form-check">
                                <input onChange={(event)=>{handleChecked(event,`${item.id}`,`${dataQuiz.QuestionId}`)}} className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    {item.description}
                                </label>
                            </div>
                        </div>
                    )
                })
                }


            </div>
        </>
    )
}
export default Question