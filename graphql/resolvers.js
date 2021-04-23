import Post from "../models/post.model.js";

const resolvers = {
  Query: {
    getAllPosts: async () => {
      const posts = await Post.find();
      return posts;
    },
    getPostById: async (_parent, args, context, info) => {
      const { id } = args;
      return await Post.findById(id);
    },
  },

  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { title, description } = args.post;
      const post = new Post({ title, description });
      await post.save();
      return post;
    },
    deletePost: async (_parent, args, _context, _info) => {
      const { id } = args;
      const post = await Post.findByIdAndDelete(id);
      return "Deleted post successfully.";
    },
    updatePost: async (_parent, args, _context, _info) => {
      const { id } = args;
      const { title, description } = args.post;
      const updates = {};
      if (title !== undefined) {
        updates.title = title;
      }
      if (description !== undefined) {
        updates.description = description;
      }
      const post = await Post.findByIdAndUpdate(id, updates, { new: true });
      return post;
    },
  },
};

export default resolvers;
