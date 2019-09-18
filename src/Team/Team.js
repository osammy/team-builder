import React from 'react'
import { Table,Button } from 'semantic-ui-react'
import TeamMember from './TeamMember';
import Pagination from '../Pagination/Pagination';


const TeamList = ({listProperties,memberList,openFormModal,updateMember}) => (
  // <Table celled >
  <Table>
    <Table.Header>
      <Table.Row>
        {listProperties.map((heading)=>{
          return <Table.HeaderCell key={heading}>{heading}</Table.HeaderCell>
        })}
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        memberList.map((props,key)=> <TeamMember key={props.id} {...props} index={key + 1} updateMember={()=>updateMember(props)} />
      )}
      <Table.Row>
        <Table.Cell>
            {/*<Label ribbon>{index}</Label>*/}
        </Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Button onClick={openFormModal} color="grey" circular icon='plus' /></Table.Cell>
    </Table.Row>
    </Table.Body>

    <Pagination />
    {/*<div style={{float:"right", border:"1px solid red;"}}></div>*/}
  </Table>
)

export default TeamList