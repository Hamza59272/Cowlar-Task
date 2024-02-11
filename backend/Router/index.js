const UserRouter = require("./User/index.js");
const ReviewRouter = require("./Reviews/index.js")
const MovieRouter = require("./Reviews/index.js")

const routes = [
    {
        path: "/api/user",
        handler: UserRouter,
    },
    {
        path: "/api/review",
        handler: ReviewRouter,
    },
    {
        path: "/api/movie",
        handler: MovieRouter,
    },
];

exports.connectRoute = (app) => {
    routes.forEach((route) => {
        app.use(route.path, route.handler);
    });
};
