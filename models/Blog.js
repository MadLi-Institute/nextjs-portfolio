import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    highlight: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
        default: undefined,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
