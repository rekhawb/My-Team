const Employee = require('../Employee');


describe("employee",() => {
    describe("Initialization",() =>{
        it(("should create a new object with properties"),() => {

            // checks if the created object property values match the values sent to create the object instance
        
            const obj = new Employee('lauren','09er','n@n.com');
            expect(obj.name).toBe('lauren');
            expect(obj.id).toBe('09er');
            expect(obj.email).toBe('n@n.com');

        })
    });

    it(("should validate email ID"),() => {
        
        // return email id if it passes the validation, 

        const obj = new Employee('lauren','09er','n@n.com');
        const result = obj.getEmail();
        expect(result).toBe('n@n.com');

        // return empty string if it doesn;t pass validation. howeer email id entry is validated as soon as user enters the value. if it is not in accepted format, user is prompted to re enter else entered email is accepted

        const obj1 = new Employee('lauren','09er','nn.com');
        const result1 = obj1.getEmail();
        expect(result1).toBe('');

    })




    
})