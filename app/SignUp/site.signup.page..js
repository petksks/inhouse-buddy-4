import { supabase } from "../../lib/supabaseClient"
import styles from './Signup.module.css';

export default function Signup() {
  async function handleSignup(event) {
    event.preventDefault();

    // Here we get the additional field value
    const username = event.target.username.value;

    const { user, error } = await supabase.auth.signUp({
      email: event.target.email.value,
      password: event.target.password.value,
    });

    if (error) {
      alert(error.message);
    } else {
      // Here you might want to also add the username to your user database

      alert('Success! Check your email to confirm your account');
    }
  }

  return (
    <div className={styles.signupForm}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" placeholder="Username" required />
        
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" placeholder="Email address" required />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" placeholder="Password" required />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input id="confirm-password" type="password" placeholder="Confirm Password" required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
