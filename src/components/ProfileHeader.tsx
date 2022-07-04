import React, { Component } from 'react'

export default class ProfileHeader extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            height: '30vh',
            width: '100%',
            maxWidth: '890px',
            backgroundColor: '#1f1e33',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <h1 style={{ color: 'white' }}>Profile Header Mock</h1>
        </div>
      </div>
    )
  }
}
