import { type Mongoose, connect } from 'mongoose'
import { zenv } from '~/lib/zenv'

interface MongooseCached {
  conn: Mongoose | null
  promise: Promise<Mongoose> | null
}

// Because of HMR we need to use global.mongoose
declare global {
  // This must be a `var` and not a `let / const`
  var mongoose: MongooseCached | undefined
}

const MONGODB_URI = zenv.MONGO_URI

let cached: MongooseCached
if (process.env.NODE_ENV === 'development') {
  if (!global.mongoose) {
    global.mongoose = { conn: null, promise: null }
  }
  cached = global.mongoose
} else {
  // In production mode, no use of global variable
  cached = { conn: null, promise: null }
}

// Return cached connection
export const dbConnect = async (): Promise<Mongoose> => {
  if (cached.conn) {
    return cached.conn
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }
    cached.promise = connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }
  return cached.conn
}
