

const FoodCardForHOme = (props) => {
    const {_id, name, ingredients, cookingMethod, rating, price,image }= props.food;
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure className="relative "><img src={image} alt="Shoes" /></figure>
        <div className="badge badge-secondary absolute top-0 right-0 p-2 m-1">NEW</div>
        <div className="p-3 card-body">
          <h2 className="card-title">
            {name}
           
          </h2>
        
          <div className="">
   
            {
                ingredients.map(n=>   <div className=" badge badge-primary mx-1	">{n}</div>).slice(0,3)
            }
          </div>
        </div>
      </div>
    );
};

export default FoodCardForHOme;