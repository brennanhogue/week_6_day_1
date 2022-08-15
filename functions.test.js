const{returnTwo, greeting, add} = require("./functions")

describe("functions", () => {

    it("ReturnTwo Test", () => {
        expect(returnTwo()).toEqual(2)

    })

    it("greeting Test", () => {
        expect(greeting("James")).toEqual("Hello, James")
        expect(greeting("Jill")).toEqual("Hello, Jill")
    })

    it("add Test", () => {
        expect(add(1, 2)).toEqual(3)
        expect(add(2, 4)).toEqual(6)
        
    })
})