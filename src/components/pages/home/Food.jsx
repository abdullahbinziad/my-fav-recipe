
import{MdFavorite} from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Food = (props) => {

  const notify = (name) => toast(`${name }" is Added To Favourite"`);

    const {_id, name, ingredients, cookingMethod, rating, price,image }= props.recipe;
    return (
        <div className="card  bg-base-100 shadow-xl relative">
           <div onClick={()=>notify(name)} className="badge border-0 bg-red-700 absolute top-0 right-0 p-3 m-2 cursor-pointer">Add to Fav<MdFavorite className='m-1 text-xl'></MdFavorite> </div>
           <ToastContainer />

        <figure><img src={image} alt="Shoes" /></figure>
       
        <div className="p-3 card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
           
          </h2>
        
          <div className="">
   
            {
                ingredients.map(n=>   <div className=" badge badge-primary mx-1	">{n}</div>).slice(0,5)
            }
          </div>
        </div>
      </div>
    );
};

export default Food;