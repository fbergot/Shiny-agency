import { encodeQueryData } from "./";

it("should encode URL params", () => {
    const params = {
        a: 1,
        b: 0,
    };

    expect(encodeQueryData(params)).toEqual("a=1&b=0");
});
