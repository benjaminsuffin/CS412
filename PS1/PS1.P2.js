const P2 = (s) => {

    const sLen = s.length;
    const ops = {'+': 0, '*': 0, '-': 0, '/': 0, '%': 0};

    for(let i = 0; i < sLen; i++){

        const currentChar = s.charAt(i);
        if (currentChar in ops){

            if (currentChar == '+'){

                return add;
            }
            if (currentChar == '*'){

                return mul;
            }
            if (currentChar == '-'){

                return sub;
            }
            if (currentChar == '/'){

                return div;
            }
            if (currentChar == '%'){

                return mod;
            }
            else{
                return null;
            }

        }
    }
}

const add = (s) => {

    const p = parse(s);
    const left = p[0];
    const right = p[1];
    return left + right;
}

const sub = (s) => {

    const p = parse(s);
    const left = p[0];
    const right = p[1];
    return left - right;
}

const mul = (s) => {

    const p = parse(s);
    const left = p[0];
    const right = p[1];
    return left * right;
}

const div = (s) => {

    const p = parse(s);
    const left = p[0];
    const right = p[1];
    return left / right;
}

const mod = (s) => {

    const p = parse(s);
    const left = p[0];
    const right = p[1];
    return left % right;
}

const parse = (s) => {

    let left = "";
    const ops = {'+': 0, '*': 0, '-': 0, '/': 0, '%': 0};
    const sLen = s.length;

    for(let i = 0;  i < sLen; i++){

        const currentChar = s.charAt(i);
        if (currentChar in ops){

            const right = s.slice(i + 1);
            return [parseInt(left), parseInt(right)];
        }
        else {

            left += currentChar;
        }
    }
    return [];


}

// console.log(P2("7*3")("7*3"));
// console.log(P2("6-4")("6-4"));
// console.log(P2("5/5")("5/5"));
// console.log(P2("1+7")("1+7"));
// console.log(P2("8%3")("8%3"));

exports.P2 = P2;