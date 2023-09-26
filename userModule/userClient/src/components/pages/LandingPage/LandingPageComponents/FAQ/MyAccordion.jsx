import React, { useState } from 'react';
import { VscAdd, VscChromeMinimize } from 'react-icons/vsc';

export default function MyAccordion({ question, answer }) {
    const [show, setshow] = useState(false);
    return (
        <>
            <div className="main-heading">
          
                <h3>{question}</h3>

                <button onClick={() => setshow(!show)}> {show ? <VscChromeMinimize/> : <VscAdd/>}</button>
            </div>
            {show && <p className='answers'> {answer} </p>}
            <hr />
        </>
    )
}

