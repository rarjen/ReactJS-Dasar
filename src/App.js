import "./App.css";
import { useState } from "react";
// import { Hello } from "./Hello";
// import { Title } from "./Title";
import Button from "./components/Button";
// import Table from "./components/Table";

function App() {
  // const Hello = () => "Hello";

  // render data array (menggunakan map)
  // const users = ["Otniel", "Kevin", "Abiel"];

  // render data object
  // const users = [
  //   { _id: 1, name: "Otniel", age: "21", status: true },
  //   { _id: 2, name: "Kevin", age: "22", status: true },
  //   { _id: 3, name: "Abiel", age: "21", status: false },
  // ];

  // const isLogin = false;

  // State (Menangani agar render setiap ada perubahan value)
  // let number = 0;
  const [number, setnumber] = useState(0);
  const [name, setName] = useState("");
  // const [tahunLahir, setTahunLahir] = useState("");

  const click = () => {
    setnumber(number + 1);
    console.log(number);
  };

  const handleSubmit = {};
  console.log(handleSubmit);

  return (
    <>
      {/* <h1>Welcome to react</h1>
      <ul>
        <li>Home</li>
        <li>Users</li>
        <li>{isLogin ? "Sudah Login" : "Login"}</li>
      </ul>
      <h1>
        <Hello />
      </h1>
      <Title name="Otniel Kevin Abiel" />
      <br />

      <Button onClick={() => alert("Click save")}>Save</Button> */}
      {/* render data array using map */}
      {/* <ul>
        {users.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ul> */}
      {/* Conditional if menggunakan &&  */}
      {/* <ul>
        {users.map((user, index) => {
          return (
            <>
              {user.status && (
                <li
                  key={index}
                >{`Nama saya: ${user.name}, dan usia saya: ${user.age}`}</li>
              )}
            </>
          );
        })}
      </ul> */}
      {/* <Table users={users} /> */}
      {/* State */}
      <h1>Counter app</h1>
      <p>Nilai counter saat ini {number}</p>
      <Button onClick={click}>Click Me</Button>
      <hr />
      <h1>Aplikasi input data diri</h1>
      Name:{" "}
      <input
        type="text"
        value={name}
        // e adalah event
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      {/* Tahun Lahir: <input type="text" value={tahunLahir} /> */}
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}

export default App;