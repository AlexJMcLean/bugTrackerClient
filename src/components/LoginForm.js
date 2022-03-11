import React from "react";
import styled from "styled-components";

const LoginFormStyles = styled.div``;

export default function LoginForm() {
  return (
    <form>
      <div className="input-container">
        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleStateChange}
          value={formState.email}
        />
      </div>
      <div className="input-container">
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleStateChange}
          value={formState.password}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Log in
      </button>
      <button type="submit" onClick={handleDemo}>
        Demo
      </button>
    </form>
  );
}
