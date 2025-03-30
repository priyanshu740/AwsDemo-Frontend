import "./settings.css";
import { Context } from "../../context/context/context";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from 'axios'
import {  useContext, useState } from "react";

export default function Settings() {
  const[file,setFile] = useState(null)
  const[username,setUsername] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[success,setSuccess] = useState(false)
  const {user,dispatch} = useContext(Context)

  const PF = 'http://localhost:5000/images/' 

  const handleSubmit = async() => {
    const updatedData = {
      userId : user._id,
      username,
      email,
      password
    }
    // console.log(updatedData);
    if(file){
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name",filename)
      data.append("file",file)
      updatedData.profilePic = filename
      try {
        await axios.post('/upload',data)
      } catch (error) {
        console.log(error)
      }
    }
    try {
    await axios.put("/user/" + user._id , updatedData)
    setSuccess(true)
    } catch (error) {
      console.log(error);
      
    }
  }
    return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) :user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} onChange={e => setUsername((e).target.value)} name="name" />
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={e => setEmail((e).target.value)} name="email" />
          <label>Password</label>
          <input type="password" placeholder="*******" onChange={e => setPassword((e).target.value)} name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && <h1>data updated successfully</h1> 
        }
        </form>
      </div>
      <Sidebar />
    </div>
  );
} 