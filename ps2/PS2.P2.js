function* yieldString(s){

    let split = s.split(" ");
    for (let i= 0; i < split.length; i++){

        yield split[i];
    }
}

let strGen = yieldString("All I know is something like a bird within her sang");
let result = strGen.next();
while (!result.done){

    console.log(result.value);
    result = strGen.next();
}