const Post = require("../models/postModel");

exports.newPost = async (req, res, next) => {
  try {
    // console.log(req.body.date);
    

    const { title, description, date } = req.body;

    

    const post = await Post.create({
      title,
      description,
      date,
    });

    res.status(201).json({
      success: true,
      post,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};
