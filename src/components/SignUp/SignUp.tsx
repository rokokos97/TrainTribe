import React from "react";
import styles from "./SignUp.module.scss";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  return (
    <div
      className={styles.SignUp}
    >
      <h2>Sign Up</h2>
      <form>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <label>
          Confirm Password
          <input type="password" />
        </label>
        <input
          type="submit"
          className={styles.button}
        />
      </form>
      <p className={styles.underFormText}>
        Already have an account?&nbsp;&nbsp;
        <Link
          to="/signIn"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
