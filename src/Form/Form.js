import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const TeamForm = ({ memberDetail, onFieldChange, onFormSubmit }) => (
    <Form onSubmit={onFormSubmit}>
        <Form.Field>
            <label>Name</label>
            <input
                name="name"
                required
                onChange={onFieldChange}
                value={memberDetail.name}
            />
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input
                name="email"
                required
                onChange={onFieldChange}
                value={memberDetail.email}
                type="email"
            />
        </Form.Field>
        <Form.Field>
            <label>Role</label>
            <input
                name="role"
                required
                onChange={onFieldChange}
                value={memberDetail.role}
                placeholder='Role'
            />
        </Form.Field>
        {/*<Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>*/}
        <Button type='submit'>Submit</Button>
    </Form>
)

export default TeamForm