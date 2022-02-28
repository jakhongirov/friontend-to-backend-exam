import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://restaurants-3.herokuapp.com/api/restaurants?category=" + category)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [category]);

  console.log(data);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__box">
            <h1 className="heading">Restaurants</h1>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="1">Milli Taom</option>
              <option value="2">Fast Food</option>
            </select>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <ul className="list">
            {data &&
              data.map((e) => (
                <li
                  onClick={() => navigate("/menu/" + e.restaurant_id)}
                  key={e.restaurant_id}
                  className="item"
                >
                  <img
                    src={e.restaurant_img}
                    alt={e.restaurant_name}
                    width={390}
                    height={200}
                  />
                  <h2 className="">{e.restaurant_name}</h2>
                </li>
              ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Home;
