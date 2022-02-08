import { ThemeProvider, SurveyProvider } from "../context";
import { render as rtlRender } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const Wrapper = ({ children }) => {
    return (
        <MemoryRouter>
            <ThemeProvider>
                <SurveyProvider>{children}</SurveyProvider>
            </ThemeProvider>
        </MemoryRouter>
    );
};

export const renderWithWrapper = (comp) => {
    rtlRender(comp, { wrapper: Wrapper });
};
