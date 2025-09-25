
    module.exports = function (app) {
        const modelName = "error_logs";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            serviceName: { type:  String , required: true, comment: "Service Name, p, false, true, true, true, true, true, true, , , , ," },
errorMessage: { type:  String , required: true, comment: "Error Message, p, false, true, true, true, true, true, true, , , , ," },
message: { type:  String , required: true, comment: "Message, p, false, true, true, true, true, true, true, , , , ," },
stack: { type:  String , required: true, comment: "Stack, p, false, true, true, true, true, true, true, , , , ," },
details: { type:  String , required: true, comment: "Details, p, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };