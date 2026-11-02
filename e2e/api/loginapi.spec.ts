import { test, expect } from "@playwright/test";

test("token extraction", async ({ request }) => {

  const startTime = performance.now();
  const tokenResponse = await request.post("https://dummyjson.com/auth/login", {
    data: {
      username: "emilys",
      password: "emilyspass",
    },
  });
  const responseTime = performance.now() - startTime;
  expect(tokenResponse.status()).toBe(200);
  console.log(tokenResponse.status());
  expect(tokenResponse.statusText()).toBe("OK");
  console.log(tokenResponse.statusText());
  console.log(tokenResponse.ok());
  expect(responseTime).toBeLessThan(3000);
  console.log(responseTime);

  const tokenValue = await tokenResponse.json();
  expect(tokenValue).toBeDefined();
  const token = tokenValue.accessToken;
  console.log(token);

  const userResponse = await request.get("https://dummyjson.com/auth/me", {
    headers: { Authorisation: `Bearer${token}` },
  });
  expect(userResponse.status()).toBe(200)
});
