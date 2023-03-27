import { useState } from "react";
export const Form = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState("");
  const [country, setCountry] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form Data Is ${username}`);
    alert(`Text Area Data Is ${data}`);
    alert(`Country Select Is: ${country}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <br />
        <label>Description:</label>
        <textarea
          value={data}
          onChange={(event) => setData(event.target.value)}
        ></textarea>
        <br />
        <br />
        <label>Countries Selector:</label>
        <select
          className="countries"
          id="countryOptions"
          onChange={(event) => setCountry(event.target.value)}
        >
          <option value="Japan">Japan</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="United States Of America">
            United States Of America
          </option>
        </select>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
