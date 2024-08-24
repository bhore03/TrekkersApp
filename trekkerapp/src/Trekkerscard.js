const Trekkerscard = ({ name, image, price, tour, star }) => {
  return (
      <div className='trekkercard'>
          <img src={image} alt={name[0]} />
          <h1>{name.join(", ")}</h1>
          <h2>{price}</h2>
          <h3>{tour.join(", ")}</h3>
          <h4>{star} Star</h4>
      </div>
  );
};

export default Trekkerscard;
