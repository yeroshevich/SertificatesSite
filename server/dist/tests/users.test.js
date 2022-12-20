"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _supertest = _interopRequireDefault(require("supertest"));
const _app = _interopRequireDefault(require("../app"));
const _usersController = require("../controllers/users.controller");
const _usersModel = _interopRequireDefault(require("../models/users.model"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
afterAll(async ()=>{
    await new Promise((resolve)=>setTimeout(()=>resolve(), 500));
});
describe('Testing Users', ()=>{
    describe('[GET] /users', ()=>{
        it('response statusCode 200 / findAll', ()=>{
            const findUser = _usersModel.default;
            const app = new _app.default([
                _usersController.UsersController
            ]);
            return (0, _supertest.default)(app.getServer()).get('/users').expect(200, {
                data: findUser,
                message: 'findAll'
            });
        });
    });
    describe('[GET] /users/:id', ()=>{
        it('response statusCode 200 / findOne', ()=>{
            const userId = 1;
            const findUser = _usersModel.default.find((user)=>user.id === userId);
            const app = new _app.default([
                _usersController.UsersController
            ]);
            return (0, _supertest.default)(app.getServer()).get(`/users/${userId}`).expect(200, {
                data: findUser,
                message: 'findOne'
            });
        });
    });
    describe('[POST] /users', ()=>{
        it('response statusCode 201 / created', async ()=>{
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4'
            };
            const app = new _app.default([
                _usersController.UsersController
            ]);
            return (0, _supertest.default)(app.getServer()).post('/users').send(userData).expect(201);
        });
    });
    describe('[PUT] /users/:id', ()=>{
        it('response statusCode 200 / updated', async ()=>{
            const userId = 1;
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4'
            };
            const app = new _app.default([
                _usersController.UsersController
            ]);
            return (0, _supertest.default)(app.getServer()).put(`/users/${userId}`).send(userData).expect(200);
        });
    });
    describe('[DELETE] /users/:id', ()=>{
        it('response statusCode 200 / deleted', ()=>{
            const userId = 1;
            const app = new _app.default([
                _usersController.UsersController
            ]);
            return (0, _supertest.default)(app.getServer()).delete(`/users/${userId}`).expect(200);
        });
    });
});

//# sourceMappingURL=users.test.js.map