import React from "react";



export default function BMI() {
    const [formData, setFormData] = React.useState({
        heightFt: "",
        heightIn: "",
        weightLb: "",
    })

    const [show, setShow] = React.useState(false)

    const bmi = +formData.weightLb / ((+formData.heightFt * 12 + +formData.heightIn)**2) * 703    

    console.log(!isNaN(bmi))

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setShow(prevShow => {
            return !prevShow
        })
    }


    return (
        <div>
            <div className="bmi dotted">
                <h1>BMI Calculator</h1>
                <form className="form dotted" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="height (ft)"
                        className="form--input"
                        name="heightFt"
                        value={formData.heightFt}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="height (in)"
                        className="form--input"
                        name="heightIn"
                        value={formData.heightIn}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="weight (lb)"
                        className="form--input"
                        name="weightLb"
                        value={formData.weightLb}
                        onChange={handleChange}
                    />
                    <button 
                        className="form--button"
                    >
                        {show ? "Hide" : "Submit"}
                    </button>
                </form>
                <div className="result">
                    {show && <h2 className="result--statement">Your BMi is {bmi}</h2>}
                </div>
            </div>

        </div>
    )
}


