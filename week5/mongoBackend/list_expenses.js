const dotenv = require("dotenv");
dotenv.config();
console.log(dotenv.config())
// list_expenses.js
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({

     student_id: mongoose.Schema.Types.Object,
     category_id: mongoose.Schema.Types.Object,
     amount: Number,
     description: String,
     date: { type: Date, default: Date.now }

});

const Expense = mongoose.model('Expense', expenseSchema);

async function main() {
    try {
        const uri = `mongodb+srv://${process.env.MongoDB_username}:${process.env.MongoDB_Key}@cluster0.rtrw8.mongodb.net/iatd_student_expense_tracker`;

        await mongoose.connect(uri);
        console.log("Connected to MongoDB Atlas using Mongoose!");

        const expenses = await Expense.find({}, {_id: 0}); // exclude the _id field
         console.log("Expenses:");
         await   console.log(expenses) ;

         expenses.forEach(expense => {
            console.log(`${expense.student_id['$oid']} ${expense.category_id.$oid} ${expense.amount} ${expense.description} ${expense.date}`);
         });
         
         await mongoose.connection.close();
    }
    catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}

main().catch(err => {
    console.error(err);
});