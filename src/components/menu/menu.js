import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../model/model";

function Menu() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState();
  const elModal = useRef()

  console.log(id);

  useEffect(() => {
    fetch("https://restaurants-3.herokuapp.com/api/restaurants/menu?id=" + id)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <>
      <main className="main">
        <div className="container">
            <h2>Menu</h2>
          <button onClick={() => navigate(-1)}>Back</button>
          <ul className="list">
            {data &&
              data.map((e) => (
                <li
                  key={e.menu_id}
                  className="item"
                >
                  <img
                    src={e.menu_img}
                    alt={e.menu_name}
                    width={390}
                    height={200}
                  />
                  <h2 className="">{e.menu_name}</h2>
                  <p className="">{e.menu_price} sum</p>

                  <button onClick={()=> elModal.current.style.display = 'flex'}>Order</button>
                </li>
              ))}
          </ul>
        </div>
      </main>

      <Modal elModal={elModal} />
    </>
  );
}

export default Menu;
