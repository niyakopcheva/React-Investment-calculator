import { formatter } from "../util/investment";

function TableRow({ yearData, initialInvestment }) {
    // console.log(yearData);
    // console.log(initialInvestment);

    const { year, interest, valueEndOfYear, annualInvestment } = yearData;
    const totalInterest =
        valueEndOfYear -
        annualInvestment * year -
        initialInvestment;

    const totalAmountInvested = valueEndOfYear - totalInterest;
    return (
        <tr>
            <td>{year}</td>
            <td>{formatter.format(valueEndOfYear)}</td>
            <td>{formatter.format(interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
        </tr>
    )
}

export default TableRow
