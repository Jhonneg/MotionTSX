import { FormEvent, useState } from "react";
import { useAuthSession } from "./AuthSessionContext";
import { Navigate } from "react-router-dom";
import styles from "../utils.module.css";
import { supabase } from "../supabaseClient";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const { session } = useAuthSession();

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert("Check your email for login link!");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  if (session) {
    return <Navigate to="/" />;
  }
  return (
    <div className={styles.centeredFlex}>
      <div>
        <h1>Motion Notes App</h1>
        <p>Sign in via magic link with your email below</p>
        {loading ? (
          "Sending Magic Link"
        ) : (
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
            />
            <button> Send magic link</button>
          </form>
        )}
      </div>
    </div>
  );
}
