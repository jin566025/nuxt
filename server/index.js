import Koa from "koa";
import consola from "consola";
const { Nuxt, Builder } = require('nuxt')

import mongoose from 'mongoose'
import bodyParser from 'koa-bodyparser'
import session from 'koa-generic-session'
import Redis from 'koa-redis'
import json from 'koa-json'
import dbConfig from './dbs/config'
import passport from './interface/utils/passport'
import users from './interface/users'


const app = new Koa()
const index = require('./routes/index')

app.keys = ["mt", "keyskeys"]
app.proxy = true
app.use(session({
  key: "mt",
  prefix: "mt:uid",
  store: new Redis()
}))

app.use(bodyParser({
	extendTypes:['json','form','text']
}))
app.use(json())


app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(dbConfig.dbs, {
	useNewUrlParser:true
})
console.log("dbConfig.dbs",dbConfig.dbs)
mongoose.connection.on("connected",function(){
		console.log("MongoDB connected success.")
})
mongoose.connection.on("error",function(err){
		console.log("MongoDB connected fail.",err)
})
	
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)
	
	
  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server
  
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

	app.use(users.routes(), users.allowedMethods())
	app.use(index.routes(), index.allowedMethods())
  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
