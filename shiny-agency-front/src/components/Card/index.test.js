import { screen, fireEvent } from "@testing-library/react";
import Card from "../Card/index";
import { renderWithWrapper } from "../../utils/test";

describe("Card", () => {
    it("render with good title and picture", async () => {
        renderWithWrapper(<Card label="Dev JS" title="Florian" picture="/myPicture" />);
        const cardTitle = screen.getByText("Florian", { exact: true });
        const cardImage = screen.getByRole("img");

        expect(cardTitle).toBeTruthy();
        expect(cardImage.src).toBe("http://localhost/myPicture");
    });

    it("Should add stars around title on Card click", async () => {
        renderWithWrapper(<Card label="Dev JS" title="Florian" picture="/myPicture" />);
        const cardTitle = screen.getByText("Florian", { exact: true });
        const cardWrapper = screen.getByTestId("card");

        fireEvent.click(cardWrapper);
        const emoji = String.fromCodePoint(0x2b50);

        expect(cardTitle.textContent).toBe(`${emoji} Florian ${emoji}`);
    });
});
