import React from "react";
import styles from "./SignIn.module.scss";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
  return (
    <div
      className={styles.SignIn}
    >
      <h2>Sign In</h2>
      <form>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <input
          type="submit"
          className={styles.button}
        />
      </form>
      <p className={styles.underFormText}>
        Don&apos;t have an account?&nbsp;&nbsp;
        <Link
          to="./signUp"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
