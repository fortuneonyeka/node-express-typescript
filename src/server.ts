import http from 'http';
import express from 'express'
import { info } from 'console';
import { loggingHandler } from './middleware/loggingHandler';
import { corsHandler } from './middleware/corsHandler';

export const app = express()
export let httpServer: ReturnType<typeof http.createServer>

export const Main = () => {
      console.log(info(`------------------`));
      console.log(info(`Initializing`));
      console.log(info(`------------------`));
      app.use(express.urlencoded({extended:true}))
      app.use(express.json())

       console.log(info(`------------------`));
        console.log(info(`Logging & Configuration`));
        console.log(info(`------------------`));

        app.use(loggingHandler)
        app.use(corsHandler)
}