
import "./home.css";

import Chef from "../chef/Chef";
import Contact from "./Contact";
import { useLoaderData } from "react-router-dom";
import FoodCardForHOme from "./FoodCardForHOme";



const Home = () => {


  const foods = useLoaderData();
  console.log(foods);


   


  return (
    <div className="">
      <section className="md:w-3/4 mx-auto">
        <div id="hero" className="hero md:rounded-lg md:min-h-[500px] min-h-[400px]">
          <div className=" hero-content p-2 justify-end px-16 flex-col lg:flex-row-reverse">
            <div className="md:w-3/4 text-white space-y-3 ">
              <h1 className="text-5xl font-bold">Heaven of <span className="text-yellow-400">Testy</span></h1>
              <p className="md:py-6 py-2 md:text-xl">The speciality of a best recipe lies in its ability to delight the senses and leave a lasting impression. It captures the perfect balance of flavors, textures, and aromas.
              </p>
              <button className="btn btn-primary">Explore Recipe</button>
            </div>
          </div>
        </div>
      </section>

<section className="md:w-3/4 p-2 md:p-0 mx-auto my-8 ">

    <h1 className="md:text-5xl text-3xl font-bold text-center my-12">Most <span className="text-red-700">Wanted</span> Recipe</h1>
    <div className="">
        <div className="grid md:grid-cols-4 grid-cols-2	gap-3">
{
foods.map(food=><FoodCardForHOme key={food._id} food={food}></FoodCardForHOme> )
}
        </div> 
    </div>
</section> 
<section className="">
<Chef></Chef>
</section>
<section className="w-5/6 mx-auto">
  <Contact></Contact>
</section>
    </div>
  );
};

export default Home;
