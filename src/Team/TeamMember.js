import React from 'react'
import { Label, Table } from 'semantic-ui-react'

const TeamMember = ({ name, email, role }) => (
    <Table.Row>
        <Table.Cell>
            <Label ribbon>{name}</Label>
        </Table.Cell>
        <Table.Cell>{email}</Table.Cell>
        <Table.Cell>{role}</Table.Cell>
    </Table.Row>
)

export default TeamMember