import React from 'react'
import { Card, Image } from 'semantic-ui-react'

// const EventCard = (props) => (
//   <Card>
//     <Card.Content>
//       <Card.Header content={props.title} />
//       <Card.Description content={props.description} />
//       <Card.Header src={props.image} />
//     </Card.Content>
//   </Card>
// )

const EventCard = (props) => (
  <Card>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header as='a' onClick={()=> props.changePage('eventInfo', props.id)}>{props.title}</Card.Header>
      {/* <Card.Meta>Joined in 2016</Card.Meta> */}
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
  </Card>
)


export default EventCard;
