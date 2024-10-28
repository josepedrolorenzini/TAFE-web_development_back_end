const mongoose = require('mongoose');



    module.exports = async () => {
     /*
        const userSchema = new mongoose.Schema({
            firstName: {type:String, required:true},
            lastName:  {type:String, required:true},
            email:  {type:String, required:true},
            password:  {type:[String , Number], required:true},
            date: {type:Date, required:false},
          });

          // Explicitly specify 'users' as the collection name
           //  const Users = mongoose.model('user', userSchema);
           const Users = mongoose.model('user', userSchema, 'user');

        try {
            
            // Await the connection to the database
            await mongoose.connect(process.env.DB);
            console.log('Connected to the database successfully');

            // Query the User model
            // const user = await Users.find({ firstName: "pedro" });
            //  await Users.create({ firstName: "pedro", lastName: "test", email: "pedro@example.com", password: "test" });
             // Add a new user using insertMany
            const insertUser =  await Users.insertMany([{ firstName: "jose", lastName: "test 2", email: "pedro@example.com", password: "test" }]);
                console.log('User added successfully.');
                // await (insertUser);

                // Query the added user
                const user = await Users.find({ firstName: "pedro" });
               // console.log('Queried User:', user);

          // console.log(user);

            // Close the connection (optional for one-time scripts)
           await  mongoose.connection.close();
          */
           try {
           mongoose.connect(process.env.DB);
           console.log("Connected to database successfully");
        } catch (error) {
            console.error('Error connecting to the database:', error);
            process.exit(1); // Exit process with failure
            
        }
    };
