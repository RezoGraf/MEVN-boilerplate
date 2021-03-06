const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();

var Post = require("../models/post");

app.get('/posts', (req, res) => {
	Post.find({}, 'numberPost datePost forPost soderzhPost fiootprPost', function (error, posts) {
		if (error) { console.error(error); }
		res.send({
			  posts: posts
		  })
	  }).sort({_id:-1})
  })

app.post('/add_post', (req, res) => {
	var db = req.db;
	var numberPost = req.body.numberPost;
	var datePost = req.body.datePost;
	var forPost = req.body.forPost;
	var soderzhPost = req.body.soderzhPost;
	var fiootprPost = req.body.fiootprPost;
	var new_post = new Post({
		numberPost: numberPost,
		datePost: datePost,
		forPost: forPost,
		soderzhPost: soderzhPost,
		fiootprPost: fiootprPost
	})

	new_post.save(function (error) {
		if (error) {
			console.log(error)
		}
		res.send({
			success: true
		})
	})
})

app.put('/posts/:id', (req, res) => {
	var db = req.db;
	Post.findById(req.params.id, 'numberPost datePost forPost soderzhPost fiootprPost', function (error, post) {
	  if (error) { console.error(error); }

	  post.numberPost = req.body.numberPost
	  post.datePost = req.body.datePost
	  post.forPost = req.body.forPost
	  post.soderzhPost = req.body.soderzhPost
	  post.fiootprPost = req.body.fiootprPost
	  post.save(function (error) {
			if (error) {
				console.log(error)
			}
			res.send({
				success: true
			})
		})
	})
})

app.delete('/posts/:id', (req, res) => {
	var db = req.db;
	Post.remove({
		_id: req.params.id
	}, function(err, post){
		if (err)
			res.send(err)
		res.send({
			success: true
		})
	})
})

app.get('/post/:id', (req, res) => {
	var db = req.db;
	Post.findById(req.params.id, 'numberPost datePost forPost soderzhPost fiootprPost', function (error, post) {
	  if (error) { console.error(error); }
	  res.send(post)
	})
})

app.listen(process.env.PORT || 8081)
