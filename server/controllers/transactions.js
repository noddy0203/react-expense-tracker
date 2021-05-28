const Transaction = require("../models/Transactions");

//@desc   get all transactions
//@url    /api/v1/transactions
//@acess  public

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    res.status(500).json({ message: "its not you its us" });
    console.log(error.red.bgBlack);
  }
};

//@desc  post transactions
//@url    /api/v1/transactions
//@acess  public

exports.addTransactions = async (req, res, next) => {
  try {
    const { text,amount } = req.body;
    const transactions = new Transaction({text,amount});
    await transactions.save()
    res.status(200).json({message:"data saves", data:"transactions"});
  } catch (err) {
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: message,
      });

    } else {
      return res.status(500).json({
        success: false,
        error: "Success Error",
      });
    }
    console.log(err)
  }
};

//@desc  delete transactions
//@url    /api/v1/transactions
//@acess  public

exports.deleteTransactions = async (req, res, next) => {
  const {id} = req.params;
  const transaction = await Transaction.findByIdAndDelete(id)
  res.status(200).json({message:"transactions successfully deleted" , data:transaction})
};
