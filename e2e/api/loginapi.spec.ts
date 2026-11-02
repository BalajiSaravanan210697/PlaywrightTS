import { test, expect } from "@playwright/test";

test("token extraction", async ({ request }) => {
  const tokenResponse = await request.post("https://dummyjson.com/auth/login", {
    data: {
      username: "emilys",
      password: "emilyspass",
    },
  });
  expect(tokenResponse.status()).toBe(200)
  // expect(tokenResponse.timing()).toBeLessThan(3000)
  console.log(tokenResponse)
  const tokenValue = await tokenResponse.json()
  expect(tokenValue).toBeDefined()
  console.log(tokenValue)

});

