import { useState } from "react";

function checkTheme() {
    if ( typeof localStorage === 'undefined' ) {
        return false;
    }
    const darkMode = localStorage.getItem('darkMode');
    return darkMode === null ? false : JSON.parse(darkMode)
}

function ThemeSwitcher() {
    const [darkMode, setDarkMode] = useState<boolean>(checkTheme);
    const handleClick = () => {
        localStorage.setItem('darkMode', JSON.stringify(!darkMode))
        setDarkMode(!darkMode);
    }
    return (
        <>
            <button onClick={handleClick} suppressHydrationWarning>{
                darkMode ? 'Light Mode' : 'Dark Mode'
            }</button>

            {
                darkMode && <style jsx global>
                {`
                :root{
                        --background-color: rgb(21, 21, 21);
                        --link-color: rgb(228, 207, 9);
                        --text-color: rgb(219, 217, 217);
                    }
                `
                }
            </style> 
            }
        </>
    )
}

export default ThemeSwitcher;