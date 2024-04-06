import { Request, Response, NextFunction } from 'express';

export function routeNotFound(req: Request, res: Response, next: NextFunction) {
   const error = new Error('Route Not Found')

   console.log(error.message);
   return res.status(404).json({error: error.message});
   
}
