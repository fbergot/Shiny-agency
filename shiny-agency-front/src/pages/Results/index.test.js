import Results, { formatListTitle } from "./";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { waitForElementToBeRemoved, screen } from "@testing-library/react";
import { renderWithWrapper } from "../../utils/test/index";

describe("formatListFunction", () => {
    test("should add , to a word if not last of the list", () => {
        const expected = "item,";
        expect(formatListTitle(0, "item", 3)).toEqual(expected);
    });
    test("should not add , because last word of the list", () => {
        const expected = "item";
        expect(formatListTitle(2, "item", 3)).toEqual(expected);
    });
});
const resultsMockedData = [
    {
        title: "seo",
        description: `Le SEO est en charge du référencement web d'une page`,
    },
    {
        title: "frontend",
        description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
    },
];
// mock for response server
const server = setupServer(
    rest.get("http://localhost:8000/results", (req, res, ctx) => {
        return res(ctx.json({ resultsData: resultsMockedData }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Result component", () => {
    it("should display the results after the data is loaded", async () => {
        renderWithWrapper(<Results />);
        // loader
        await waitForElementToBeRemoved(() => screen.queryByTestId("loader"));
        // JobTitle elements
        const jobTitleElements = screen.getAllByTestId("job-title");
        expect(jobTitleElements[0].textContent).toBe("seo");
        expect(jobTitleElements[1].textContent).toBe("frontend");
        // JobDescription <p> (descr)
        const jobDescriptionElements = screen.getAllByTestId("job-description");
        expect(jobDescriptionElements[0].textContent).toBe(resultsMockedData[0].description);
    });
});
