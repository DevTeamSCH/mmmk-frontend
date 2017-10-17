import React, { Component } from 'react';
import { FixedMenu } from './common/FixedMenu';
import { MainMenu } from './common/MainMenu';
import { Footer } from './common/Footer';
import { Segment, Visibility, Container, Header, Button, Icon } from 'semantic-ui-react';
import './App.css';


export default class App extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
          offset={0}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <MainMenu />

            <Container text>
              <Header
                as='h1'
                content='MMMK'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='We are make music.'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size='huge'>
                Reservation
                <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>

        </Segment>

        <Footer />
      </div>
    )
  }
}
