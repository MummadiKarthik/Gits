class Karthik{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    view(){
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}
class Karthik1 extends Karthik{
    constructor(name, age, id){
        super(name, age);
        this.id=id;
    }   
    view(){
        console.log(`name is ${this.name}, age is ${this.age}, and id is ${this.id}`);
    }
}
class Karthik2 extends Karthik{
    constructor(name, age, id, role){
        super(name, age, id);
        this.role=role;
    }   
    view(){
        console.log(`name is ${this.name}, age is ${this.age}, id is ${this.id}, and role is ${this.role}`);
    }   
}
let karthik=[new Karthik("karthik", 24), new Karthik1("suresh", 25, 123), new Karthik2("rajesh", 26, 124, "developer")];
karthik.forEach((item)=>{
    item.view();
});