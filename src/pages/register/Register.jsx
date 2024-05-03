import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    // <div className="register">
    //   <div className="card">
    //     {/* <div className="left">
    //       <h1>Facebook.</h1>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
    //         alias totam numquam ipsa exercitationem dignissimos, error nam,
    //         consequatur.
    //       </p>
    //       <span>Do you have an account?</span>
    //       <Link to="/login">
    //       <button>Login</button>
    //       </Link>
    //     </div> */}
    //     <div className="right">
    //       <h1>Register</h1>
    //       <form>
    //         <input type="text" placeholder="Username" />
    //         <input type="email" placeholder="Email" />
    //         <input type="password" placeholder="Password" />
    //         <input type="text" placeholder="Name" />
    //         <span style={{gap:"10px"}}>
    //         <button>Register</button>

    //         <Link to="/login">
    //       <button style={{backgroundColor:"#f6f6f6",color:" #938eef"}}>Login</button>
    //       </Link>
    //         </span>
    //       </form>
    //     </div>
    //   </div>
    // </div>


    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">FaceBook</span>
      <span className="title">Register</span>
      <form>
        <input required type="text" placeholder="Username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button >Sign up</button>
      </form>
      <p>
        You do have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  </div>
  );
};

export default Register;
