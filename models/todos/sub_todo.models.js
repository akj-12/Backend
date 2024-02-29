// 1) import mongoose
import mongoose from "mongoose";

// 2) define schema
const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    /**
     *  connecting bewtween two models, here this model store User id as a reference
     */
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// 3) create model
export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
