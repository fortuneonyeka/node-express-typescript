import http from 'http';
import express from 'express'
import { info } from 'console';
import { loggingHandler } from './middleware/loggingHandler';
import { corsHandler } from './middleware/corsHandler';
import { routeNotFound } from './middleware/routeNotFound';
import { SERVER, SERVER_HOSTNAME, SERVER_PORT } from './config/config';

export const app = express()
export let httpServer: ReturnType<typeof http.createServer>

export const Main = () => {
      console.log(`------------------`);
      console.log(`Initializing`);
      console.log(`------------------`);
      app.use(express.urlencoded({extended:true}))
      app.use(express.json())

       console.log(`------------------`);
        console.log(`Logging & Configuration`);
        console.log(`------------------`);

        app.use(loggingHandler)
        app.use(corsHandler)


        console.log(`------------------`);
        console.log(`Define Controler Routing`);
        console.log(`------------------`);
      app.get('/main/healthcheck', (req, res, next) => {
            return res.status(200).json({message:'hello world'})
      })

      console.log(`------------------`);
      console.log(`Define Controler Routing`);
      console.log(`------------------`);
      app.use(routeNotFound)

       console.log(`------------------`);
       console.log(`Start Server`);
       console.log(`------------------`);
       httpServer = http.createServer(app)
       httpServer.listen(SERVER.SERVER_PORT, () =>  {
             console.log(`------------------`);
             console.log(`Sever Started @: ${SERVER_HOSTNAME}:${SERVER_PORT}`);
             console.log(`------------------`);
       })
}

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback)

Main()
