import { useState } from "react";
import UserInput from "./components/UserInput"
import ResultTable from "./components/ResultTable";

function App() {
  const [userValues, setUserValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userValues.duration >= 1 && userValues.initialInvestment && userValues.annualInvestment && userValues.expectedReturn;

  return (
    <>
      <UserInput userValues={userValues} setUserValues={setUserValues} />
      {!inputIsValid && <p className="center">Please enter duration greater than zero!</p>}
      {inputIsValid && <ResultTable userData={userValues} />}
    </>
  )
}

export default App
