
import { FaThumbsUp } from 'react-icons/fa'

const ChefCards = (props) => {
 
        const {_id,chefPicture,chefName,yearsOfExperience,numberOfRecipes,likes} = props.chef;


            return (
                <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-56 rounded-lg' src={chefPicture} alt="Album"/></figure>
                <div className="p-6 space-y-2">
                  <h2 className="card-title">{chefName}</h2>
                  <p>work Experience : <span className="font-semibold"> {yearsOfExperience} Years  </span>  </p>
                  <p> Number of Recipe : <span className="font-semibold">{numberOfRecipes}</span> </p>
                  <div className="card-actions flex flex-row-reverse items-center justify-between">
            <div className='flex gap-2 items-center self-center'>{likes} <  FaThumbsUp className='text-xl text-red-500'></FaThumbsUp></div>
              <button className="w-18 btn btn-sm">View Recipes</button>
                  </div>
                </div>
              </div>
            );
    
};

export default ChefCards;

