
import "./home.css";
import Food from "./Food";
import Chef from "../chef/Chef";
import Contact from "./Contact";
import { useLoaderData } from "react-router-dom";
import FoodCardForHOme from "./FoodCardForHOme";



const Home = () => {


  const foods = useLoaderData();
  console.log(foods);


   


  return (
    <div className="">
      <section className="w-3/4 mx-auto">
        <div id="hero" className="hero">
          <div className="hero-content justify-end px-16 flex-col lg:flex-row-reverse">
            <div className="w-1/2 text-white">
              <h1 className="text-5xl font-bold">Heaven of Testy</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Explore Recipe</button>
            </div>
          </div>
        </div>
      </section>

<section className="w-3/4 mx-auto my-8 ">

    <h1 className="text-3xl font-bold text-center my-4 my-8">Most Wanted Recipe</h1>
    <div className="">
        <div className="grid grid-cols-5	gap-3">
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
