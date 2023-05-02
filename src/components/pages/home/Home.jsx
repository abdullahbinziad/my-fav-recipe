import { useEffect, useState } from "react";
import "./home.css";
import Food from "./Food";

const Home = () => {
    const [foods,setFoods] = useState([]);

    useEffect(()=>{
        fetch('/food.json')
        .then(res=> res.json())
        .then(data =>setFoods(data) )
    },[])



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
        <div className="grid grid-cols-4	gap-3">
{
foods.map(food=><Food key={food._id} food={food}></Food> )
}
        </div> 
    </div>
</section>

    </div>
  );
};

export default Home;
