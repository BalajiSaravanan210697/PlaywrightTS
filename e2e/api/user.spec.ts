import { test, expect } from "@playwright/test";

test.describe("Users API Automation", () => {
  const baseURL = "https://jsonplaceholder.typicode.com";
  test("validate all users API Response", async ({ request }) => {
    const startTime = Date.now();
    const response = await request.get(`${baseURL}/users`);

    const endTime = Date.now();

    const responseTime = endTime - startTime;

    expect(response.status()).toBe(200);

    expect(responseTime).toBeLessThan(3000);

    const users = await response.json();
   
    expect(users.length).toBe(10)
    console.log(users.length)

    //print all user names 
    const userNames = users.map(
        (user:any)=> user.name
    )

    console.log(userNames)

    // print users email ends with .biz 
    const emailUsers = users.filter(
        (user:any) => user.email.toLowerCase().endsWith('.biz')
    )

    console.log(emailUsers)

    // print all user cities 
    const userCities = users.map(
        (user : any) => user.address.city
    )
    
    console.log('user Cities are : '+userCities)

    const uniqueIDs = users.map(
        (user : any) => user.id
    )
    const uniqueIDSet = new Set(uniqueIDs)
    expect(uniqueIDSet.size).toBe(uniqueIDs.length)
    console.log(uniqueIDSet)
    console.log(uniqueIDs)
    console.log(uniqueIDs.length-uniqueIDs.size)

    //user filter based on id 
    const userByID = users.find(
        (user : any) => user.id === 2
    )
    console.log(userByID)

    //check all records should have username 
    const userName = users.every(
      (user : any) => user.username!== ''
    )
    expect(userName).toBeTruthy()
  });
});
