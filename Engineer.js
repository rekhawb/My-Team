const Employee = require('./Employee');

class Engineer extends Employee{

    constructor(name,id,email,github){
        super(name,id,email);
    
    this.role = this.getRole();
    this.github = github;
    
    }
    
  
    
    getRole(){
    return 'Engineer';   
    }


    getGitHub(){
        return this.github;
    }


    generateEngineerHTML(){

        if (this.role === 'Intern'){
           this.detail = 'School';
           this.icon =  '&#127891';
        }else{
          this.detail = 'GitHub';
          this.icon = '&#x1f453';
        }
    
        
    
        this.htmlEngrCreate = `
        <div class="col-sm-4 col-12 d-flex justify-content-center">
        <div class="card">
         
          <div class="card-header bg-primary" style="color:white">
          <p class="card-text">${this.name}</p>
          <p class="card-text"><i class="fas fa-glasses mr-2"></i>${this.role}</p>
          </div>
          <div class="card-body">
          <div class="row text-left  d-flex justify-content-center">
          <div class="col-sm-12">
            <div class="card" >
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: ${this.email}</li>
                <li class="list-group-item">${this.detail}: ${this.github}</li>
              </ul>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>`
        
        return this.htmlEngrCreate;
        };


}

module.exports = Engineer;