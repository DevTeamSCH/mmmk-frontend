import React, { Component } from 'react';
import { Menu, Button, Container } from 'semantic-ui-react'

export class FixedMenu extends Component {
  state = { activeItem: 'home' }
  menu = [
    {text: 'Home', name: 'home', route: ''},
    {text: 'Rules', name: 'rules', route: ''},
    {text: 'FAQ', name: 'faq', route: ''},
  ]

  handleItemClick = (name) => this.setState({ activeItem: name })

  render_items() {
    const { activeItem } = this.state
    let items = this.menu.map(item => (
          <Menu.Item
            key={item.name}
            as='a'
            active={activeItem === item.name}
            onClick={ () => this.handleItemClick(item.name)}
          >
            { item.text }
          </Menu.Item>
        )
      );

    return items;
  }

  render() {
    return (
      <Menu fixed='top' size='large'>
        <Container>
          { this.render_items() }
          <Menu.Menu position='right'>
            <Menu.Item className='item'>
              <Button as='a'>Log in</Button>
            </Menu.Item>
            <Menu.Item>
              <Button as='a' primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}
