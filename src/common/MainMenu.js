import React, { Component } from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';

export class MainMenu extends Component {
  state = { activeItem: 'home' }
  menu = [
    {text: 'Home', name: 'home', route: ''},
    {text: 'Rules', name: 'rules', route: ''},
    {text: 'FAQ', name: 'faq', route: ''},
  ]

  handleItemClick = (name) => {
    this.setState({ activeItem: name });
  }

  render_items() {
    const { activeItem } = this.state
    let items = this.menu.map(item => (
          <Menu.Item key={item.name} as='a' active={activeItem === item.name} onClick={() => this.handleItemClick(item.name) } >
            { item.text }
          </Menu.Item>
        )
      );

    return items;
  }
  render() {
    return (
      <Container>
        <Menu inverted pointing secondary size='large'>
          { this.render_items() }
          <Menu.Item position='right'>
            <Button as='a' inverted>Log in</Button>
            <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
};
