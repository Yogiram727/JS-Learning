//1   = 00000001 -> 8 bits represent 1 byte 
//2   = 00000010
//OR  = 00000011 = 3
//AND = 00000000

console.log(1 | 2); //Bitwise OR
console.log(1 & 2); //Bitwise AND

//Read, Write, Execute
//0000100
//00000110
//00000111

const readPremission =4;
const writepermission=2;
const exeutePermission=1;

let myPermission=0;
myPermission=myPermission | readPremission | writepermission;
console.log(myPermission);

let message =(myPermission & readPremission) ? 'yes': 'no';
console.log(message);