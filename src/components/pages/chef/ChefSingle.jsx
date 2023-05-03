import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Food from "../home/Food";

const ChefSingle = () => {
  const chefData = useLoaderData();

  console.log(chefData.chefName);
  return (
    <div className="w-full">
      <div className="w-3/4 mx-auto mt-20 bg-green-500 p-6 ">
        <div className="flex gap-10 justify-between items-center ">
          <div className="">
            <img
              className="w-68 rounded-lg"
              src={chefData.chefPicture}
              alt="chef"
            />
          </div>
          <div className="">
            <span className=" text-3xl font-bold  ">{chefData.chefName} </span>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <span>The Experience {chefData.yearsOfExperience}Years </span>
              <span>The Total Recipe {chefData.numberOfRecipes} </span>
              <span className="flex gap-2 items-center self-center">
                {" "}
                <FaThumbsUp className="text-xl text-red-500"></FaThumbsUp>{" "}
                {chefData.likes}{" "}
              </span>
            </div>
            <p className="font-semibold mt-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              odit magni vero hic recusandae temporibus, beatae voluptate
              reprehenderit distinctio, ipsum quidem dicta id quod perferendis{" "}
            </p>
          </div>

         
        </div>
       
      </div>
      <section className="w-3/4 mx-auto my-3">
            <h1 className="text-center text-4xl font-bold mt-10  font-semiold">
              His Populer Recipe
            </h1>
            <div className="grid grid-cols-3 gap-6 py-8 ">
                {
                    chefData.recipes.map((recipe) => <Food  key={recipe._id} recipe={recipe} ></Food> )
                }
            </div>
          </section>
    </div>
  );
};

export default ChefSingle;
