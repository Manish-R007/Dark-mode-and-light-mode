import React, { useEffect } from "react";
import Card from "./Components/Card";
import ThemeBtn from "./Components/Themebtn";
import { ThemeProvider } from "./contexts/theme";

function App() {

    const [thememode, setThememode] = React.useState("light");

    const darkTheme = () => {
        setThememode("dark");
    }

    const lightTheme = () => {
        setThememode("light");
    }

    useEffect(() => {
        document.querySelector('html').classList.remove("dark","light")
        document.querySelector('html').classList.add(thememode);
    },[thememode]);

    return (
        <ThemeProvider value={{thememode,darkTheme,lightTheme}}>
        <div className="min-h-screen flex flex-col justify-center items-center bg-white">
            {/* Toggle Button Above */}
            <div className="mb-6">
                <ThemeBtn />
            </div>

            {/* Card Below */}
            <Card />
        </div>
        </ThemeProvider>
    );
}

export default App;
