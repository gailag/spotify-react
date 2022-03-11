import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Header, Image, List, Menu, Icon, Button } from 'semantic-ui-react';

//top menu
class TopMenu extends React.Component {
  render() {
    return (
        <Menu inverted borderless className="topmenu">
          <Container style={{padding: 20}}>
            <Image size={"small"} src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" />
            <Menu.Item position="right">Premium</Menu.Item>
            <Menu.Item>Support</Menu.Item>
            <Menu.Item>Download</Menu.Item>
            <Menu.Item>|</Menu.Item>
            <Menu.Item>Sign up</Menu.Item>
            <Menu.Item>Log in</Menu.Item>
          </Container>
        </Menu>
    );
  }
}

//middle menu
class MiddleMenu extends React.Component {
  render() {
    const textStyle = { color: 'white', fontWeight: 800, fontSize: '40px' };
    return (
        <div className="middlemenu-background">
          <div style={{ paddingTop: '300px' }} align="center">
            <Header as="h1" textAlign="center" style={textStyle}>Listening is everything</Header>
            <Header as="h3" textAlign="center" color='white'>Millions of songs and podcasts. No credit card needed.</Header>
            <Button className='ui circular button' size={"huge"}>GET SPOTIFY FREE</Button>
          </div>
        </div>
    );
  }
}

//footer
class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer background">

          <Container>
            <Grid columns={5}>

              <Grid.Column>
                <Image size="small" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"/>
              </Grid.Column>

              <Grid.Column>
                <h4>
                  <List.Item>COMPANY</List.Item>
                </h4>
                <List.Item>Jobs</List.Item>
                <List.Item>For the Record</List.Item>
              </Grid.Column>

              <Grid.Column>
                <h4>
                  <List.Item>COMMUNITIES</List.Item>
                </h4>
                <List.Item>For Artists</List.Item>
                <List.Item>Developers</List.Item>
                <List.Item>Advertising</List.Item>
                <List.Item>Investors</List.Item>
                <List.Item>Vendors</List.Item>
              </Grid.Column>

              <Grid.Column>
                <h4>
                  <List.Item>USEFUL LINKS</List.Item>
                </h4>
                <List.Item>Support</List.Item>
                <List.Item>Web Player</List.Item>
                <List.Item>Free Mobile App</List.Item>
              </Grid.Column>

              <Grid.Column>
               <Button className="ui circular icon button"><Icon name="instagram"/></Button>
               <Button className="ui circular icon button"><Icon name="twitter"/></Button>
               <Button className="ui circular icon button"><Icon name="facebook"/></Button>
              </Grid.Column>

            </Grid>
          </Container>

        </div>
    );
  }
}

class Spotify extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Spotify/>, document.getElementById('root'));
