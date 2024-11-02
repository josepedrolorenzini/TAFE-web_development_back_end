import ApiExpenses from "../components/ApiExpenses";
import CoingateAPI from "../components/CoingateAPI";
import FormExpenses from "../components/FormExpenses";


function Homepages() {
  return (
    <> 
     <FormExpenses />
      <ApiExpenses />
      <CoingateAPI />
    </>
  )
}

export default Homepages