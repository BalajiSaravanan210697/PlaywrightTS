import { test, expect } from "@playwright/test";
import { APIUtils } from "../../utils/apiUtils1";

test("create a user", async ({ request }) => {
  const api = new APIUtils(request);
  const baseURL = "https://dummyjson.com"
  const userResponse = await api.get(`${baseURL}/users`)
  expect(userResponse.status()).toBe(200)
  let userjsonresponse = await userResponse.json()
 const firstuserInfo = userjsonresponse.users.find(
    (user: any) => user.firstName === "Emily",
  );

  const userID = firstuserInfo.id;

  const updateResponse = await api.put(`${baseURL}/users/${userID}`,{data:{
     firstName: "Balaji Updated",
     lastName: "Saravanan Updated",
      age: 30,
  }})

  expect(updateResponse.status()).toBe(200)
  

});
