import styled from 'styled-components'
import { TitleMain } from '@/components/Elements/Texts'
import { CardItemClientPhone, CardItemClientDirection } from '@/components/Elements/CardItemsClients'
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardBody,
  CardButtonAction
} from '@/components/Elements/Cards'
import {
  InputElement,
  FormGroupAction
} from '@/components/Elements/Inputs'
import { ButtonPrimary } from '@/components/Elements/Buttons'
import * as BoxIcon from 'react-icons/bi'
import { useState } from 'react'
import companies from '@/pages/api/companies'
import guatemala from '@/pages/api/guatemala'
import { ModalVertically, ModalHeader, ModalBody, ModalFooter } from '../components/Elements/Modals'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { v4 as uuid } from 'uuid'
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0 10px;
  align-items: center;
`

const SectionClient = styled.section`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr;

  @media(min-width: 1280px) {
    grid-template-columns: 30% 70%;

    & ${Grid}{
      grid-template-columns: 1fr 1fr;
    }
  }
`

const FormClient = styled.div`
  @media(min-width: 550px) {
    & ${Grid}{
      grid-template-columns: 1fr 1fr;
    }
  }
`

const SectionClientTable = styled.div`
  /* outline: 2px solid orange ; */
`

const uniqueid = () => {
  return uuid().slice(0, 12)
}

const Clients = () => {
  const [modalDirectionShow, setModalDirectionShow] = useState(false)
  const [modalPhoneShow, setModalPhoneShow] = useState(false)
  const [client, setClient] = useState({
    nit: '',
    code: 'C-000123',
    business: '',
    names: '',
    surnames: '',
    email: '',
    directions: [],
    phones: []
  })
  const [direction, setDirection] = useState({
    id: uniqueid(),
    departament: '',
    municipality: '',
    directionClient: ''
  })
  const [phoneClient, setPhone] = useState({
    id: uniqueid(),
    phoneClient: ''
  })
  // console.log(uuid().slice(0, 12))

  const handleChange = ({ target: { name, value } }) =>
    setClient({ ...client, [name]: value })

  const handleChangeSelectDirection = ({ target: { name, value } }) =>
    setDirection({ ...direction, [name]: value })
  const handlePushDirection = () => {
    setClient({ ...client, directions: [...client.directions, direction] })
    console.log('Add direction')
    setDirection({
      id: uniqueid(),
      departament: '',
      municipality: '',
      directionClient: ''
    })
    setModalDirectionShow(false)
  }
  const handleChangePhone = ({ target: { name, value } }) => {
    setPhone({ ...phoneClient, [name]: value })
  }
  const handlePushPhone = () => {
    setClient({ ...client, phones: [...client.phones, phoneClient] })
    console.log('Add Phone')
    setPhone({
      id: uniqueid(),
      phoneClient: ''
    })
    setModalPhoneShow(false)
  }

  return (
    <main>
      <header className='Header__main-content'>
        <TitleMain textNeutral='Clien' textColor='tes.' />
      </header>
      <SectionClient>
        <FormClient>
          <Grid>
            <InputElement label='NIT'>
              <input type='text' name='nit' onChange={handleChange} value={client.nit} />
            </InputElement>
            <InputElement label='Código'>
              <input type='text' disabled name='code' onChange={handleChange} value={client.code} />
            </InputElement>
          </Grid>
          <FormGroupAction label='Empresa'>
            <select name='business' onChange={handleChange}>
              {
                companies.map(company => (
                  <option key={company.id} value={company.id}>{company.company}</option>
                ))
              }
            </select>
          </FormGroupAction>
          <InputElement label='Nombres'>
            <input type='text' name='names' onChange={handleChange} value={client.names} />
          </InputElement>
          <InputElement label='Apellidos'>
            <input type='text' name='surnames' onChange={handleChange} value={client.surnames} />
          </InputElement>
          <InputElement label='Correo Electrónico'>
            <input type='text' name='email' onChange={handleChange} value={client.email} />
          </InputElement>
          <ButtonPrimary size='100%'>Agregar Cliente</ButtonPrimary>
        </FormClient>
        <SectionClientTable>
          <Grid>
            <CardContent>
              <CardHeader>
                <CardTitle>Direcciones</CardTitle>
                <CardButtonAction onClick={() => setModalDirectionShow(true)}><BoxIcon.BiPlus /> Agregar</CardButtonAction>
              </CardHeader>
              <CardBody>
                {
                  client.directions !== '' && client.directions.map(direction => (
                    <CardItemClientDirection {...direction} key={direction.id} />
                  ))
                }
              </CardBody>
            </CardContent>
            <CardContent>
              <CardHeader>
                <CardTitle>Télefonos</CardTitle>
                <CardButtonAction onClick={() => setModalPhoneShow(true)}><BoxIcon.BiPlus /> Agregar</CardButtonAction>
              </CardHeader>
              <CardBody>
                {
                  client.phones !== '' && client.phones.map(phone => (
                    <CardItemClientPhone {...phone} key={phone.id} />
                  ))
                }
              </CardBody>
            </CardContent>
          </Grid>
        </SectionClientTable>
      </SectionClient>
      {/* MODAL DIRECTION */}
      <ModalVertically show={modalDirectionShow} onHide={() => setModalDirectionShow(false)} size='md'>
        <ModalHeader textNeutral='Agregar' textColor='dirección' />
        <ModalBody>
          <Container>
            <Row>
              <Col md={12}>
                <Form.Group className='mb-3'>
                  <Form.Control type='text' placeholder='Ingresar dirección' name='directionClient' onChange={handleChangeSelectDirection} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className='LabelBForm'>Departamento</Form.Label>
                  <Form.Select aria-label='Default select example' name='departament' onChange={handleChangeSelectDirection}>
                    <option>Selecciona</option>
                    {
                      Object.keys(guatemala).map((obj) => (
                        <option value={obj} key={obj}>{obj}</option>
                      ))
                    }
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className='LabelBForm'>Municipio</Form.Label>
                  <Form.Select
                    aria-label='Default select example'
                    disabled={direction.departament === '' && 'disabled'}
                    name='municipality' onChange={handleChangeSelectDirection}
                  >
                    <option>Selecciona un municipio</option>
                    {
                      direction.departament !== '' &&
                      (
                        Object.entries(guatemala[direction.departament]).map((obj) => (
                          <option value={obj[1]} key={obj[1]}>{obj[1]}</option>
                        ))
                      )
                    }
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter onHide={() => setModalDirectionShow(false)}>
          <Button className='BtnPrimary' onClick={handlePushDirection}>Agregar dirección</Button>
        </ModalFooter>
      </ModalVertically>
      {/* MODAL PHONE */}
      <ModalVertically show={modalPhoneShow} onHide={() => setModalPhoneShow(false)} size='md'>
        <ModalHeader textNeutral='Agregar' textColor='Télefono' />
        <ModalBody>
          <Container>
            <Row>
              <Col md={12}>
                <Form.Group className='mb-3'>
                  <Form.Control type='text' name='phoneClient' onChange={handleChangePhone} placeholder='Ingresar dirección' />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter onHide={() => setModalPhoneShow(false)}>
          <Button className='BtnPrimary' onClick={handlePushPhone}>Agregar Télefono</Button>
        </ModalFooter>
      </ModalVertically>
    </main>
  )
}

export default Clients
