

import { app } from '../src/app';
import * as request  from 'supertest';
let user;
let server;

beforeAll(async () => {
    user = await request.agent(app);
    server = await app.listen(3000);
});

afterAll(async () => {
    await server.close();
});


test('GET index.html', (done) => {
    user
        .get('/')
        .expect(301)
        .expect(function(res) {
            expect(res.headers.location).toBe('/static/index.html')
        })
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            done()
        })
})