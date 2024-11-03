import mongodb from "mongodb"

const MongoClient = mongodb.MongoClient;

 const uri = "mongodb+srv://your_username:your_password@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    
    // Example usage: insert a new course
   // Insert a new document
   const insertData = async () => {
       const course = { name: "Introduction to JavaScript", description: "Learn the basics of JavaScript", instructor: "John Doe" };
       await coursesCollection.insertOne(course);
       console.log("Inserted course document");

   }
   
   // Find all documents in the collection
   const allCourses = await coursesCollection.find().toArray();
   console.log("All courses:", allCourses);
   
   // Update a document
   const updatedCourse = { ...course, name: "Updated Introduction to JavaScript" };
   await coursesCollection.updateOne({ _id: course._id }, { $set: updatedCourse });
   console.log("Updated course document");
   
   // Delete a document
   await coursesCollection.deleteOne({ _id: course._id });
   console.log("Deleted course document");