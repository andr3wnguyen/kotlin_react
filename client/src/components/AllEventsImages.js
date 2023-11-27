import React from 'react';
import { Image, Reveal, Header } from 'semantic-ui-react';

const RevealExampleFade = (props) => (
  <a href="#" onClick={()=> props.changePage('eventInfo', props.id)}>
  <div style={{ width: '300px', height: '150px'}}>
    <Reveal animated='fade'>
      <Reveal.Content visible>
      <Image src={props.image}  style={{ width: '230px', height: '170px' }} />
      </Reveal.Content>
      <Reveal.Content hidden>
        <div style={{ width: '230px', height: '170px' }}>
          <Header>{props.location}</Header>
          <Header>{props.activity}</Header>
        </div>
      </Reveal.Content>
    </Reveal>
  </div>
  </a>
);

export default RevealExampleFade;

