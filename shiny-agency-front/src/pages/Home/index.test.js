import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Home from "./";
import { ThemeProvider } from "../../utils/context";

describe("The Home component", () => {
    it("should render without crash", async () => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Home />
                </ThemeProvider>
            </MemoryRouter>
        );
        const heading = screen.getByText(
            "Repérer vos besoins, on s'occupe du reste, avec les meilleurs talents"
        );
        expect(heading).toBeTruthy();
    });
});
