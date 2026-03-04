function UserInput({ userValues, setUserValues }) {

    function handleInputChange(event, field) {
        let newValues = { ...userValues };
        newValues[field] = Number(event.target.value);

        setUserValues(newValues);
        // console.log(userValues);
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required
                        value={userValues.initialInvestment}
                        onChange={(e) => handleInputChange(e, 'initialInvestment')}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required
                        value={userValues.annualInvestment}
                        onChange={(e) => handleInputChange(e, 'annualInvestment')}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input type="number" required
                        value={userValues.expectedReturn}
                        onChange={(e) => handleInputChange(e, 'expectedReturn')}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required
                        value={userValues.duration}
                        onChange={(e) => handleInputChange(e, 'duration')}
                    />
                </p>
            </div>
        </section>
    )
}

export default UserInput
