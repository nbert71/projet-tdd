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

app.post("/post", async (req, res) => {
    // console.log(req.body)
    let t: string = req.body.title;
    const create_post = await prisma.post.create({
        data: {
            title: t,
        },
    });
    res.send(JSON.stringify(create_post));
});

app.get("/posts", async (req, res) => {
    res.send(await prisma.post.findMany());
});

export { app };
