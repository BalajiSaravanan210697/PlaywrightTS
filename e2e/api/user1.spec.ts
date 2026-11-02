import {test,expect} from "@playwright/test"
import { User,Address,Geo,Company } from "../../utils/apiUtils"
import { APIUtils } from "../../utils/apiUtils1"

test("Users API Validation", async ({request}) => {

    const api = new APIUtils(request)

     const startTime = Date.now()
     const response = await api.get('/users')
     const endTime = Date.now()

     const responseTime = endTime - startTime
     console.log('total response time', responseTime)

     expect(response.status()).toBe(200)
     expect(response.json()).toBeDefined()
     
     const users: User[] = await response.json()
     
     const userNames = users.filter(user => user.username.endsWith('et'))
     console.log(userNames)
    
})


