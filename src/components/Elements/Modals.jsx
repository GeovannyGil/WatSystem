import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import { TitleHeader } from '@/components/Elements/Texts'
import styled from 'styled-components'

export const TitleModal = styled(TitleHeader)`
  color: var(--color-gray);
  font-size: 1.5em;

`

export function ModalHeader (props) {
  return (
    <Modal.Header closeButton>
      <TitleModal>{props.textNeutral}<span className='Focus__title'> {props.textColor}</span></TitleModal>
    </Modal.Header>
  )
}

export function ModalBody (props) {
  return (
    <Modal.Body>
      {props.children}
    </Modal.Body>
  )
}

export function ModalFooter (props) {
  return (
    <Modal.Footer>
      {props.children}
      <Button className='BtnSecondary' variant='outline-primary' onClick={props.onHide}>Cerrar</Button>
    </Modal.Footer>
  )
}

export function ModalVertically (props) {
  return (
    <Modal
      {...props}
      size={props.size || 'sm'}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      {props.children}
    </Modal>
  )
}
