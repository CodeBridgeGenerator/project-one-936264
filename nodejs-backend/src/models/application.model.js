
    module.exports = function (app) {
        const modelName = 'application';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            Name: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
Language: { type: String, required: false , enum: ["Malay","English"] },
Performance: { type: Number, required: false, min: 0, max: 10000000, default: 6 },

            
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