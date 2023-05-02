import { useEffect, useState } from "react";
import ChefCards from "./ChefCards";



const Chef = () => {
  const [chefs,setChefs] = useState([]);

useEffect(()=>{
    fetch('/chef.json')
    .then(res=> res.json())
    .then(data=> {
        console.log(data);
        setChefs(data)
    })
},[])

  return (
    <div>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet the <u className="text-blue-600">CHEF</u>
          </h2>

          <div className="grid md:grid-cols-2 gap-2 xl:gap-x-4">
         {
            chefs.map(chef=> <ChefCards key={chef._id} chef={chef}></ChefCards>)
         }
          </div>
        </section>
      </div>
    </div>
  );
};

export default Chef;
