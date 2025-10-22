import { useContext, useState } from "react";
import classes from "../../Style/Module/Login.module.css";

// firebase
import { FirebaseContext } from "../../Context/FirebaseContext";

// router
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  // firebase
  const signInMethod = useContext(FirebaseContext);
  const { signIn } = signInMethod;

  // form data
  const [formData, setFormData] = useState({ email: "", password: "" });

  // change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // prevent from submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // alert box
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginCard}>
        <h2 className={classes.loginTitle}>Welcome Back 👋</h2>
        <p className={classes.loginSubtitle}>Login to continue your journey</p>

        <form onSubmit={handleSubmit}>
          <div className={classes.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={classes.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={classes.loginBtn}
            onClick={() =>
              signIn(handleClick, formData.email, formData.password)
            }
          >
            Login
          </button>

          <p className={classes.signupText}>
            Don’t have an account? <NavLink to="/sign-up">Sign up</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
