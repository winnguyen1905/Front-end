import React, { useContext, useEffect, useRef, useState } from "react";
import './alert.scss'
export function Error(props){
    return (
        <>
            <div className="alert_error">
                <div className="alert_one">
                    {props.value[0]}
                </div>
                <i className="alert_two">
                    {props.value[1]}
                </i>
            </div>
        </>
    )
}

export default Error;