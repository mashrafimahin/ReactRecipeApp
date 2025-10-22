import { useContext, useState } from "react";
import classes from "../../Style/Module/Signup.module.css";

// firebase
import { FirebaseContext } from "../../Context/FirebaseContext";

// router
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  // firebase
  const signUpMethod = useContext(FirebaseContext);
  const { signUp } = signUpMethod;

  // state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validation
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  };

  // alert box
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={classes.signupContainer}>
      <div className={classes.signupCard}>
        <h2 className={classes.signupTitle}>Create Account ✨</h2>
        <p className={classes.signupSubtitle}>
          Join our platform to get started!
        </p>

        <form onSubmit={handleSubmit}>
          <div className={classes.inputGroup}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

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
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className={classes.inputGroup}>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={classes.signupBtn}
            onClick={() =>
              signUp(
                handleClick,
                formData.fullName,
                formData.email,
                formData.password
              )
            }
          >
            Sign Up
          </button>

          <p className={classes.loginText}>
            Already have an account? <NavLink to="/login">Login</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
