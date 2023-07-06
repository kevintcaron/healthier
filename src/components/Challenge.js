import React from "react"

function Challenge(props) {

    return (
        <div className="challenge-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={props.sym} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Challenge