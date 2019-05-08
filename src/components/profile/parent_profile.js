import React, { Component } from 'react';
import ProfileMenu from './profile_menu';
import {ParentProfileContainer, GreetingTextContainer, ProfilePicture, ParkCardContainer, ParkCard} from './styled';

class ParentProfile extends Component {
	
	render() {
    return (
        <ParentProfileContainer>
          <ProfileMenu/>
            <GreetingTextContainer>Hello Test</GreetingTextContainer>
            <ProfilePicture src={null} alt="profile picture" />
            Where to Next?
            <ParkCardContainer>
                <ParkCard>Epcott</ParkCard>
                <ParkCard>Magic Kingdom Park</ParkCard>
                <ParkCard>Disney's Hollywood Studios</ParkCard>
                <ParkCard>Disney's Animal Kingdom</ParkCard>
            </ParkCardContainer>
        </ParentProfileContainer>
    );
  }
}

export default ParentProfile;