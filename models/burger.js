var orm = require('../config/orm.js');

var burgers = {
	all: function (cb) {
		orm.all('burgers', function (res) {
			cb(res);
		});
	},

	// app.post("/api/posts", function(req, res) {
	// 	console.log(req.body);
	// 	db.Post.create({
	// 	  title: req.body.title,
	// 	  body: req.body.body,
	// 	  category: req.body.category
	// 	})
	// 	  .then(function(dbPost) {
	// 		res.json(dbPost);
	// 	  });
	//   });

	create: function (col, vals, cb) {
		orm.create('burgers', col, vals, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.update('burgers', objColVals, condition, function (res) {
			cb(res);
		});
	}

	// app.delete("/api/posts/:id", function(req, res) {
	// 	db.Post.destroy({
	// 	  where: {
	// 		id: req.params.id
	// 	  }
	// 	})
	// 	  .then(function(dbPost) {
	// 		res.json(dbPost);
	// 	  });
	//   });
};

module.exports = burgers;