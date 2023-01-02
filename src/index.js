const express = require( 'express' )
const mongoose = require( 'mongoose' )
const route = require( './routes/route' )
const dotenv = require( 'dotenv' )
dotenv.config( { path: './config.env' } );
const app = express()

app.use( express.json() )


mongoose.set( 'strictQuery', true )
mongoose.connect( process.env.DB_CON, {
    useNewUrlParser: true
} )
    .then( () => console.log( "mongoDB is connected" ) )
    .catch( ( error ) => console.log( error ) )


app.use( '/', route )

app.listen( 4000, function ()
{
    console.log( "express app is running on PORT " + ( 4000 ) )
} )