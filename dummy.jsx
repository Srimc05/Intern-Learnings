import React, { useState, useEffect } from "react";
import axios from "axios";

const Day1 = () => {
  const [postOffice, setPostoffice] = useState([]);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchpostofficedata = async () => {
      try {
        const res = await axios.get("https://api.postalpincode.in/postoffice/New%20Delhi");
        const data = res.data[0];
        setMessage(data.Message);
        setStatus(data.Status);

        if (data.Status === "Success") {
          setPostoffice(data.PostOffice);
        } else {
          console.log("No Data Available");
        }
      } catch (error) {
        console.error("The Error occurred:", error);
        alert("Failed to Fetch!");
      } finally {
        setLoading(false); // ✅ correct setter function
      }
    };
    fetchpostofficedata();
  }, []);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-center text-2xl font-bold p-5">Post Offices Content</h1>
      <p className="text-center font-bold py-2">{message}</p>
      <p className="text-center font-bold py-2">Fetch State : {status}</p>

      {loading ? (
        <p className="text-center text-blue-500 font-semibold">Loading... Wait man 😅</p>
      ) : (
        <table className="table-auto w-full border border-black">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2">Name</th>
              <th className="border border-black px-4 py-2">Description</th>
              <th className="border border-black px-4 py-2">BranchType</th>
              <th className="border border-black px-4 py-2">DeliveryStatus</th>
              <th className="border border-black px-4 py-2">Circle</th>
              <th className="border border-black px-4 py-2">District</th>
              <th className="border border-black px-4 py-2">Division</th>
              <th className="border border-black px-4 py-2">Region</th>
              <th className="border border-black px-4 py-2">State</th>
              <th className="border border-black px-4 py-2">Country</th>
              <th className="border border-black px-4 py-2">Pincode</th>
            </tr>
          </thead>
          <tbody>
            {postOffice.map((post, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2">{post.Name}</td>
                <td className="border border-black px-4 py-2">{post.Description}</td>
                <td className="border border-black px-4 py-2">{post.BranchType}</td>
                <td className="border border-black px-4 py-2">{post.DeliveryStatus}</td>
                <td className="border border-black px-4 py-2">{post.Circle}</td>
                <td className="border border-black px-4 py-2">{post.District}</td>
                <td className="border border-black px-4 py-2">{post.Division}</td>
                <td className="border border-black px-4 py-2">{post.Region}</td>
                <td className="border border-black px-4 py-2">{post.State}</td>
                <td className="border border-black px-4 py-2">{post.Country}</td>
                <td className="border border-black px-4 py-2">{post.Pincode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Day1;


/*
import React, { useState } from "react";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState([]); // Store submissions

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = {
      firstname,
      lastname,
      email,
      username,
      password,
    };

    setData((prev) => [...prev, newUser]);

    console.log("Form Submitted", newUser);

    // Reset form
    setFirstname("");
    setLastname("");
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-5 p-10 bg-gray-50 rounded shadow"
      >
        <h1 className="text-2xl font-bold">Welcome to Form</h1>
        <p className="text-gray-600">
          Login to this if you can because we don't have a login flow yet
        </p>

        <div className="flex gap-5">
          <div className="flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              placeholder="Tyler"
              className="border p-2 rounded"
              required
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              placeholder="Durden"
              className="border p-2 rounded"
              required
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
              value={username}
              placeholder="fightcluber12"
              className="border p-2 rounded"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="srimcatwork@gmail.com"
              className="border p-2 rounded"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="••••••••"
              className="border p-2 rounded"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              value={confirmPassword}
              placeholder="••••••••"
              className="border p-2 rounded"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Form
        </button>
      </form>

  
      {data.length > 0 && (
        <div className="mt-10 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Submitted Users</h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">First Name</th>
                <th className="border px-4 py-2">Last Name</th>
                <th className="border px-4 py-2">Username</th>
                <th className="border px-4 py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, idx) => (
                <tr key={idx}>
                  <td className="border px-4 py-2">{user.firstname}</td>
                  <td className="border px-4 py-2">{user.lastname}</td>
                  <td className="border px-4 py-2">{user.username}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Form;
*/
import React, { useState } from "react";

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
      // Add new user
      setdata((prev) => [...prev, newuser]);
    } else {
      // Update existing user
      const updated = [...data];
      updated[editIndex] = newuser;
      setdata(updated);
      setEditIndex(null);
    }

    // Clear form
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

export default Form;


<form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-5 p-10"
      >
        <h1 className="text-2xl font-bold text-white">Welcome to Form</h1>
        <p className="text-gray-300">
          Login to this if you can because we don't have a login flow yet
        </p>

        <div className="flex gap-5">
          <div className="flex flex-col">
            <label htmlFor="firstname" className="text-white">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Tyler"
              className="border p-2 rounded  border-white text-white"
              required
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname" className="text-white">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Durden"
              className="border p-2 rounded border-white text-white"
              required
              value={Lastname}
              onChange={(e) => setLastname(e.target.value)}
              
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-white">User Name</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="fightcluber12"
              className="border p-2 rounded  border-white text-white"
              required
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="srimcatwork@gmail.com"
              className="border p-2 rounded  border-white text-white"
              required
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col">
            <label htmlFor="password" className="text-white">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              className="border p-2 rounded  border-white text-white"
              value={password}
              required
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmpassword" className="text-white">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="••••••••"
              className="border p-2 rounded  border-white text-white"
              value={cpass}
              required
              onChange={(e) => setcpass(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-[#05dfec] text-[] px-6 py-2 rounded hover:bg-blue-700 transition"
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
                      className="border-2 mx-2 px-2 py-1 bg-white text-blue-600 hover:bg-blue-600 hover:text-white rounded transition"
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