enum ClothesSize {
    xs = "1",
    xl = "2",
    xxl = "3"
}

export const height: number = 187;
const isActive: boolean = true;
const username: string = "Joe";
const sym: symbol = Symbol("1");

interface IName {
    firstName: string;
    lastName: string;
}

interface IPerson {
    setName: (name: IName) => void;
    walk: () => void;
}

class Person implements IPerson {
    name = {
        firstName: "John",
        lastName: "Doe"
    };
    weight:any = 80;
    get _weight() {
        return this.weight;
    }
    public setName(name: IName): void {
        this.name = name;
    }
    public walk(): void {
        console.log("Walking");
    }
}

let jimmy = new Person();
jimmy.setName({firstName: "Barbara", lastName: "Cohen"});

export default Person;