import cors from 'cors';
import consola from 'consola'
import express from 'express'
import  mongoose  from 'mongoose';
import {json} from 'body-parser'

//import express aaplication
import { DB,PORT} from './constants/index';

//initialise express application
const app=express()


const main= async()=>{

    try {
        // Connect with the database
      await   mongoose.connect(DB, {
           useNewUrlParser: true,
           useUnifiedTopology: true
        });

        consola.success("DATABASE CONNECTED...");
        // Start application listening for request on server
        app.listen(PORT, () => consola.success(`Sever started on port ${PORT}`));
      } catch (err) {
        consola.error(`Unable to start the server \n${err.message}`);
      }

}
main();