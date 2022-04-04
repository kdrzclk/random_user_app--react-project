import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import email from "./assets/email.svg";
import phone from "./assets/phone.svg";
import location from "./assets/location.svg";

function App() {
  const [user, setUser] = useState([]);
  console.log(user);

  const users = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    console.log(data.results[0]);
    setUser(data.results[0]);
    console.log(user);
  };

  useEffect(() => {
    users();
    console.log(user);
  }, []);

  const handleClick = () => {
    users();
  };

  return (
    <div className="App">
      <div className="card-container">
        <img
          className="user-image"
          src={user?.picture?.medium}
          alt="userPhoto"
        />
        <h2 className="header">
          {user?.name?.title} {user?.name?.first} {user?.name?.last}
        </h2>
        <img className="image" src={email} alt="Email" />
        <p>{user?.email}</p>
        <img className="image" src={phone} alt="Tel" />
        <p>{user?.cell}</p>
        <img className="image" src={location} alt="Location" />
        <p>
          {" "}
          {user?.location?.city} - {user?.location?.country}{" "}
        </p>
        <div className="footer">
          <p>Age: {user?.registered?.age} </p>
          <p>Register Date: {user?.registered?.date.slice(0, 10)}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleClick}
        className="d-block btn btn-primary text-light mt-5 mx-auto"
      >
        Random User
      </button>
    </div>
  );
}

export default App;
