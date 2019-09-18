import React from 'react'
import { Label, Table, Button, Icon } from 'semantic-ui-react'

const TeamMember = ({ No, name, email, role, index, updateMember }) => (
    <Table.Row>
        <Table.Cell>
            <Label ribbon>{index}</Label>
        </Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{email}</Table.Cell>
        <Table.Cell>{role}</Table.Cell>
        <Table.Cell onClick={updateMember}>
            <Button icon>
                <Icon name='edit' />
            </Button>
        </Table.Cell>
    </Table.Row>
)

export default TeamMember