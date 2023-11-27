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

//this page should be just pictures that you canc lick on to redirect. hover effect gives more info/name

const placeholderImage = 'https://placekitten.com/200/200'; // Example placeholder image
const aspectRatio = '1/1'; // Set the desired aspect ratio (width/height)


const EventCard = (props) => (
  <Card style={{ width: '400px', height: '400px', overflow: 'hidden' }}>
    <div
      style={{
        width: '50%',
        height: 0,
        paddingBottom: `calc(${aspectRatio} * 50%)`,
        position: 'relative',
      }}
    >
      <Image
        style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '50%', objectFit: 'cover' }}
        src={props.image || placeholderImage}
        wrapped
        ui={false}
      />
    </div>



    {/* <Card.Content>
      <Card.Header as='a' onClick={()=> props.changePage('eventInfo', props.id)}>{props.activity} {props.location}</Card.Header>
      {/* <Card.Meta>Joined in 2016</Card.Meta> */}
      {/* <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>  */}
  </Card>
)


export default EventCard;
