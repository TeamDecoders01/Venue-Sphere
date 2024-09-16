import { useState } from "react";
import "./UserProfile.css";
import Navbar from "../../components/Navbar/Navbar";

const UserProfile = () => {
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Doe");
  const [age, setAge] = useState("30");
  const [registerNumber, setRegisterNumber] = useState("123456");
  const [password, setPassword] = useState("password");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle save logic (e.g., API call)
    console.log({ firstName, lastName, age, registerNumber, password });
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <h2 className="profile-heading">Profile Information</h2>
          <form onSubmit={handleSaveClick} className="profile-form">
            <div className="coolinput">
              <label className="text" htmlFor="firstName">
                First Name:
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Jane"
                className="input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="coolinput">
              <label className="text" htmlFor="lastName">
                Last Name:
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Doe"
                className="input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="coolinput">
              <label className="text" htmlFor="age">
                Age:
              </label>
              <input
                id="age"
                type="text"
                placeholder="30"
                className="input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="coolinput">
              <label className="text" htmlFor="registerNumber">
                Register Number:
              </label>
              <input
                id="registerNumber"
                type="text"
                placeholder="123456"
                className="input"
                value={registerNumber}
                onChange={(e) => setRegisterNumber(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <div className="coolinput">
              <label className="text" htmlFor="password">
                Password:
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={!isEditing}
              />
            </div>
            <button
              type="button"
              className="edit-button"
              onClick={isEditing ? handleSaveClick : handleEditClick}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
