import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';

//top menu
class TopMenu extends React.Component {
  render() {
    return (
        <Header as="h1">TopMenu</Header>
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
