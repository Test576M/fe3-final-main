import { useState } from "react";

//logica del formulario de contacto...  es puro usestate usage 
const Form = () => {
  const [state, setState] = useState({
    fullname: "",
    email: "",
  });

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Nos contactaremos contigo pronto via email");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="fullname"
            value={state.fullname}
            name="fullname"
            onChange={handleChange}
            required
          />
          <input
            placeholder="email"
            value={state.email}
            name="email"
            onChange={handleChange}
            required
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
