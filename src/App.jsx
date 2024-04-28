import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import Container from "./components/Container";
import { useState } from "react";
function App() {
  const [calval, setCalval] = useState("");
  const onbuttonClick = (buttonText) => {
    if (buttonText === "C") {
     setCalval("");
    } 
    else if (buttonText === "=") {
      const result =eval(calval);
      setCalval(result);
    
    }
     else {
      const newDisplayvalue = calval + buttonText;
      setCalval(newDisplayvalue);
    }
  };
  return (
    <>
      <Container>
        <div className={styles.calculator}>
          <Display displayvalue={calval}></Display>
          <ButtonsContainer onbuttonClick={onbuttonClick}></ButtonsContainer>
        </div>
      </Container>
    </>
  );
}

export default App;
