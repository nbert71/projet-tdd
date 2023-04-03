import path from "path";

import express, { json } from "express";
import { logger } from "./logger";
import prisma from "./db";

const app = express();
app.use((req, res, next) => {
    logger.info(req.url);
    next();
});

app.use(json());

app.use("/static", express.static(path.join(process.cwd(), "/static")));

app.get("/", (req, res) => {
    res.redirect(301, "/static/index.html");
});

app.post("/post", (req, res) => {
    // console.log(req.body)
    let t: string = req.body.title;
    prisma.post.create({
        data: {
            title: t,
        },
    });
    res.send(JSON.stringify(req.body));
});

app.get("/posts", (req, res) => {
    res.send(prisma.post.findMany());
});

export { app };
