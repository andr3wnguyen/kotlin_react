import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const EventInfoCard = (props) => (
  <Card>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>{props.description}</Card.Meta>
      <Card.Description>
        {props.longdescription}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
)

export default EventInfoCard