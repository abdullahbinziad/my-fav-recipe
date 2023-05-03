

const Food = (props) => {
    const {_id, name, ingredients, cookingMethod, rating, price,image }= props.recipe;
    return (
        <div className="card  bg-base-100 shadow-xl">
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