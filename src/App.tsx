import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import PieChart from './components/PieChart';
import ProfileHeader from './components/ProfileHeader';
import Games from './components/Games'

function App() {
  return (
    <div style={{
      textAlign: "center",
      width: "100%",
      backgroundImage: `url("https://images.igdb.com/igdb/image/upload/t_1080p/ar5l1.jpg")`,
      minHeight: "100%",
      backgroundSize: "cover"
    }}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "stretch", gap: "30px"}} >
        <Header />
        <ProfileHeader />
        <PieChart />
        <Games />
      </div>
    </div>
  );
}

export default App;
