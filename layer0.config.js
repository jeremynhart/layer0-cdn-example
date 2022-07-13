module.exports = {
  routes: "./src/routes.ts",
  connector: "@layer0/starter",
  backends: {
    origin: {
      domainOrIp: "www.bluepixel.design",
      hostHeader: "www.bluepixel.design",
    },
  },
};
a