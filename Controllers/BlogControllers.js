const Blog = require("./../models/BlogModel");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res
      .status(200)
      .json({ status: "success", results: blogs.length, data: { blogs } });
  } catch (error) {
    return res.status(400).json({ status: "fail" });
  }
};
exports.getBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ status: "fail", message: "Blog not found" });
    }
    res.status(200).json({
      status: "success",
      data: { blog },
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
    });
  }
};
exports.createBlog = async (req, res, next) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.status(201).json({ status: "success", data: { blog: newBlog } });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
    });
  }
};
// exports.updateTour = catchAsync(async (req, res, next) => {
//   const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });
//   if (!tour) {
//     return next(new AppError("Tour not found ", 404));
//   }
//   res.status(201).json({ status: "success", data: { tour } });
// });
// exports.deleteTour = catchAsync(async (req, res, next) => {
//   const tour = await Tour.findByIdAndDelete(req.params.id);
//   if (!tour) {
//     return next(new AppError("Tour not found ", 404));
//   }
//   res.status(204).json({ status: "success", data: null });
// });
