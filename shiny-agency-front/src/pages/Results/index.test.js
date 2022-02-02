import { formatListTitle } from "./";

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
