"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const port = process.env.PORT || 3000;
const server = server_1.default.bootstrap();
const app = server.app;
app.listen(port);
console.log(`Server listening on port ${port}`);
//# sourceMappingURL=app.js.map