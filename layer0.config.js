module.exports = {
  routes: "./src/routes.ts",
  connector: "@layer0/starter",
  backends: {
    origin: {
      domainOrIp: "ephemeral-salamander-e38ac4.netlify.app",
      hostHeader: "www.theappfactory.us"
    },
  },
};