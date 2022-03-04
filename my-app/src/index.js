import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu } from 'semantic-ui-react';

//top menu
class TopMenu extends React.Component {
  render() {
    return (
        <Container style={{padding: 20}}>
          <Menu borderless className="topmenu">
            <Image size="small" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" />
            <Menu.Item position="right">Premium</Menu.Item>
            <Menu.Item>Support</Menu.Item>
            <Menu.Item>Download</Menu.Item>
            <Menu.Item>|</Menu.Item>
            <Menu.Item>Sign up</Menu.Item>
            <Menu.Item>Log in</Menu.Item>
          </Menu>
        </Container>
    );
  }
}

//middle menu
class MiddleMenu extends React.Component {
  render() {
    return (
        <Header as="h1">MiddleMenu</Header>
    );
  }
}

//footer
class FooterMenu extends React.Component {
  render() {
    return (
        <Header as="h1">FooterMenu</Header>
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
