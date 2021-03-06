import app from '../../src/app';
import request from "supertest";

describe('Test api root', () => {

    it('should return the input data', (done) => {

        request(app)
            .get('/api')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                console.log(`res '${JSON.stringify(res.body, null, 2)}'`);
                done();
            });
    });
});