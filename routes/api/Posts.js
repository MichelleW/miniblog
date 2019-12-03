const express = require('express');
const router = express.Router();

// Post Model 
const Post = require('../../models/Post');


// @route GET api/posts
// @desc Get ALL Items
// @access Public

router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then((items) => res.json(items))
})

// @route POST api/posts
// @desc Create A Post
// @access Public

router.post('/', (req, res) => {
  console.log('req.body',req.body)
  const newPost = new Post({
    name: req.body.name,
    title: req.body.title,
    content: req.body.content
  });
  newPost.save().then((post) => res.json(post))

})

// @route DELETE api/posts:id
// @desc Delete A Post
// @access Public

router.delete('/:id', (req, res) => {

  Post.findById(req.params.id)
    .then(post => post.remove().then(() => res.json({ success: true })))
    .catch(err => post.status(404).json({ success: false }))

})


module.exports = router