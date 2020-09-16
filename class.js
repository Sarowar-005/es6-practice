class Smartphone{
    constructor(name, model, year, ram, rom,price){
        this.name = name;
        this.model = model;
        this.year = year;
        this.ram = ram;
        this.rom = rom;
        this.price = price
    }
}

const smartphone1 = new Smartphone("iPhone", "iPhone 11 Pro", 2020, "4GB", "128GB", 120000);
const smartphone2 = new Smartphone("Samsung", "Samsung s20", 2020, "8GB", "128GB", 90000);
const smartphone3 = new Smartphone("Realme", "Realme 5i", 2020, "4GB", "64GB", 13000);
const smartphone4 = new Smartphone("Symphony", "Symphony Z-28", 2020, "3GB", "32GB", 9000);

console.log(smartphone1, smartphone2, smartphone3, smartphone4);
console.log(smartphone1.name);
console.log(smartphone2.name);
console.log(smartphone3.name);
console.log(smartphone4.name);