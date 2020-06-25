const app = require('./app')
const chai = require('chai');
require('mocha');
const chaiHttp = require('chai-http');
const {expect} = chai;


chai.use(chaiHttp);

describe('IP API Test 1', () => {

    it('should return a 200 success code', function(done) {

        chai.request(app)
            .get('/current')
            .end((err, response) => {
                expect(response).to.have.status(200);
            done();
        })
    });
})

describe('IP API Test 2', () => {

    it('should return a 200 success code', function(done) {

        chai.request(app)
            .post('/current')
            .send({address: '8.8.8.8'})
            .then( function(res) {

                expect(res).to.have.status(200);
            })
            done();
    });
})

describe('IP API Test 3', () => {

    it('should return California', function(done) {

        chai.request(app)
            .post('/current')
            .send({address: '8.8.8.8'})
            .then( function(res) {

                console.log(res.region);
                expect(res.region).to.include('California');
            })
        done();
    });
})