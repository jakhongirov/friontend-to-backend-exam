function Modal({ elModal }) {
  const heandleSubmit = (e) => {
    e.preventDefault();
    const { name, address, email } = e.target.elements;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: name.value,
      address: address.value,
      email: email.value,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log(name.value);

    fetch(
      "https://restaurants-3.herokuapp.com/api/restaurants/order",
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => console.log(data));

    name.value = null;
    address.value = null;
    email.value = null;

    elModal.current.style.display = "none";
  };

  return (
    <div className="modal" ref={elModal}>
      <div className="modal__item">
        <button
          className="modal__close"
          onClick={() => (elModal.current.style.display = "none")}
        >
          X
        </button>
        <form onSubmit={heandleSubmit}>
          <div className="">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="">
            <input type="text" name="address" placeholder="Address" />
          </div>
          <div className="">
            <input type="email" name="email" placeholder="Email" />
          </div>

          <button type="">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
