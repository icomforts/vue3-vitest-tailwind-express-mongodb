import { describe,it,expect } from "vitest"
import { isArray } from "./is"

describe('isArray', () => {

    it("should return true if the value is an array", () => {
        expect(isArray([])).toBe(true);
    })
    it("should return false if the value is not an array", () => {
        expect(isArray({})).toBe(false);
    })
})