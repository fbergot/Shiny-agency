import { createContext, useState } from "react";

// theme
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toogleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// survey: answer
export const SurveyContext = createContext();
export const SurveyProvider = ({ children }) => {
    const [answers, setAnswers] = useState({});
    const saveAnswers = (response, questionNumber) => {
        setAnswers({ ...answers, [`a${questionNumber}`]: response });
    };

    return (
        <SurveyContext.Provider value={{ answers, saveAnswers }}>
            {children}
        </SurveyContext.Provider>
    );
};
