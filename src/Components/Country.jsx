const Country = ({ country }) => {
    console.log(country)
  return (
    <div>
      <div className="card">
        <h3>Name: {country.name.common}</h3>
        <img className="img" src={country.flags.png} alt="" />
      </div>
    </div>
  );
};

export default Country;
