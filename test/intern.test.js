const Employee = require('../Employee');
const Intern = require('../intern');


describe("intern",() => {

describe("Initialization",() =>{
    it(("creates object with defined properties , calls super class"), () =>{
    const obj =  new Intern('lauren','09er','n@n.com');
            expect(obj.name).toBe('lauren');
            expect(obj.id).toBe('09er');
            expect(obj.email).toBe('n@n.com');
    })
});


describe("role assignment as Intern",() =>{
    it("assigns role as a Intern when called",() => {

        const obj =  new Intern('lauren','09er','n@n.com');
        const result = obj.getRole();
        expect(result).toBe('Intern');
    })
})




});