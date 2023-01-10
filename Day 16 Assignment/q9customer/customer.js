var Customer = /** @class */ (function () {
    function Customer(id, name, location) {
        if (id === void 0) { id = 1; }
        if (name === void 0) { name = "Evin"; }
        if (location === void 0) { location = "Mumbai"; }
        this.id = id;
        this.name = name;
        this.location = location;
    }
    Customer.prototype.showDetails = function () {
        console.log("Id : ".concat(this.id, ", Name : ").concat(this.name, ", City : ").concat(this.location));
    };
    return Customer;
}());
var c1 = new Customer();
var c2 = new Customer(10256);
var c3 = new Customer(10256, 'Scott');
var c4 = new Customer(10256, 'Scott', "Hyd");
c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();