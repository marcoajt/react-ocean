import React from "react";
import ReactDOM from "react-dom";

function Login() {
  return (
    <div>
      <p>Username:</p>
      <p>Password:</p>
    </div>
  );
}

function Hearder(props) {
  return (
    <div style={{ fontSize: "35px" }}> {/*PROPS(argumento) vai receber a variavel */}
      <p>DJ - {props.titulo}</p>
    </div>
  );
}

ReactDOM.render (
  <React.StrictMode>
    <Hearder titulo = "Inicial" fontSize='35' />
    <Login/>
  </React.StrictMode>

  ,

  document.getElementById('root')
);