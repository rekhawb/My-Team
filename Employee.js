//const Employee = require('./Employee');


class Employee{
    constructor(name,id,email){
    this.name = name;
  //  this.role = role;
    this.id = id;
   this.email = email;
    }



getName(){
return this.name;
}

getID(){
return this.id;
}

getEmail(){
    const email = this.email;
    if (email === '' || email === null || (email.indexOf('@')  < 0 || email.indexOf('.com') < 0 || email.length < 7 || email.slice(-5,-6) === '@' || email.slice(0,1) === '@')){
    return '';
    }else{
        return email;
    }

}
//this.email == '' || this.email == null || 
getRole(){
    this.role = 'Employee';
    return this.role;

    
}


generateClosingHTML(){

    this.htmlClosingCreate = `
    </div>
    </div>     
</body>
</html>`
    
    return this.htmlClosingCreate;

}

}

module.exports = Employee;