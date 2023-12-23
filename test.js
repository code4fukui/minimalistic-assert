import * as t from "https://deno.land/std/testing/asserts.ts";
import assert from "./index.js";

Deno.test("simple", () => {
  t.assertThrows(() => assert(0, "param is not 1"));
  assert(1, "param is not 1");
});
Deno.test("assert", () => {
  t.assertThrows(() => assert.equal(1, 2, "param 1 = 2?"));
  assert.equal(1, 1, "param is not 1");
});
