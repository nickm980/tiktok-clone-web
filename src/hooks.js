"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = void 0;
const cookie_1 = __importDefault(require("cookie"));
const uuid_1 = require("@lukeed/uuid");
const handle = async ({ request, resolve }) => {
    const cookies = cookie_1.default.parse(request.headers.cookie || '');
    request.locals.userid = cookies.userid || (0, uuid_1.v4)();
    // TODO https://github.com/sveltejs/kit/issues/1046
    if (request.query.has('_method')) {
        request.method = request.query.get('_method').toUpperCase();
    }
    const response = await resolve(request);
    if (!cookies.userid) {
        // if this is the first time the user has visited this app,
        // set a cookie so that we recognise them when they return
        response.headers['set-cookie'] = cookie_1.default.serialize('userid', request.locals.userid, {
            path: '/',
            httpOnly: true
        });
    }
    return response;
};
exports.handle = handle;
//# sourceMappingURL=hooks.js.map