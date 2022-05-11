const Employee = require('./Employee');


class Intern extends Employee{

    constructor(name,id,email,school){
        super(name,id,email);
    
    this.role = this.getRole();
    this.school = school;
    }
    
  
    
    getRole(){
    return 'Intern';
    
    }

    getSchool(){
        return this.school;
    }

generateInternHTML(){

    if (this.role === 'Intern'){
       this.detail = 'School';
       this.icon =  '&#127891';
    }else{
      this.detail = 'GitHub';
      this.icon = '&#x1f453';
    }

    

    this.htmlTeamCreate = `
    <div class="col-sm-4 col-12 d-flex justify-content-center">
    <div class="card">
     
      <div class="card-header bg-primary" style="color:white">
      <p class="card-text">${this.name}</p>
      <p class="card-text"><i class="fas fa-user-graduate mr-2"></i>${this.role}</p>
      </div>
      <div class="card-body">
      <div class="row text-left  d-flex justify-content-center">
      <div class="col-sm-12">
        <div class="card" >
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">Email: ${this.email}</li>
            <li class="list-group-item">${this.detail}: ${this.school}</li>
          </ul>
        </div>
        </div>
      </div>
      </div>
    </div>
  </div>`
    
    return this.htmlTeamCreate;
    };
}

module.exports = Intern;