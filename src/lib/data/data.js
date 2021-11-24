"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    return await response.json();
}
exports.default = fetchData;
//# sourceMappingURL=data.js.map