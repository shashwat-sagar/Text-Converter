import React from "react";
import TextForm from "../components/TextForm";

const Home = (props) => {
 
  
  return (
   <>
     <TextForm heading={'TEXT Converter'} mode={props.modeagain} />
   </>
  );
};

export default Home;

