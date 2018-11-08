// ***STEP 1
// var age: number = "Too old"
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// CLASSES
var Product = (function () {
    function Product(id) {
        this.id = id;
    }
    Product.prototype.printDetails = function () {
        console.log("Title: " + this.title);
        console.log("ID: " + this.id);
        console.log("Price: " + this.price);
    };
    return Product;
}());
var Tour = (function (_super) {
    __extends(Tour, _super);
    function Tour(id, duration) {
        var _this = _super.call(this, id) || this;
        _this.duration = duration;
        return _this;
    }
    Tour.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Duration: " + this.duration);
    };
    return Tour;
}(Product));
var Dining = (function (_super) {
    __extends(Dining, _super);
    function Dining(id, cuisine, childPrice) {
        var _this = _super.call(this, id) || this;
        _this.cuisine = cuisine;
        _this.childPrice = childPrice;
        return _this;
    }
    Dining.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Today's Menu: " + this.cuisine);
        console.log("Children's Price: " + this.childPrice);
    };
    return Dining;
}(Product));
// FUNCTIONS
function test(p) {
    p.printDetails();
}
function cancelBooking(c) {
    console.log("Canceling booking. Charges %d", c.cancelationFee);
}
function cancelBooking2(c) {
    console.log("Canceling: %s (%d)", c.title, c.id);
    console.log("Price: %d", c.price);
    console.log("Cancelation fee: %d", c.cancelationFee);
    console.log("Total refund: %d", c.price - c.cancelationFee);
}
function configSomething(op) {
    op.maxSize = op.maxSize || 1024;
    console.log("Directory: %s", op.directory);
    console.log("File: %s", op.file);
    console.log("Max size: %s", op.maxSize);
}
// RUN CODE
var t = new Tour(1, "8 hours");
t.title = "Trip to the Taj Mahal";
t.price = 1200.00;
t.cancelationFee = 100.00;
var d = new Dining(2, "Italian", 600.00);
d.title = "Day 1 Cruise";
d.price = 1200.00;
configSomething({
    directory: "/dir1",
    file: "persons.json"
});
// cancelBooking(t)
// cancelBooking2(t)
// test(t)
// test(d) 
//# sourceMappingURL=play.js.map