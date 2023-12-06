module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '6.0.0',
      skipMD5: true,
    },
    autoStart: false,
    instance: {},
    // Using a replica set is required to perform transactions in the db
    replSet: {
      count: 1,
      storageEngine: 'wiredTiger',
    },
  },
}
