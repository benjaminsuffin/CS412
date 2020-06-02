const P3 = (s, f) => {

    return f(s);
}

console.log(P3("supercalifragilisticexpialidocious", function (s) {return s.split(/(?=c)/g)}));
console.log(P3("supercalifragilisticexpialidocious", function (s) {return {originalString: s,
                                                                    modifiedString: s.replace(/a/g, "A"),
                                                                    numberReplaced: s.match(/a/g).length,
                                                                    length: s.length}}));

exports.P3 = P3;