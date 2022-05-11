
class Team{
    constructor(name,role,id,email,offnum){
    this.name = name;
    this.role = role;
    this.id = id;
    this.email = email;
    this.offnum = offnum
    }
    
    generateHTML(){
    this.htmlCreate = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" media="screen" />
        <title>MyTeam</title>
    </head>
    <body>
        <div class="card text-center">
            <div class="card-header jumbotron bg-danger mh-100 text-capitalize" style="font-size:2.5rem; color:white">
              My Team
            </div>
            <div class="card-body">
                <div class="row text-left">
                    <div class="col-sm-1">
                      <div class="card">
                       
                        <div class="card-header bg-primary" style="color:white">
                        <p class="card-text">${this.name}</p>
                        <p class="card-text"><i class="fa fa-coffee fa-lg" aria-hidden="true"></i> ${this.role}</p>
                        </div>
                        <div class="card-body">
                        <div class="row text-left">
                        <p class="card-text">ID: ${this.id}</p>
                        </div>
                        <div class="row text-left">
                        <p class="card-text">Email: ${this.email}</p>
                        </div>
                        <div class="row text-left">
                        <p class="card-text">Office Numberl: ${this.offnum}</p>
                        </div>
                        </div>
                      </div>
                    </div>
                    </div>
          </div>
    </body>
    </html>`
    
    return this.htmlCreate;
    };
    }
    module.exports = Manager;