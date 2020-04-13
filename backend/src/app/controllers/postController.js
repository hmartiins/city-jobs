const express = require('express');
const authMiddleware = require('../middlewars/auth');

const Post = require('../models/post');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (request, response) =>{
   try {
      const posts = await Post.find().populate('user');

      return response.send({ posts });
   } catch (err) {
      return response.status(400).send({ error: 'Error loading posts'});
   }
});

router.get('/:postId', async (request, response) =>{
   try {
      const posts = await Post.findById(request.params.postId).populate('user');

      return response.send({ posts });
   } catch (err) {
      return response.status(400).send({ error: 'Error loading post'});
   }
});

router.post('/', async (request, response) =>{
   try {
      const { title, description } = request.body;

      const post = await Post.create({title, description, user: request.userId});

      return response.send({ post });
   } catch (err) {
      return response.status(400).send({ error: 'Error creating new post'});
   }
});

router.put('/:postId', async (request, response) =>{
   try {
      const { title, description } = request.body;

      const post = await Post.findByIdAndUpdate(request.params.postId,{
         title, 
         description
      }, {new: true});

      await post.save();

      return response.send({ post });
   } catch (err) {
      console.log(err);
      return response.status(400).send({ error: 'Error updating new post'});
   }
});

router.delete('/:postId', async (request, response) =>{
   try {
      await Post.findByIdAndRemove(request.params.postId);

      return response.status(200).send({ successfully: 'Successfully deleted'});
   } catch (err) {
      return response.status(400).send({ error: 'Error deleting post'});
   }
});

module.exports = app => app.use('/posts', router);
