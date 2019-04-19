import React, { Component } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
export default class Requests extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requests: [{profileId: 5, time: 1215, place: "Space Mountain", children: "3"},
                {profileId: 3, time: 1330, place: "Rock 'n' Roller Coaster", children: "2"}]
    };
  }

  render() {

    return (
      <RequestsWrapper>
        <div>Requests</div>
        <ProfilePicture src={null} alt="profile picture" />
        {this.state.requests.map(({profileId, time, place, children}) => <ul><li>Profile ID: {profileId}</li> <li>Time: {time}</li> <li>Place: {place}</li> <li>Children: {children}</li></ul> )}
      </RequestsWrapper>
    );
  }
}

const ProfilePicture = styled.img`
  
`;

const RequestsWrapper = styled.div`
  
`;

