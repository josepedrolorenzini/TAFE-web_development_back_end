const dotenv = require("dotenv");
dotenv.config();
//server
const mongoose = require('mongoose');

async function main() {
    try {
        const uri = `mongodb+srv://joseplorenzini:${process.env.MongoDB_Key}@cluster0.rtrw8.mongodb.net/iatd_student_expense_tracker`;
        await mongoose.connect(uri);
        console.log("Connected to MongoDB Atlas using Mongoose!");
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log("Collections:");
        collections.forEach((collection , index) => {
            console.log(collection.name + ": " + index);
        });
        await mongoose.connection.close();
    } catch (e) {
        console.error(e);
    }
}
main().catch(console.error).finally(console.log(dotenv.config().parsed.MongoDB_Key));



