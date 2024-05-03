import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    // <div className="login">
    //   <div className="card">
    //     {/* <div className="left">
    //       <h1>Hello World.</h1>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
    //         alias totam numquam ipsa exercitationem dignissimos, error nam,
    //         consequatur.
    //       </p>
    //       <span>Don't you have an account?</span>
    //       <Link to="/register">
    //         <button>Register</button>
    //       </Link>
    //     </div> */}
    //     <div className="right">
    //       <h1>Login</h1>
    //       <form>
    //         <input type="text" placeholder="Username" />
    //         <input type="password" placeholder="Password" />
    //         <span >

    //         <button onClick={handleLogin} style={{paddingRight:"10px"}}>Login</button>
    //         <Link to="/register">
    //         <button style={{backgroundColor:"#f6f6f6",color:" #938eef"}}>Register</button>
    //       </Link>
    //         </span>

    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">FaceBook</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
