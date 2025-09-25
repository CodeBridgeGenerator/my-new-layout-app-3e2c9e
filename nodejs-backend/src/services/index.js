
const documentStorages = require("./documentStorages/documentStorages.service.js");
const errorLogs = require("./errorLogs/errorLogs.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    
  app.configure(documentStorages);
  app.configure(errorLogs);
    // ~cb-add-configure-service-name~
};
