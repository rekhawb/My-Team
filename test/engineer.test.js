const Employee = require('../Employee');
const Engineer = require('../engineer');


describe("engineer",() => {

describe("Initialization",() =>{
    it(("creates object with defined properties , calls super class"), () =>{
    const obj =  new Engineer('lauren','09er','n@n.com');
            expect(obj.name).toBe('lauren');
            expect(obj.id).toBe('09er');
            expect(obj.email).toBe('n@n.com');
    })
});


describe("role assignment as Engineer",() =>{
    it("assigns role as a Engineer when called",() => {

        const obj =  new Engineer('lauren','09er','n@n.com');
        const result = obj.getRole();
        expect(result).toBe('Engineer');
    })
})




});