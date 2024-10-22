const dotenv = require("dotenv");
dotenv.config();
// console.log(dotenv.config())
const mongoose = require("mongoose");


const expenseSchema = new mongoose.Schema({
    student_id: mongoose.Schema.Types.Object,
    category_id: mongoose.Schema.Types.Object,
    amount: Number,
    description: String,
    date: { type: Date, default: Date.now }
})

const Expenses = mongoose.model("Expense" ,expenseSchema);

async function main(){
    const uri = `mongodb+srv://${process.env.MongoDB_username}:${process.env.MongoDB_Key}@cluster0.rtrw8.mongodb.net/iatd_student_expense_tracker`;

    try {
        await mongoose.connect(uri);

        console.log("Connected to MongoDB Atlas using Mongoose!");

        const updatedExpense = await Expenses.findByIdAndUpdate("67160bfed9ba694cc42a09ba", { description: "Die die my darling 0_0" });

        console.log(`Expense updated: 
            ${updatedExpense.student_id.$oid} 
            ${updatedExpense.category_id.$oid} 
            ${updatedExpense.amount} 
            ${updatedExpense.description} 
            ${updatedExpense.date}`);

            await mongoose.connection.close();

    } catch (error) {
        console.error(error);
    }
};

main().catch(console.error);