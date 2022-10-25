const questionModel = require("../models/questionModel");
const subjectModel = require("../models/subjectModel");
const userModel = require("../models/userModel");

exports.createQuestion = async (req, res, next) => {
  try {
    let user = await userModel.findById(req.user._id);
    const { question, options, answer, subject } = req.body;

    const sub = await subjectModel.find({
      subject
    })

    if(!sub) {
      await subjectModel.create({
        subject
      })
    }
    
    let questions = await questionModel.create({
      teacher: req.user._id,
      question,
      options,
      answer,
      subject
    });

    user.questions.push(questions._id);
    user.save();

    return res.status(200).json({
      success: true,
      questions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllQuestions = async (req, res, next) => {
  try {
    const currentPage = Number(req.query.page) || 1;
    const resultPerPage = Number(req.query.productsPerPage) || 8;
    const skip = resultPerPage * (currentPage - 1);

    let user = await userModel.findById(req.user._id);
    let questions = await questionModel.find({ _id: { $in: user.questions } }).select("+answer").limit(resultPerPage).skip(skip);
    // let user = await userModel.findById(req.user._id).populate("questions")
    res.status(200).json({
      success: true,
      questions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateQuestion = async (req, res, next) => {
  try {
    let { id } = req.params;
    let user = await userModel.findById(req.user._id);

    let question = await questionModel.findById(id);

    if(!question) {
        return res.status(404).json({
            success: false,
            message: "Question not found"
        })
    }

    if (!user.questions.includes(id)) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized to update other's question. Sorry Hacker!!",
      });
    }

    question = await questionModel.findByIdAndUpdate(id, req.body);

    res.status(200).json({
      success: true,
      question,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteOption = async (req, res, next) => {
  try {
    const {index} = req.body;
    const question = await questionModel.findById(req.params.id);
    if(!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found"
      })
    }
    console.log(index)
    console.log(question.options[index])
    if(index >= question.options.length) {
      return res.status(500).json({
        success: false,
        message: "Wrong index provided",
        options: question.options
      })
    }
    question.options.splice(index, 1);
    await question.save()
    return res.status(200).json({
      success: true,
      options: question.options
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

exports.deleteQuestion = async (req, res, next) => {
    try {
    let { id } = req.params;
    let user = await userModel.findById(req.user._id);

    let question = await questionModel.findById(id);

    if(!question) {
        return res.status(404).json({
            success: false,
            message: "Question not found"
        })
    }

    if (!user.questions.includes(id)) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized to delete other's question. Sorry Hacker!!",
      });
    }

    question = await questionModel.findByIdAndDelete(id, req.body);

    const index = await user.questions.indexOf(id);
    user.questions.splice(index, 1);
    await user.save();

    res.status(200).json({
      success: true,
      question,
    });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
          });
    }
}
