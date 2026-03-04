import { useState } from "react";
import UserInput from "./components/UserInput"
import ResultTable from "./components/ResultTable";

function App() {
  const [userValues, setUserValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
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
