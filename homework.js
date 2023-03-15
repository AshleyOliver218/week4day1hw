 class Hamster{
      constructor  (name){
        this.owner="";
        this.name=name;
        this.price=15;
      }
wheelRun(){
console.log("squeak squeak")
}
eatFood(){
    console.log("nibble nibble")

}
getPrice(){
 return this.price
}
    }

    class Person {
        constructor(name){
          this.name = name
          this.age = 0
          this.height = 0
          this.weight = 0
          this.mood = 0
          this.hamsters = []
          this.bankAccount = 0
        }
        getName(){
          return this.name
        }
        getAge(){
          return this.age
        }
        getWeight(){
          return this.weight
        }
        greet(){
          console.log(`I am ${this.name} hello`)
        }
        eat(){
          this.weight++
          this.mood++
        }
        exercise(){
          this.weight--
        }
        ageUp(){
          this.age++
          this.height++
          this.weight++
          this.mood--
          this.bankAccount+=10
        }
        buyHamster(hamster){
          this.hamsters.push(hamster)
          this.mood+=10
          this.bankAccount-=hamster.getPrice()
        }
      }
//1
const person1 = new Person("Timmy")
//2
for(let i =0; i < 5; i++){
    person1.ageUp()
}

for(let i =0; i < 5; i++){
    person1.eat()
}

for(let i =0; i < 5; i++){
    person1.exercise()
}
for(let i =0; i < 9; i++){
    person1.ageUp()
}

const hamster1 = new Hamster("Gus")
hamster1.owner = "Timmy"
person1.buyHamster(hamster1)

for(let i =0; i < 15; i++){
    person1.ageUp()
}

for(let i =0; i < 2; i++){
    person1.eat()
}

for(let i =0; i < 2; i++){
    person1.exercise()
}