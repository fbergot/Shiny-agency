import { rest } from "msw";
import { setupServer } from "msw/node";
import { waitFor, screen, waitForElementToBeRemoved } from "@testing-library/react";
import Freelances from "./";
import { renderWithWrapper } from "../../utils/test";

const freelancersMockedData = [
    {
        name: "Flo",
        job: "Magicien frontend",
        picture: "",
    },
    {
        name: "Hermione",
        job: "Magicienne fullstack",
        picture: "",
    },
];

const server = setupServer(
    rest.get("http://localhost:8000/freelances", (req, res, ctx) => {
        return res(ctx.json({ freelancersList: freelancersMockedData }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Freelance", () => {
    it("Should render the loader and after, the fake data", async () => {
        renderWithWrapper(<Freelances />);
        expect(screen.getByTestId("loader")).toBeTruthy();
        await waitForElementToBeRemoved(() => screen.queryByTestId("loader"));
        await waitFor(() => {
            expect(screen.getByText("Flo")).toBeTruthy();
            expect(screen.getByText("Hermione")).toBeTruthy();
        });
    });
});
