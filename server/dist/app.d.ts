import 'reflect-metadata';
import express from 'express';
declare class App {
    app: express.Application;
    env: string;
    port: string | number;
    constructor(Controllers: Function[]);
    listen(): void;
    getServer(): express.Application;
    private initializeMiddlewares;
    private initializeRoutes;
    private initStatic;
    private initializeErrorHandling;
}
export default App;
