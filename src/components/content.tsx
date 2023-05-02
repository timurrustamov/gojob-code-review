import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";

export const Content = () => {
  const [currentHash, setHash] = useState("login");
  console.log(currentHash);

  useEffect(() => {
    window.addEventListener("hashchange", (e) => {
      setHash(e.newURL.split("#")[1]);
    });
  }, []);

  useEffect(() => {
    window.location.hash = currentHash;
  }, [currentHash]);

  return (
    <div className="container">
      <div className="login-tab" style={{ background: "#eee" }}>
        <div
          className="login-tab-label"
          onClick={() => setHash("login")}
          style={{
            background: currentHash === "login" ? "#0152c7" : "",
            color: currentHash === "login" ? "white" : "",
          }}
        >
          Login
        </div>
        <div
          onClick={() => setHash("signup")}
          className="login-tab-label"
          style={{
            width: "50%",
            background: currentHash === "signup" ? "#0152c7" : "",
            color: currentHash === "signup" ? "white" : "",
          }}
        >
          Signup
        </div>
      </div>

      {currentHash === "login" ? <LoginForm /> : <div>WIP</div>}
    </div>
  );
};
