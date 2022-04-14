import React, { useState } from "react";
import { Button, Divider, Icon } from "rsuite";
import PropTypes from "prop-types";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [row, setRow] = useState("4");
  const [hide, setHide] = useState("");
  const [myStyle, setMyStyle] = useState({
    color: 'grey',
    backgroundColor: '#ffffff',
    borderRadius: '8px'
    })
    const theme = () => {
      if(myStyle.color === 'grey') {
        setMyStyle({
          color: '#ffffff',
          backgroundColor: '#212121',
          // border: '1px solid white',
          borderRadius: '8px'
        })
      }
      else {
        setMyStyle({
          color: 'grey',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          // border: '1px solid black',
        })
      }
    }

  const upperCaseClick = () => {
    // console.log("Convert the Text");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowerCaseClick = () => {
    // console.log("Convert the Text");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log(text);
    setText(event.target.value);
  };
  const clearText = () => {
    setText("");
  }
  const minimize = () => {
    if(row === "4") {
      setRow("8");
    }
    else if(row === "8") {
      setRow("14");
    }
    else {
      setRow("4");
    }
  }
  const hidden = () => {
    if(hide === ""){
      setHide("true")
    }
    else {
      setHide("")
    }
  }
  return (
    <>
    <Button color={myStyle} onClick={theme}>Dark Mode</Button>
    <div className="container my-3" style={myStyle}>
      <h1 className="d-flex justify-content-center my-1">{props.heading}</h1>
      <div className="d-flex justify-content-md-end">

      <button className="btn mx-2" onClick={hidden}><Icon style={myStyle} icon="minus" /></button>
      <button className="btn mx-2" onClick={minimize}><Icon style={myStyle} icon="square-o" /></button>
      <button className="btn mx-2" onClick={clearText}><Icon style={myStyle} icon="close" /></button>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Enter Text Here......"
          id="exampleFormControlTextarea1"
          rows={row}
          value={text}
          hidden={hide}
          onChange={handleOnChange}
        ></textarea>
        <div className="d-flex justify-content-center my-3">
        <button className="btn btn-primary mx-2 btn-danger" onClick={upperCaseClick}>
          Convert to UpperCase <Icon icon="arrow-up2" />
        </button>
        <Button color="green" onClick={lowerCaseClick}>
        Convert to LowerCase <Icon icon="arrow-down2" />
        </Button>
       
        </div>
       
      </div>
    </div>
    <div className="container" style={myStyle}>
      <Divider />
      <h4>Your text summary</h4>
      <p>Total number of Words: {text.split(" ").length } </p>
      <p>Total number of Characters: {text.length}</p>
      <p>Takes {0.008 * text.split(" ").length} minutes to read the above text.</p>
      <hr />
      <h4>Preview</h4>
      <p>{text}</p>
    </div>
    </>
  );
};

TextForm.propTypes = { heading: PropTypes.string.isRequired };
TextForm.defaultProps = { heading: "Put Title Here" };
export default TextForm;
