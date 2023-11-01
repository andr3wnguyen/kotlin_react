/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { InView } from 'react-intersection-observer'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ changePage }) => (
  <Container text>
    <Header
      as='h1'
      content='meep'
      inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
    />
    <Header
      as='h2'
      content='Get something to do.'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
    <Button primary size='huge' onClick={()=> changePage('getEventsPage')}>
      Find Events
      <Icon name='right arrow' />
      </Button>
  <Button primary size='huge' onClick={()=> changePage('allEvents')}>
    All Events
    <Icon name='right arrow' />
  </Button>


  </Container>
)

HomepageHeading.propTypes = {
  changePage: PropTypes.func, // Define the prop type
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  toggleFixedMenu = (inView) => this.setState({ fixed: !inView })

  render() {
    const { children, changePage } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <InView onChange={this.toggleFixedMenu}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a' onClick={()=> changePage('getEventsPage')}>Find Events</Menu.Item>
                <Menu.Item as='a' onClick={()=> changePage('allEvents')}>All Events</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading changePage={changePage}/>
          </Segment>
        </InView>

        {children}
      </Media>
    )
  }
}


const HomepageLayout = ({changePage}) => (
  <div>

<DesktopContainer changePage={changePage}></DesktopContainer>
<HomepageHeading changePage={changePage} />

  </div>
)

export default HomepageLayout;