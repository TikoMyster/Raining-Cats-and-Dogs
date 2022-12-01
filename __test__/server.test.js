/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../server');
const agent = request.agent(app);
const {Pet} = require('../models/index');

describe('/', () => {
    it('should load homepage', (done) => {
        agent
            .get('/')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });
});

describe('/dashboard', () => {
    after(async()=>{
        Pet.destroy({where: {name: 'Odin'}});
    });

    it('should login', (done) => {
        agent
            .post('/api/users/login')
            .send({ username: 'testuser', password: 'testtest' })
            .expect('Location', '/dashboard')
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

    it('should load dashboard page', (done) => {
        agent
            .get('/dashboard')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

    it('should be able to add a pet', (done) => {
        agent
            .post('/api/pet')
            .send({
                name: 'Odin',
                type: 'Dog',
                breed: 'Australian Shepherd',
                owner_id: 1
            })
            .expect('Location', '/dashboard')
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });
});

