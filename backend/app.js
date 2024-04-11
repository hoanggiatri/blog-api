const express = require('express')
const cors = require('cors');
const app = express()
const port = 8080

app.use(cors());

const BlogPosts = {
  'first-blog-post': {
    title: 'First Blog Post',
    description: 'Blog này nói về việc lấy API thành công rồi.',
  },
  'second-blog-post': {
    title: 'Second Blog Post',
    description: 'Blog này là blog thứ 2 lấy api thành công nè.',
  }
};

app.get('/api/blogs', (req, res) => {
  const blogs = Object.keys(BlogPosts).map(key => ({
    id: key,
    title: BlogPosts[key].title,
    description: BlogPosts[key].description
  }));
  res.json(blogs);
});

app.get('/api/blogs/:id', (req, res) => {
  const id = req.params.id;
  const blog = BlogPosts[id];
  if (!blog) {
    return res.status(404).json({ error: 'Không tìm thấy bài đăng blog' });
  }
  res.json(blog);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})