// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// TODO - Part 2
// test isPhoneNumber

test("valid phone number returns true", () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});
test("a valid phone number returns true", () => {
  expect(isPhoneNumber("353-000-0405")).toBe(true);
});
test("an invalid phone number returns false", () => {
  expect(isPhoneNumber("1234 567890")).toBe(false);
});
test("an invalid phone number returns false", () => {
  expect(isPhoneNumber("1234567899")).toBe(false);
});

// test isEmail

test("valid Email returns true", () => {
  expect(isEmail("sample@gmail.com")).toBe(true);
});
test("valid Email returns true", () => {
  expect(isEmail("sample_sample@test.com")).toBe(true);
});
test("invalid Email returns false", () => {
  expect(isEmail("sample_sample@string.comm")).toBe(false);
});
test("invalid Email returns false", () => {
  expect(isEmail("sample@.com")).toBe(false);
});

// test strong password

test("Strong Password returns true", () => {
  expect(isStrongPassword("Strongpd1234")).toBe(true);
});
test("Strong Password returns true", () => {
  expect(isStrongPassword("Strong_pd1234")).toBe(true);
});
test("invalid Password(weak) returns false", () => {
  expect(isStrongPassword("123Strong")).toBe(false);
});
test("invalid Password(weak) returns false", () => {
  expect(isStrongPassword("12")).toBe(false);
});

//test isDate

test("valid date returns true", () => {
  expect(isDate("03/09/2024")).toBe(true);
});
test("valid date returns true", () => {
  expect(isDate("3/9/2024")).toBe(true);
});
test("invalid date returns false", () => {
  expect(isDate("2024/01/011")).toBe(false);
});
test("invalid date returns false", () => {
  expect(isDate("Jan/01/2021")).toBe(false);
});

// Test isHexColor
test("valid hex color returns true", () => {
  expect(isHexColor("12f")).toBe(true);
});
test("valid hex color returns true", () => {
  expect(isHexColor("#aabbcc")).toBe(true);
});
test("invalid hex color returns false", () => {
  expect(isHexColor("#50")).toBe(false);
});
test("invalid hex color returns false", () => {
  expect(isHexColor("7aaabcc")).toBe(false);
});
