import { useState } from "react";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={userInfo.age}
            onChange={handleChange}
          />
        </label>
      </div>

      <h3>Profile Information</h3>
      <p>Name: {userInfo.name}</p>
      <p>Age: {userInfo.age}</p>
    </div>
  );
};

export default Profile;
