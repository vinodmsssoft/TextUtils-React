import React, { useState } from 'react';
import PropTypes from 'prop-types';



export default function TextForm(props) {

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        // console.log("Upper Case Btn Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Cleared Text", "success");
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container my-5" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="textId" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "light" ? "white" : "grey", color: props.mode === "light" ? "black" : "white" }} rows="6"></textarea>
                    <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>

            <div className="container my-2" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2>You Text Summary</h2>
                <p> {text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} Character </p>
                <p> {0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} Minutes to read </p>

                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}


