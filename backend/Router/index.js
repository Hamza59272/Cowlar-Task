const UserRouter = require("./User/index.js");
const ReviewRouter = require("./Reviews/index.js")
const MovieRouter = require("./Movies/index.js")

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

    app.use('*', (req, res) => {
        res.status(404).send({ message: 'No such URL found' });
    });
};
