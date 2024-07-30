"./App.css";
import { useState } from "react";
import TextSaver from "./components/TextSaver";
function App() {
  const [userInput, setUserInput] = useState("");

  const handleGo = () => {
    console.log(userInput);
  };

  return (
    <>
      <TextSaver />
    </>
  );
}

export default App;
