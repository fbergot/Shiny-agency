import { screen } from "@testing-library/react";
import Home from "./";
import { renderWithWrapper } from "../../utils/test";

describe("The Home component", () => {
    it("should render without crash", async () => {
        renderWithWrapper(<Home />);
        const heading = screen.getByText(
            "Repérer vos besoins, on s'occupe du reste, avec les meilleurs talents"
        );
        expect(heading).toBeTruthy();
    });
});
