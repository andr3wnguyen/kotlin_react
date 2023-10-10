import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

function CheckboxExampleRadioGroup(props) {

  const [selectedValue, setValue] = React.useState()

  return (
    <Form>
        You prefer: <b>{selectedValue}</b>
      <Form.Field>
        <Checkbox
          radio
          label={props.label1}
          name={props.name}
          value={props.value1 === props.name}
          checked={selectedValue === props.value1}
          onChange={(e, data) => setValue(data.label)}

        />
        <br></br>
        <Checkbox
          radio
          label={props.label2}
          name={props.name}
          value={props.value2 === props.name} //had to convert prop to a bool meep meep
          checked={selectedValue === props.value2}
          onChange={(e, data) => setValue(data.label)}
        />
      </Form.Field>
      <br></br>
    </Form>

  );
}

export default CheckboxExampleRadioGroup