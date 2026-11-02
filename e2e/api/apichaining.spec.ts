import { test, expect } from "@playwright/test";
import { APIUtils } from "../../utils/apiUtils1";

let userID: number;
test.describe.serial("API Chaining",()=>{
test("API Chaining", async ({ request }) => {
  const api = new APIUtils(request);

  const firstapirespone = await api.get("https://dummyjson.com/users");
  const userapiresponse = await firstapirespone.json();
  const firstuserInfo = userapiresponse.users.find(
    (user: any) => user.firstName === "Emily",
  );

  userID = firstuserInfo.id;
});

test("using the token from as chaining process", async ({ request }) => {
  const api = new APIUtils(request);

  const user1reponse = await api.get(`https://dummyjson.com/users/${userID}`);
  expect(user1reponse.status()).toBe(200);
})
})