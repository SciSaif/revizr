import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get("/", (req: Request, res: Response) => {
    console.log(add(1, 3));

    res.send("Hello World!");
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
