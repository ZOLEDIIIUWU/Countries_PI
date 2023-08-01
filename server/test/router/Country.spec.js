const session = require('supertest-session');
const app = require('../../src/server')
const { Country, conn } = require('../../src/db');

const agent = session(app);
const Country = {
    name: 'Argentina',
};

describe('Country routes', () => {
    before(() => conn.authenticate()
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    }));

});