module.exports = {
  routes: "./src/routes.ts",
  connector: "@layer0/starter",
  backends: {
    origin: {
      domainOrIp: "www.theappfactory.us",
      hostHeader: "www.theappfactory.us"
    },
  },
};