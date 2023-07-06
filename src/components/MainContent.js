import React from "react"
import Challenge from "./Challenge"
import bmi from "../images/bmi.png"
import chol from "../images/cholesterol.png"
import star from "../images/star.png"

function MainContent() {
    return (
        <main className="challenges">
            <Challenge 
                img={bmi}
                sym={star}
                name="Body Mass Index"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Challenge 
                img={chol}
                sym={star}
                name="Total Cholesterol"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
        </main>
    )
}

export default MainContent