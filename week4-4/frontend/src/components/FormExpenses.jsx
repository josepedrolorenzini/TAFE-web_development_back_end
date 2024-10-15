import  { useEffect, useState } from 'react'
function FormExpenses() {

    const [description , setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const [formdetails, setFormDetails] = useState({
        description: '',
        amount: '' ,
        category: '',
      });
      function handleSubmit(event) {
        event.preventDefault();
        
        // get the form data using the FormData API
        const formData = new FormData(event.target);
        const querydescription = formData.get("description");
        const queryamount = formData.get("amount");
        const querycategory = formData.get("category");
        
        // update the state with the new form data
        setDescription(querydescription);
        setAmount(queryamount);
        setCategory(querycategory);
  
        // update the state with the new form data
        setFormDetails((prevState) => {
          return {  
              ...prevState ,
              description: querydescription ,
              amount: queryamount ,
              category: querycategory,
           };
        });
  
        alert(`You searched for '${querydescription}'`);
        console.log(formdetails);
      }
 
    useEffect(() => {
        console.log('Form updated');
        return(
             description &&
                  
                  console.log('Form cleanup') ,
                  console.log(description)  ,
                  console.log(formdetails.amount) ,  
                  console.log(formdetails.category) 
           
            // add dependencies to clean up on unmount
        )
    }, [description, amount, category]);
  
    return (
      <>
      <h3> Search Form </h3>
      <p>Current Query: {description}</p>
      <form onSubmit={handleSubmit}>
        <input name="description" placeholder='description'/><br></br>
        <input name="amount" placeholder='amount'/><br></br>
        <input name="category" placeholder='category'/><br></br>
        <button type="submit">send</button>
      </form>
      </>
    );
}

export default FormExpenses