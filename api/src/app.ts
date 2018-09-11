import Server from './server';

const port = process.env.PORT || 3000;
const server = Server.bootstrap();
const app = server.app;
app.listen(port);
console.log(`Server listening on port ${port}`);