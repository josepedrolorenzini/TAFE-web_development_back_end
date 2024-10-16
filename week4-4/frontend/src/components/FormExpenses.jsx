import  { useEffect, useState } from 'react'
function FormExpenses() {

    const [description , setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const [formdetails, setFormDetails] = useState({
        description : description,
        amount : amount,
        category : category,
      });

      function handleSubmit(event) {
        event.preventDefault();
        
        // get the form data using the FormData API
        const formData = new FormData(event.target);
        const querydescription = formData.get("description");
        const queryamount = formData.get("amount");
        const querycategory = formData.get("category");
        
        // update the state with the new form data
        // setDescription(querydescription);
        // setAmount(queryamount);
        // setCategory(querycategory);

        // adding content from post
     
      
  
        // update the state with the new form data
        setFormDetails((prevState) => {
          return {  
              ...prevState ,
              // description: setDescription(querydescription),
              // amount:setAmount(queryamount) ,
              // category: setCategory(querycategory),
              description : querydescription, amount:queryamount, category:querycategory
           };
        });
        // ... your API call here to send the form data to your server
      
          const blog = {description : querydescription, amount:queryamount, category:querycategory}
          // Add your API call here to send the form data to your server
          fetch("http://localhost:3000/expenses" , {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
          }).then((response) => {
            if(response.ok){
               alert(`Form submitted successfully for: ${querydescription}`);
               console.log(blog)
               console.log(response)
               console.log(formdetails);
               return response.json();
            } else {
              alert('Form submission failed.');
            }
          }).catch((error) => console.error('Error:', error));
          
        
      }
 
    useEffect(() => {
        console.log('Form updated');
        console.log(description, amount, category);
 
       
      
    }, [description, amount, category]);
  
    return (
      <>
      <h3> Search Form </h3>
      <p>Current Query: {description}</p>
      <form onSubmit={handleSubmit}>
        <input name="description" placeholder='description' /><br></br>
        <input name="amount" placeholder='amount'   /><br></br>
        <input name="category" placeholder='category'    /><br></br>
        <button type="submit">send</button>
      </form>
      </>
    );
}

export default FormExpenses