import React, { useState } from 'react';
import Reactstrap from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import TeamMemberCard from './TeamMemberCard'

function App() {
  const [team, setTeam] = useState([{
    name: 'Ted Smith',
    email: 'tedsmith@fakemail.org',
    role: 'Fake-end Fakegineer'
  },
  {
    name: 'Rob Fulmer',
    email: 'robfulmer@fakemail.org',
    role: 'Fake-end Fakegineer'
  }])

  return (
    <div className="App">
      <div className="cardDiv">
      {team.map((element) => {
        return <TeamMemberCard teamMember={element} key={Math.random()}/>
      })}
      </div>
      
    </div>
  );
}

export default App;
