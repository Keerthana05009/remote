// RemoteStudyGroup.js
import React, { useState } from 'react';


const App = () => {
  const [members, setMembers] = useState(['Alice', 'Bob', 'Charlie']);
  const [newMember, setNewMember] = useState('');

  const handleAddMember = () => {
    if (newMember.trim() !== '') {
      setMembers([...members, newMember.trim()]);
      setNewMember('');
    }
  };

  const handleRemoveMember = (memberToRemove) => {
    setMembers(members.filter(member => member !== memberToRemove));
  };

  
  return (
    <div className="remote-study-group">
      <header className="header">
        <h1>Remote Study Group</h1>
      </header>
      <main className="main-content">
        <section className="members-list">
          <h2>Members</h2>
          <ul>
            {members.map((member, index) => (
              <li key={index} className="member-item">
                {member}
                <button onClick={() => handleRemoveMember(member)} className="remove-button">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </section>
        <section className="add-member">
          <input
            type="text"
            value={newMember}
            onChange={(e) => setNewMember(e.target.value)}
            placeholder="Add new member"
          />
          <button onClick={handleAddMember} className="add-button">
            Add Member
          </button>
        </section>
      </main>
    </div>
  );
};

export default App;
