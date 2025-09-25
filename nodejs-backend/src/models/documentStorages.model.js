
    module.exports = function (app) {
        const modelName = "document_storages";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            name: { type:  String , required: true, maxLength: 10000, comment: "Document Name, p, false, true, true, true, true, true, true, , , , ," },
size: { type: Number, max: 1000000, comment: "Size, p_number, false, true, true, true, true, true, true, , , , ," },
path: { type:  String , required: true, maxLength: 1000, comment: "Path, p, false, true, true, true, true, true, true, , , , ," },
lastModifiedDate: { type: Date, comment: "Last Modified Date, p_date, false, true, true, true, true, true, true, , , , ," },
lastModified: { type: Number, max: 10000000, comment: "Last Modified, p_number, false, true, true, true, true, true, true, , , , ," },
eTag: { type:  String , required: true, comment: "AWS ETag, p, false, true, true, true, true, true, true, , , , ," },
versionId: { type:  String , required: true, comment: "AWS Version Id, p, false, true, true, true, true, true, true, , , , ," },
url: { type:  String , required: true, comment: "Url, p, false, true, true, true, true, true, true, , , , ," },
tableId: { type:  String , required: true, comment: "Table Id, p, false, true, true, true, true, true, true, , , , ," },
tableName: { type:  String , required: true, comment: "Table Name, p, false, true, true, true, true, true, true, , , , ," },

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