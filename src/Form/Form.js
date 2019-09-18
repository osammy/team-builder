import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const TeamForm = () => (
  <Form>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input type="email" placeholder=' Email' />
    </Form.Field>
    <Form.Field>
      <label>Role</label>
      <input type="text" placeholder='Role' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default TeamForm