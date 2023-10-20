import React from 'react'
import { Item,Button } from 'semantic-ui-react'

const ItemExampleHeaders = (props) => (
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src={props.image} />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='a'>{props.title}</Item.Header>
        <Item.Description>{props.description}</Item.Description>
        <Item.Extra>
          <Button floated='right'>More info</Button>
        </Item.Extra>
      </Item.Content>
    </Item>

  </Item.Group>
)

export default ItemExampleHeaders

//https://react.semantic-ui.com/views/item/#variations-floated
//https://react.semantic-ui.com/views/item/#content-headers