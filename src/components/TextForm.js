import React, { useState } from "react";
import { Alert, Button, Divider, Icon, Tooltip, Whisper } from "rsuite";
import PropTypes from "prop-types";


const TextForm = (props) => {
  const [text, setText] = useState("");
  const [row, setRow] = useState("4");
  const [hide, setHide] = useState("");

  // const square = () => {
  //   let i;
  //   const number = [1, 2, 3, 4, 5];
  //   for (i = 0; i < 5; i++) {
  //     number[i] = number[i] * number[i];
  //     return i;
  //   }
  // };
  // square();

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
  };
  const minimize = () => {
    if (row === "4") {
      setRow("8");
    } else if (row === "8") {
      setRow("14");
    } else {
      setRow("4");
    }
  };
  const hidden = () => {
    if (hide === "") {
      setHide("true");
    } else {
      setHide("");
    }
  };
  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const removeExtraSpaces = () => {
    
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
       Alert.info("Extra Spaces are removed", 2000)
    
  };

  const download = () => {
    Alert.warning("Download button is under construction");
  };
  const paste = async () => {
    const paste = await navigator.clipboard.readText(text.value);
    setText(text + paste);
    Alert.success("Pasted", 2000)
  };

  const option1 = (
    <Tooltip>
      <i>Remove Extra Spaces</i>
    </Tooltip>
  );
  const option2 = (
    <Tooltip>
      <i>Paste</i>
    </Tooltip>
  );
  const option3 = (
    <Tooltip>
      <i>Delete all</i>
    </Tooltip>
  );
  const option4 = (
    <Tooltip>
      <i>Download</i>
    </Tooltip>
  );


  return (
    <div className={`${props.mode} ` }>
      <div className={`${props.mode} container`}>
        <h1 className="d-flex justify-content-center">{props.heading}</h1>
        <div className="d-flex justify-content-md-end">
          <button className="btn mx-2" onClick={hidden}>
            <Icon className={`${props.mode}`} icon="minus" />
          </button>
          <button className="btn mx-2" onClick={minimize}>
            <Icon className={`${props.mode}`} icon="square-o" />
          </button>
          <button className="btn mx-2" onClick={clearText}>
            <Icon className={`${props.mode}`} icon="close" />
          </button>
        </div>
        <div className="mb-3 textWrap">
          <div className="copyBtn">
            {" "}
            <button className="btn" onClick={handleCopy}>
              {" "}
              <Icon className={`${props.mode}`} icon="copy" />
            </button>
          </div>
          <textarea
            className={`form-control form-${
              props.mode === "themeL" ? "light" : "dark"
            }`}
            placeholder="Enter Text Here......"
            id="exampleFormControlTextarea1"
            rows={row}
            value={text}
            hidden={hide}
            onChange={handleOnChange}
          ></textarea>
          <div className="d-flex justify-content-center my-3">
            <button
              className="btn btn-primary mx-2 btn-danger"
              onClick={upperCaseClick}
            >
              Convert to UpperCase <Icon icon="arrow-up2" />
            </button>
            <Button color="green" onClick={lowerCaseClick}>
              Convert to LowerCase <Icon icon="arrow-down2" />
            </Button>
          </div>
          <div className="optionsTab d-flex justify-content-center">
            <ul
              className={`d-flex f-d-r list-${
                props.mode === "themeL" ? "dark" : "light"
              } `}
            >
              <Whisper
                placement="bottom"
                controlId="control-id-hover"
                trigger="hover"
                speaker={option1}
              >
                <li
                  className={`options-${
                    props.mode === "themeL" ? "light" : "dark"
                  }`}
                  onClick={removeExtraSpaces}
                >
                  <Icon icon="wrench" />
                </li>
              </Whisper>
              <Whisper
                placement="bottom"
                controlId="control-id-hover"
                trigger="hover"
                speaker={option2}
              >
                <li
                  className={`options-${
                    props.mode === "themeL" ? "light" : "dark"
                  }`}
                  onClick={paste}
                >
                  <Icon icon="paste" />
                </li>
              </Whisper>
              <Whisper
                placement="bottom"
                controlId="control-id-hover"
                trigger="hover"
                speaker={option3}
              >
                <li
                  className={`options-${
                    props.mode === "themeL" ? "light" : "dark"
                  }`}
                  onClick={clearText}
                >
                  <Icon icon="eraser" />
                </li>
              </Whisper>
              <Whisper
                placement="bottom"
                controlId="control-id-hover"
                trigger="hover"
                speaker={option4}
              >
                <li
                  className={`options-${
                    props.mode === "themeL" ? "light" : "dark"
                  }`}
                  onClick={download}
                >
                  <Icon icon="download" />
                </li>
              </Whisper>
              {/* <Whisper
                placement="bottom"
                controlId="control-id-hover"
                trigger="hover"
                speaker={option5}
              >
                <li
                  className={`options-${
                    props.mode === "themeL" ? "light" : "dark"
                  }`}
                  
                >
                  <Themes />
                  
                </li>
              </Whisper> */}
            </ul>
          </div>
        </div>
      </div>
      <div className={`${props.mode} container`}>
        <Divider />
        <h4>Your text summary</h4>
        <p>
          Total number of Words: <i>{text.split(" ").length}</i>{" "}
        </p>
        <p>
          Total number of Characters: <i>{text.length}</i>
        </p>
        <p>
          Takes <i>{0.5 * text.split(" ").length}</i> seconds or{" "}
          <i>{0.008 * text.split(" ").length}</i> minutes to read the above
          text.
        </p>
        {/* <p>Takes {0.008 * text.split(" ").length} minutes to read the above text.</p> */}
        <hr />
        <h4>Preview</h4>
        <details>
          {" "}
          <p>
            {text.length > 0
              ? text
              : "Please enter something in the Textbox above to preview it here"}
          </p>
        </details>
      </div>
    </div>
  );
};

TextForm.propTypes = { heading: PropTypes.string.isRequired };
TextForm.defaultProps = { heading: "Put Title Here" };
export default TextForm;
