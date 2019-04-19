import React, { Component } from 'react';
import styled from 'styled-components';


class ParentProfile extends Component {
	state={
		menu: false
	}

	menuManager = () => {
		this.setState(prevState => ({
			menu: !prevState.menu
		}));
	}
	
	render() {
    return (
        <ParentProfileContainer>
            <MenuStyle onClick={() => {this.menuManager()}}>Menu</MenuStyle>
						{this.state.menu ? (<ul>
							<li>All Requests</li>
							<li>Blog</li>
							<li>My Requests</li>
							<li>Map</li>
							<li>FAQ's</li>
							<li>Help</li>
							<li>Sign Out</li>
						</ul>) : ""}
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

const ParentProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuStyle = styled.div`
  
`;

const GreetingTextContainer = styled.div`
  
`;

const ProfilePicture = styled.img`
  
`;

const ParkCardContainer = styled.div`
  display: flex;

`;

const ParkCard = styled.div`
  width: 45%;
`;