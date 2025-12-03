import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const navigate = useNavigate();

  const SetItem = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "token",
      JSON.stringify({ token: Math.round(Math.random() * 10000000) })
    );

    navigate("/profile");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f2f2f2"
      }}
    >
      <form
        onSubmit={SetItem}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "20px",
          background: "white",
          borderRadius: "10px",
          width: "300px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <input
          onChange={(e)=> setName(e.target.value)}
          required
          placeholder="enter your name"
          type="text"
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />

        <input
          onChange={(e)=> setSurname(e.target.value)}
          required
          placeholder="enter your password"
          type="password"
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />

        <button
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            background: "#4c6ef5",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Login;
