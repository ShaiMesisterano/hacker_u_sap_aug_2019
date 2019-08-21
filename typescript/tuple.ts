let nameNumber: [object, number];

nameNumber = [{username: 'John Doe', pass: '1234'}, 123];

nameNumber.forEach( (item: any) => {
    console.log(item);
} )