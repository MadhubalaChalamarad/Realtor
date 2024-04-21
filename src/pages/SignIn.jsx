import { React, useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function onChange(e) {}
  return;
  <div>
    <form>
      <input
        className="w-full"
        type="email"
        id="email"
        value={email}
        onChange
      />
    </form>
  </div>;
};

export default SignIn;
