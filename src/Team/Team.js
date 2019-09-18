import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import TeamMember from './TeamMember';
const TeamList = ({listProperties,memberList}) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        {listProperties.map((heading)=>{
          return <Table.HeaderCell key={heading}>{heading}</Table.HeaderCell>

        })}
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {memberList.map((prop)=>{
        return <TeamMember />
      })}
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default TeamList