import { useState } from "react";

function ThemeSwitcher() {
    const [darkMode, setDarkMode] = useState(false);

    return (

        <>
            <button onClick={() => setDarkMode(!darkMode)}>{
                darkMode ? 'Light Mode' : 'Dark Mode'
            }</button>
        </>
    )
}

export default ThemeSwitcher;