import Footer from "./";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithWrapper } from "../../utils/test";

describe("Footer", () => {
    it("should render without crashing", async () => {
        renderWithWrapper(<Footer />);
        // button targeting
        const nightModeButton = screen.getByRole("button");
        // test init value
        expect(nightModeButton.textContent).toBe(
            `Changer de mode ${String.fromCodePoint(0x1f319)}`
        );
        // click
        fireEvent.click(nightModeButton);
        // test value after click
        expect(nightModeButton.textContent).toBe(
            `Changer de mode ${String.fromCodePoint(0x1f31e)}`
        );
    });
});
