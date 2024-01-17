//break keyword jumps out of the loop
//continue keyword jumps in the next iteration
let i=0;
while(i<=10){
   // if(i===5) break;
   if(i%2===0){
    i++;
    continue;
   }

    console.log(i);
    i++;
}

