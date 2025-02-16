function emp(id, name, salary) {
    this.id= id;
    this.name = name;
    this.salary = salary;
}
var e = new emp(101,"Rutz",20849);
console.log(e.id+ " " + e.name+ " " + e.salary);