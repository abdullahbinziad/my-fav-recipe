
import { FaThumbsUp } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const ChefCards = (props) => {
 
        const {_id,chefPicture,chefName,yearsOfExperience,numberOfRecipes,likes} = props.chef;


            return (
                <div className=" flex justify-between items-center card-side bg-base-100 shadow-xl rounded-lg p-3">
                <figure><img className='md:w-56 w-36	 rounded-lg' src={chefPicture} alt="Album"/></figure>
                <div className="md:p-2 p-3 md:space-y-2">
                  <h2 className="card-title">{chefName}</h2>
                  <p className='text-left'>work Experience : <span className="font-semibold"> {yearsOfExperience} Years  </span>  </p>
                  <p className='text-left'> Number of Recipe : <span className="font-semibold">{numberOfRecipes}</span> </p>
                  <div className="card-actions flex md:flex-row-reverse items-center justify-between">
            <div className='flex gap-2 items-center self-center'>{likes} <  FaThumbsUp className='text-xl text-red-500'></FaThumbsUp></div>
           
           <Link to={`/chef/${_id}`} className="w-18 btn btn-sm">View Recipes</Link>
           
                  </div>
                </div>
              </div>
            );
    
};

export default ChefCards;

