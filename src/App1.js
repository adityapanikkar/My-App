import React from 'react';
import ContactCard from './components/ContactCard';
import Todo from './components/Todo';
import Header from './components/Header'
import teamData from './components/TeamData';

function App() {
    const teamComponents = teamData.map(team =>{
      return(
        <Team key={team.id} name ={team.name} members ={team.members}/>
      )
    })

    return (
        <div className="name">
          <Header/>
          <Todo/>
          <Todo/>
          <Todo/>
          <Todo/>
        <ContactCard 
        contact={{name : "Adi", email : "aditya@tradewindow.io",address : "Suite 2, Ground Floor, 6-10 The Strand, Takapuna"}}
        />
        <ContactCard 
          contact={{name : "Chester", email : "chester@tradewindow.io",address : "Suite 2, Ground Floor, 6-10 The Strand, Takapuna"}}
        />
        <ContactCard 
          contact={{name : "Arjun", email : "arjun@tradewindow.io",address : "Suite 2, Ground Floor, 6-10 The Strand, Takapuna"}}
        />
        <ContactCard 
          contact={{name :"Omkar",name : "Omkar",address : "Suite 2, Ground Floor, 6-10 The Strand, Takapuna"}}
        />
            {teamComponents}
        </div>
      );
    }
    
    export default App;
    