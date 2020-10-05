import React from "react";
//components
import HeroProfile from '../components/HeroProfile'
import UserProfile from'../components/UserProfile'

//photo

import AdminProfile from "../components/AdminProfile";
import CompagnyProfile from "../components/CompagnyProfile";

const ProfilePage = () => {
  return (
    <div className="profilePage">
     
      
        <AdminProfile />
        <UserProfile />
        <CompagnyProfile />
      
    </div>
  );
};

export default ProfilePage;