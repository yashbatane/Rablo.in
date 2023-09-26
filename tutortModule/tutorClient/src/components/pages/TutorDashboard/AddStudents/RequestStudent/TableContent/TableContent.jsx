import './TableContent.css'
import React from 'react'

export default function TableContent(props) {
    return (
        <div id='table-content'>
            <div>Zack Seth</div>
            <div>XII</div>
            <div>Math, Phy, Chem</div>
            <div id='mode'>Online</div>
            <div id='time'>04:30 P.M.</div>
            <div id='demoDate'>
                <div id='day'>
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>Th</div>
                    <div>F</div>
                    <div>S</div>
                </div>
                <div id='date'>
                    <div id='highlight'>1</div>
                    <div>2</div>
                    <div id='highlight'>3</div>
                    <div>4</div>
                    <div id='highlight'>5</div>
                    <div>6</div>
                </div>
            </div>
            <div>Regular</div>
            <div id='action'>
                <div id='accept-btn'>Accept</div>
                <div>X</div>
            </div>
        </div>
    )
}
