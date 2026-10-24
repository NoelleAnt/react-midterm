import { describe, expect, it } from "vitest";
import { add, subtract } from "./calculator";
describe("Calculator addition", () => {
it("adds two positive numbers", () => {
expect(add(2, 3)).toBe(5);
});
it("adds negative numbers", () => {
expect(add(-2, -3)).toBe(-5);
});
it("converts input strings to numbers", () => {
expect(add("10", "5")).toBe(15);
});
});
describe("Calculator subtraction", () => {
it("subtracts a smaller positive number from a larger one", () => {
expect(subtract(8, 3)).toBe(5);
});
it("subtracts negative numbers correctly", () => {
expect(subtract(-2, -5)).toBe(3);
});
});
