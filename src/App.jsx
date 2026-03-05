import { useState } from "react";
import UserInput from "./components/UserInput"
import ResultTable from "./components/ResultTable";

function App() {
  const [userValues, setUserValues] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null
  });

  return (
    <>
      <UserInput userValues={userValues} setUserValues={setUserValues} />
      {(userValues.initialInvestment && userValues.annualInvestment && userValues.expectedReturn && userValues.duration)
        && <ResultTable userData={userValues} />}
    </>
  )
}

export default App
