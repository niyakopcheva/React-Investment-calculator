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
            <td>{valueEndOfYear}</td>
            <td>{interest}</td>
            <td>{totalInterest}</td>
            <td>{totalAmountInvested}</td>
        </tr>
    )
}

export default TableRow
