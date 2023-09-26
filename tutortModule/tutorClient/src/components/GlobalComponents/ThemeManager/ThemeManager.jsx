//@creator - Ishaan Pare | @TaskID = RAB-518 , @TaskTitle = Dynamic Theme , @Task completion date = 28/05/2023 (20:30) |


//@library imports;

//default
import React, { useEffect, useState } from "react";

//themes->background
import themeNight from "../Image/theme/SeaLighthouse-night_AdobeExpress_20_1_.gif";
import themeSunrise from "../Image/theme/SeaLighthouse-day_AdobeExpress.gif";
import themeSunset from "../Image/theme/SeaLighthouse-sunset_AdobeExpress.gif";


//stylesheet
import "./style/thememanager.css";


//@component = ThemeManager
//Guidlines To use this theme
// Embbed your code inside this component;
// For example
// <ThemeManager> //your code </ThemeManager>
const ThemeManager = ({ children }) => {

    //@ComponentStates

    //tracks the date-time-zone...
    const [time, setTime] = useState(Date.now());
    //theme decider
    const [themeType, setThemeType] = useState(0);
    //theme class decider
    const [cls, setCls] = useState(0);

    //@ComponentConstants

    //background theme constants
    const THEME = [themeSunrise, themeSunset, themeNight];

    //classes for fadeout-fadein logic
    const CLASSES = [["default-theme", "theme-stack"], ["fadeOut", "fadeIn"]];

    //@CommonFunctions

    //theme fadout-fadin logic
    const classFading = () => {
        setCls(1);
        setTimeout(() => {
            setCls(0);
        }, 5000);

    }


    //@StateManagement

    //react useEffect hook for dynamic theme changing
    useEffect(() => {
        var tm = (new Date(time)).getHours();

        //theme changing logic 
        if (tm >= 6 && tm < 16) {
            setThemeType(0);
            classFading();
        }
        else if (tm >= 16 && tm < 19) {
            setThemeType(1);
            classFading();
        }
        else {
            setThemeType(2);
            classFading();
        }
    }, [themeType]);

    //@Layout
    return (
        <>
            {/* Outgoing theme */}
            <img src={THEME[themeType > 0 ? themeType - 1 : 2]} className={CLASSES[cls][0]} />

            {/* Incoming theme */}
            <img src={THEME[themeType]} className={CLASSES[cls][1]}/>
            
            {/* Childrens */}
            {children}
        </>
    );
}
export default ThemeManager;