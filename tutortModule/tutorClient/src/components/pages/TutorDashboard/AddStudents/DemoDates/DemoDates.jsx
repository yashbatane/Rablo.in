import React from 'react'
import './DemoDates.css'

const DemoDates = ({dates}) => {
    return (
        <div className='demoDates'>
            <div className="dates">
                <div className="date">M</div>
                <div className="date">T</div>
                <div className="date">W</div>
                <div className="date">Th</div>
                <div className="date">F</div>
                <div className="date">S</div>
            </div>
            <div className="numbers">
                <div className={`num ${dates[0]?"mark":""}`}>1</div>
                <div className={`num ${dates[1]?"mark":""}`}>2</div>
                <div className={`num ${dates[2]?"mark":""}`}>3</div>
                <div className={`num ${dates[3]?"mark":""}`}>4</div>
                <div className={`num ${dates[4]?"mark":""}`}>5</div>
                <div className={`num ${dates[5]?"mark":""}`}>6</div>
            </div>
        </div>
    )
}

export default DemoDates
