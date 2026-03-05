import { calculateInvestmentResults } from "../util/investment";
import TableRow from "./TableRow";

function ResultTable({ userData }) {
    // console.log(userData);

    const investmentResults = calculateInvestmentResults({ ...userData });
    // console.log(investmentResults);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {investmentResults.map(yData =>
                    <TableRow yearData={yData} initialInvestment={userData.initialInvestment} key={yData.year} />
                )}

            </tbody>
        </table>
    )
}

export default ResultTable
