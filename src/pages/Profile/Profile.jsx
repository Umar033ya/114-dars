import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <div className="profile">
      <div className="profile-card">
        <img 
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" 
          alt="User" 
        />
        <h2>John Doe</h2>
        <p className="email">johndoe@example.com</p>

        <div className="info">
          <p><span>Country:</span> Uzbekistan</p>
          <p><span>Member Since:</span> 2024</p>
          <p><span>Status:</span> Premium User</p>
        </div>

        <button>Edit Profile</button>
      </div>
    </div>
  )
}

export default Profile;