const Employee = require('../Employee');
const Manager = require('../manager');


describe("manager",() => {

describe("Initialization",() =>{
    it(("creates object with defined properties , calls super class"), () =>{
    const obj =  new Manager('lauren','09er','n@n.com');
            expect(obj.name).toBe('lauren');
            expect(obj.id).toBe('09er');
            expect(obj.email).toBe('n@n.com');
    })
});


describe("role assignment as Manager",() =>{
    it("assigns role as a Manager when called",() => {

        const obj =  new Manager('lauren','09er','n@n.com');
        const result = obj.getRole();
        expect(result).toBe('Manager');
    })
});


describe("has getRole function", () => {
    it("confirms the object instance created has method getRole", () => {
        const obj =  new Manager('lauren','09er','n@n.com');
     
        //check object has method getRole
        jest.spyOn(obj, 'getRole');
        obj.getRole();
        //getRole is called one time
        expect(obj.getRole).toHaveBeenCalledTimes(1);
        //getRole returns manager
       expect(obj.getRole()).toEqual('Manager');
     



})
})
})