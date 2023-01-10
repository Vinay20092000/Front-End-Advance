class Customer{
    private id:number;
    private name:string;
    private location:string;

    constructor(id:number = 1, name:string = "Evin", location:string = "Mumbai"){
        this.id = id;
        this.name = name;
        this.location = location;
    }

    showDetails(){
        console.log(`Id : ${this.id}, Name : ${this.name}, City : ${this.location}`)
    }
}

let c1:Customer = new Customer();
let c2:Customer = new Customer(10256);
let c3:Customer = new Customer(10256, 'Scott');
let c4:Customer = new Customer(10256, 'Scott', "Hyd"); 

c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();