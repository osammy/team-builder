import React from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import BgImg from '../Images/brushed-alum.png';


const ModalContainer = (props) => {
  const {dimmer, open, closeFormModal, size, modalHeader, contentHeader, closeOnDimmerClick} = props;
  
  return (
  
  <Modal 
    dimmer={dimmer ? dimmer:true} 
    open={open} 
    size={size ? size:"tiny"} 
    onClose={closeFormModal}
    closeOnDimmerClick={ closeOnDimmerClick ?  closeOnDimmerClick : true}
   //trigger={<Button>Show Modal</Button>}
    closeIcon
  >
    {/*<Modal.Header >
      <Button ><Icon name="close right" /></Button>
    </Modal.Header>*/}
    <Modal.Header>{modalHeader ? modalHeader : ""}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={BgImg} />
      <Modal.Description>
        <Header>{contentHeader ? contentHeader : ""}</Header>
        {props.children}
      </Modal.Description>
    </Modal.Content>
    {/*</div>*/}
  </Modal>
)}

export default ModalContainer
