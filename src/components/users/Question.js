import _ from "lodash";

const Question = (props) => {
    const { dataQuiz, index } = props;
    if (_.isEmpty(dataQuiz)) {
        return (<></>)
    }
    return (
        <>
            <div className="body-quiz1">
                <img src={`data:image/jpeg;base64,${dataQuiz.image}`} alt="img" />
            </div>
            <div className="body-quiz2">
                <div className="question"> Question : {dataQuiz.questionDescription}</div>
                {dataQuiz.answer.map((item, index) => {
                    return (
                        <div className="answer" key={index}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    {item}
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