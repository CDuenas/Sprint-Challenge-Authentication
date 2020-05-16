const supertest = require("supertest")
const server = require("../api/server")
const db = require("../database/dbConfig")

afterAll(async () => {
    await db.destroy()
})

describe("Auth integration tests", () => {
    it("Creates a new account", async () => {
        const data = { username: "CDuenas", password: "abc123" }
        const res = await
supertest(server).post("/api/auth/register").send(data)
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
    })

    it("Logs into account", async () => {
        const data = { username: "CDuenas", password: "abc123" }
        const res = await supertest(server).post("/api/auth/login").send(data)

        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.hello).toBe("CDuenas")
    })
})