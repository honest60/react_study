function Person(first, last) {
    this.first = first;
    this.last = last;
}

var s = new Person("Simon", "Willison");
//s.firstNameCaps(); //TypeError on line 1: s.firstNameCaps is not a function
Person.prototype.firstNameCaps = function() {
    return this.first.toUpperCase()
};
console.log(s.firstNameCaps()); // "SIMON"
