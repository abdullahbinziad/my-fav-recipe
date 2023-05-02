

const Food = (props) => {
    const {_id, name, ingredients, cookingMethod, rating, price,image }= props.food;
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{cookingMethod.slice}</p>
          <div className="">
   
            {
                ingredients.map(n=>   <div className="badge badge-outline">{n}</div>).slice(0,3)
            }
          </div>
        </div>
      </div>
    );
};

export default Food;