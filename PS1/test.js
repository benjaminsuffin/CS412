require('mocha');
const {expect} = require('chai')
const {P1} = require('./PS1.P1.js');
const {P2} = require('./PS1.P2.js');
const {P3} = require('./PS1.P3.js');
describe('P1 testing', () => {
    it('should return "" from input ""', function () {

            let ans = P1("");
            expect(ans).to.be.equal("");
        }
    );
    it('should return "abcdef" from input "fbedca"', function () {

            let ans = P1("fbedca");
            expect(ans).to.be.equal("abcdef");
        }
    );
    it('should return "aaacccdeefgiiiiiiillloopprrssstuux" from input "supercalifragilisticexpialidocious"', function () {

            let ans = P1("supercalifragilisticexpialidocious");
            expect(ans).to.be.equal("aaacccdeefgiiiiiiillloopprrssstuux");
        }
    )
});
describe('P2 testing', () => {
    it('should return 21 from input "7*3" followed by input "7*3"', function () {

            let ans = P2("7*3")("7*3");
            expect(ans).to.be.equal(21);
        }
    );

    it('should return 2 from input "6-4" followed by input "5-4"', function () {

            let ans = P2("6-4")("6-4");
            expect(ans).to.be.equal(2);
        }
    )
    it('should return 1 from input "5/5" followed by input "5/5"', function () {

            let ans = P2("5/5")("5/5");
            expect(ans).to.be.equal(1);
        }
    )
});


describe('P3 testing', () => {
    it('should return true from input ("HelloWorld", HelloWorld lambda function)', function () {

            let ans = P3("HelloWorld", function (s) {return s == "HelloWorld"});
            expect(ans).to.be.equal(true);
        }
    );

    it('should return heLLoworLd from input ("hello world", capital L lambda function)', function () {

            let ans = P3("helloworld", function (s) {return s.replace(/l/g, "L")});
            expect(ans).to.be.equal("heLLoworLd");
        }
    );

    it('should return 5 from input ("hello", length lambda function)', function () {

            let ans = P3("hello", function (s) {return s.length});
            expect(ans).to.be.equal(5);
        }
    );
});