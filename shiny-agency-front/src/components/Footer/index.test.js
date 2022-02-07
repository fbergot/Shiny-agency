import Footer from "./";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "../../utils/context";

describe("Footer", () => {
    it("should render without crashing", async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        );
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
