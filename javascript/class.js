var counter = function(num) {
    let className = "Counter";
    function setPrefix(prefix) {
        this.prefix = prefix + ": ";
    }
    function increment() {
        return this.prefix + ++num;
    }

    return {
        className: className,
        setPrefix: setPrefix,
        increment: increment,
    }
}

var c = new counter(5);
console.log("class name", c.className);
c.setPrefix("Total");
console.log("increment", c.increment());
console.log("increment", c.increment());