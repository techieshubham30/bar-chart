import "./home.css";
import { Form } from "../../components/Form/Form";

const Home=({submitForm})=>{
    return(
        <div className="main-container">
        <div className="image-container">
            <img src="../images/img1.png" alt="bacground-img" />
            <div className="image-content">
                <h2>Choose a data range</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolores?</p>
            </div>
        </div>
            <Form submitForm={submitForm}/>
        </div>
    );
}

export {Home};