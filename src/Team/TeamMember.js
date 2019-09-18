import React from 'react'
import { Label, Table } from 'semantic-ui-react'

const TeamMember = ({ No, name, email, role, index }) => (
    <Table.Row>
        <Table.Cell>
            <Label ribbon>{index}</Label>
        </Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{email}</Table.Cell>
        <Table.Cell>{role}</Table.Cell>
    </Table.Row>
)

export default TeamMember