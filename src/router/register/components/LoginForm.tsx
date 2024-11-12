import React, { useState } from "react";

export const LoginForm: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { phone, password });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="phone"
        placeholder="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="input"
      />
      <button type="submit" className="button">
        Login
      </button>
    </form>
  );
};
