import React, { useState } from "react";
//import LampBackground from "./ui/Background";

const Form = () => {
  const [firstname, setfirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [cpass, setcpass] = useState("");
  const [data, setdata] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // null = add mode

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== cpass) {
      alert("Password doesn't match");
      return;
    }

    const newuser = {
      firstname,
      Lastname,
      email,
      username,
      password,
    };

    if (editIndex === null) {
      
      setdata((prev) => [...prev, newuser]);
    } else {

      const updated = [...data];
      updated[editIndex] = newuser;
      setdata(updated);
      setEditIndex(null);

    }

    
    setfirstname("");
    setLastname("");
    setemail("");
    setusername("");
    setpassword("");
    setcpass("");

  };

  const handleEdit = (index) => {
    const user = data[index];
    setfirstname(user.firstname);
    setLastname(user.Lastname);
    setemail(user.email);
    setusername(user.username);
    setpassword(user.password);
    setcpass(user.password);
    setEditIndex(index);
  };

  const handleCancel = () => {
    setEditIndex(null);
    setfirstname("");
    setLastname("");
    setemail("");
    setusername("");
    setpassword("");
    setcpass("");
  };

  return (
    <>
    {/*<div className="relative min-h-screen overflow-hidden">

<LampBackground/>
      <div className="absolute inset-0 z-50">*/}
 
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-5 p-10"
      >
        <h1 className="text-2xl font-bold">Welcome to Form</h1>
        <p className="text-gray-600">
          {editIndex === null
            ? "Add a new user below"
            : `Editing user at row #${editIndex + 1}`}
        </p>

        <div className="flex gap-5">
          <div className="flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Tyler"
              className="border p-2 rounded"
              required
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Durden"
              className="border p-2 rounded"
              required
              value={Lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="fightcluber12"
              className="border p-2 rounded"
              required
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="srimcatwork@gmail.com"
              className="border p-2 rounded"
              required
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              className="border p-2 rounded"
              value={password}
              required
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="••••••••"
              className="border p-2 rounded"
              value={cpass}
              required
              onChange={(e) => setcpass(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            {editIndex === null ? "Submit Form" : "Update User"}
          </button>
          {editIndex !== null && (
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {data.length > 0 && (
        <div className="mt-10 max-w-4xl mx-auto">
          <h1 className="text-xl font-bold mb-4 text-center">
            The Submitted Users
          </h1>
          <table className="table-auto w-full border border-black">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">First Name</th>
                <th className="border px-4 py-2">Last Name</th>
                <th className="border px-4 py-2">User Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{value.firstname}</td>
                  <td className="border px-4 py-2">{value.Lastname}</td>
                  <td className="border px-4 py-2">{value.username}</td>
                  <td className="border px-4 py-2">{value.email}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="border mx-2 px-2 py-1 bg-yellow-200 hover:bg-yellow-300 rounded"
                      onClick={() => handleEdit(index)}
                    >
                      Edit me
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};




     {/*</> </div>
    </div>*/}
     
   

export default Form;