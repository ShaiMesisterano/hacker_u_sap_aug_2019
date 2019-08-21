enum ClothesSize {
    xs = "1",
    xl = "2",
    xxl = "3"
}

class Person {
    public walk(): void {
        console.log("Walking");
    }
}

let shai = new Person();
shai.walk();