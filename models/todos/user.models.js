// 1) Import mongoose module
import mongoose from "mongoose";

/**
 * a) Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
 *
 * b) Schemas not only define the structure of your document and casting of properties, they also define document instance methods, static Model methods, compound indexes, and document lifecycle hooks called middleware.
 *
 * c) Each key in our code userSchema defines a property in our documents which will be cast to its associated SchemaType. For example, we've defined a property username which will be cast to the String SchemaType and property isActive which will be cast to a Boolean SchemaType.
 *
 */
// 2) Define Schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      isActive: Boolean,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

/**
 * To use our schema definition, we need to convert our userSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):
 */
// 3) Creating a models
export const User = mongoose.model("User", userSchema);
