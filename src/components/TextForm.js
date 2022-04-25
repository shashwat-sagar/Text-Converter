import React, { useState } from "react";
import { Button, Divider, Icon } from "rsuite";
import PropTypes from "prop-types";

const TextForm = (props) => {
  const [text, setText] = useState("");
  // const [switchChange, setSwitchChange] = useState(false)
  const [row, setRow] = useState("4");
  const [hide, setHide] = useState("");
  // const [myStyle, setMyStyle] = useState({
    // color: 'grey',
    // backgroundColor: '#ffffff',
    // borderRadius: '8px'
    // })
    // const theme =  () => {
    //   if(myStyle.color === 'grey') {
    //     setMyStyle({
    //       color: '#ffffff',
    //       backgroundColor: '#212121',
    //       // border: '1px solid white',
    //       borderRadius: '8px'
    //     })
    //     setSwitchChange(true)
    //   }
      
    //   else {
    //     setMyStyle({
    //       color: 'grey',
    //       backgroundColor: '#ffffff',
    //       borderRadius: '8px',
        
    //     })
    //     setSwitchChange(false)
    //   }
      
    // }

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
    <div className={`${props.mode}`}>
     
   
    <div className={`${props.mode} container`}>
      <h1 className="d-flex justify-content-center">{props.heading}</h1>
      <div className="d-flex justify-content-md-end">

      <button className="btn mx-2" onClick={hidden}><Icon className={`${props.mode}`}  icon="minus" /></button>
      <button className="btn mx-2" onClick={minimize}><Icon className={`${props.mode}`} icon="square-o" /></button>
      <button className="btn mx-2" onClick={clearText}><Icon className={`${props.mode}`} icon="close" /></button>
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
    <div className={`${props.mode} container`}>
      <Divider />
      <h4>Your text summary</h4>
      <p>Total number of Words: <i>{text.split(" ").length }</i> </p>
      <p>Total number of Characters: <i>{text.length}</i></p>
      <p>Takes <i>{0.5 * text.split(" ").length}</i> seconds or <i>{0.008 * text.split(" ").length}</i> minutes to read the above text.</p>
      {/* <p>Takes {0.008 * text.split(" ").length} minutes to read the above text.</p> */}
      <hr />
      <h4>Preview</h4>
      <details> <p>{text}</p></details>
     
    </div>
    </div>
  );
};

TextForm.propTypes = { heading: PropTypes.string.isRequired };
TextForm.defaultProps = { heading: "Put Title Here" };
export default TextForm;
