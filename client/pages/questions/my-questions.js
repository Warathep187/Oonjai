import {useState} from "react";
import {Container} from "react-bootstrap";
import MyQuestionItem from "../../components/Question/MyQuestionItem";

const MyQuestionsPage = () => {
    const [questions, setQuestions] = useState([
        {
            question_id: 1,
            title: "asdasi rieghuhuh  jkcjjijeijic jcijicejij",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, incidunt? Sed porro, iure magni praesentium a cupiditate quasi nihil eligendi quis quibusdam reprehenderit molestiae aliquam nam fugiat dolor labore ipsum exercitationem atque consequuntur! Labore, aperiam hic earum quas dignissimos sunt exercitationem non unde. Expedita quas doloribus atque cupiditate error, sapiente eaque ullam, accusantium consequuntur id at? Dolorum natus omnis, et ipsam, eaque saepe autem sed est tempora reiciendis, id beatae aut. Repellendus modi et odit ducimus quibusdam quis non commodi aperiam nesciunt in eligendi magni magnam laborum, hic error. Illo saepe dolor vero vel distinctio et molestiae cum perspiciatis tempora!",
            created_at: new Date(),
            topic: "COVID-19"
        },
        {
            question_id: 2,
            title: "asdasi rieghuhuh  jkcjjijeijic jcijicejij",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, incidunt? Sed porro, iure magni praesentium a cupiditate quasi nihil eligendi quis quibusdam reprehenderit molestiae aliquam nam fugiat dolor labore ipsum exercitationem atque consequuntur! Labore, aperiam hic earum quas dignissimos sunt exercitationem non unde. Expedita quas doloribus atque cupiditate error, sapiente eaque ullam, accusantium consequuntur id at? Dolorum natus omnis, et ipsam, eaque saepe autem sed est tempora reiciendis, id beatae aut. Repellendus modi et odit ducimus quibusdam quis non commodi aperiam nesciunt in eligendi magni magnam laborum, hic error. Illo saepe dolor vero vel distinctio et molestiae cum perspiciatis tempora!",
            created_at: new Date(),
            topic: "COVID-19"
        },
        {
            question_id: 3,
            title: "asdasi rieghuhuh  jkcjjijeijic jcijicejij",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, incidunt? Sed porro, iure magni praesentium a cupiditate quasi nihil eligendi quis quibusdam reprehenderit molestiae aliquam nam fugiat dolor labore ipsum exercitationem atque consequuntur! Labore, aperiam hic earum quas dignissimos sunt exercitationem non unde. Expedita quas doloribus atque cupiditate error, sapiente eaque ullam, accusantium consequuntur id at? Dolorum natus omnis, et ipsam, eaque saepe autem sed est tempora reiciendis, id beatae aut. Repellendus modi et odit ducimus quibusdam quis non commodi aperiam nesciunt in eligendi magni magnam laborum, hic error. Illo saepe dolor vero vel distinctio et molestiae cum perspiciatis tempora!",
            created_at: new Date(),
            topic: "COVID-19"
        },
        {
            question_id: 4,
            title: "asdasi rieghuhuh  jkcjjijeijic jcijicejij",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, incidunt? Sed porro, iure magni praesentium a cupiditate quasi nihil eligendi quis quibusdam reprehenderit molestiae aliquam nam fugiat dolor labore ipsum exercitationem atque consequuntur! Labore, aperiam hic earum quas dignissimos sunt exercitationem non unde. Expedita quas doloribus atque cupiditate error, sapiente eaque ullam, accusantium consequuntur id at? Dolorum natus omnis, et ipsam, eaque saepe autem sed est tempora reiciendis, id beatae aut. Repellendus modi et odit ducimus quibusdam quis non commodi aperiam nesciunt in eligendi magni magnam laborum, hic error. Illo saepe dolor vero vel distinctio et molestiae cum perspiciatis tempora!",
            created_at: new Date(),
            topic: "COVID-19"
        },
    ])

    return <Container>
        <div className="mx-5 px-5 bg-light rounded-3 pt-3" style={{
            height: "35rem",
            overflowY: "scroll"
        }}>
            <div>
                <h3>My questions</h3>
                <hr />
                <div className="px-4 mt-2 pb-5">
                    {questions.map(question => (
                        <MyQuestionItem question={question} />
                    ))}
                </div>
            </div>
        </div>
    </Container>;
};

export default MyQuestionsPage;
