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
            width: '100%',
            maxWidth: '1600px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px'
          }}
        >
          <div
            style={{
              flex: 1,
              height: '30vh',
              backgroundColor: '#1f1e33',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <h1 style={{ color: 'white' }}>Want to play</h1>
          </div>
          <div
            style={{
              flex: 1,
              height: '30vh',
              backgroundColor: '#1f1e33',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <h1 style={{ color: 'white' }}>Playing</h1>
          </div>
          <div
            style={{
              flex: 1,
              height: '30vh',
              backgroundColor: '#1f1e33',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <h1 style={{ color: 'white' }}>Played</h1>
          </div>
        </div>
      </div>
    )
  }
}
