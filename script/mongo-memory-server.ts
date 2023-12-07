import { MongoMemoryReplSet } from 'mongodb-memory-server'

// This will create an new instance of "MongoMemoryServer" and automatically start it

const main = async () => {
  const mongoServer = await MongoMemoryReplSet.create({
    instanceOpts: [{ port: 27017 }],
    binary: {
      version: '6.0.0',
      downloadDir: './.mongo-memory-server',
    },
  })
  console.log('Starting Server ...\nURL:', mongoServer.getUri())
}

// Do not exit the script, as it will close the server
if (require.main === module) {
  main().catch((err) => console.error(err))
}
