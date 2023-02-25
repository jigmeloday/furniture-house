import { useState } from "react";

function ThemeSwitcher() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <>
            <button onClick={() => setDarkMode(!darkMode)}>{
                darkMode ? 'Light Mode' : 'Dark Mode'
            }</button>

            {
                darkMode ? <style jsx global>
                {`
                :root{
                        --background-color: rgb(21, 21, 21);
                        --link-color: rgb(228, 207, 9);
                        --text-color: rgb(219, 217, 217);
                    }
                `
                }
            </style> : null
            }
        </>
    )
}

export default ThemeSwitcher;