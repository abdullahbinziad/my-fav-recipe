import { useEffect, useState } from "react";
import ChefCards from "./ChefCards";



const Chef = () => {
  const [chefs,setChefs] = useState([]);

useEffect(()=>{
    fetch('http://localhost:3000/chef')
    .then(res=> res.json())
    .then(data=> {
        console.log(data);
        setChefs(data)
    })
},[])

  return (
    <div className="md:w-3/4   mx-auto">
      <div className="container my-12 md:px-6 px-3 mx-auto">
        <section className=" md:mb-24 mb-16 text-center lg:text-left">
          <h2 className="text-5xl font-bold md:my-20 my-4 text-center">
            Meet the <u className="text-blue-600">CHEF</u>
          </h2>

          <div className="grid md:grid-cols-2 gap-3 xl:gap-x-4">
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
