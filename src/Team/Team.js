import React from 'react'
import { Table } from 'semantic-ui-react'
import TeamMember from './TeamMember';
import Pagination from '../Pagination/Pagination';


const TeamList = ({listProperties,memberList}) => (
  <Table celled >
    <Table.Header>
      <Table.Row>
        {listProperties.map((heading)=>{
          return <Table.HeaderCell key={heading}>{heading}</Table.HeaderCell>

        })}
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {memberList.map((props,key)=>{
        return <TeamMember key={props.id} {...props} index={key + 1} />
      })}
    </Table.Body>

    <Pagination />
  </Table>
)

export default TeamList