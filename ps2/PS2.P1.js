function* fibonacci(){

    let [val1, val2, result] = [0, 1, 0];
    while(true){

        result = val1 + val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

function* fibHelper(){

    const fib = fibonacci();
    let count = 0
    while(count < 6){

        val = fib.next().value;
        if (val % 2 == 0){

            count++;
            yield val;
        }
    }
}

let evenFib = fibHelper();
let result = evenFib.next();

while(!result.done){

    console.log(result.value);
    result = evenFib.next();
}