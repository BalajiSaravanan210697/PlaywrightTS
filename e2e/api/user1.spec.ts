import {test,expect} from "@playwright/test"
import { User,Address,Geo,Company } from "../../utils/apiUtils"

test("Users API Validation", async ({request}) => {

     const startTime = Date.now()
     const response = await request.get('/users')
     const endTime = Date.now()

     const responseTime = endTime - startTime
     console.log('total response time', responseTime)

     expect(response.status()).toBe(200)
     expect(response.json()).toBeDefined()
     console.log(response)
     const users = await response.json()
    // console.log(users)

    
})
