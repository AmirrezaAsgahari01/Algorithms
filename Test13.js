const var1 = (name = 'Amirreza') =>{
    let str = 'Hello'+ name + '*-*!';
    return str;
}
let result = var1();
console.log(result);