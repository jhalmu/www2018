import React, { Component } from 'react'
import {Image, Icon, Header } from 'semantic-ui-react';

class NotFound extends Component {
    render () {
        return (
            <div>
            <Header as='h2' icon textAlign='center'>
            <Icon name='warning circle blue' />
            <Header.Content>
              404
            </Header.Content>
            
            <Header.Subheader as='h3'>
            Sivua ei löytynyt. Mutta löytyi tälläinen kiva naama.<br />
            Page not found. Found only this pretty face.
          </Header.Subheader>
          </Header>
          <Image centered size='medium' src='../images/juha.jpg' alt='Me' title='Me, lunch break' circular />

  </div>
        )
    }
}

export default NotFound;