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
import { ModalVertically, ModalHeader, ModalBody, ModalFooter } from '@/components/Elements/Modals'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import uniqueid from '@/services/generateId'
import NumberFormat from 'react-number-format'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 10px;
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

const Clients = () => {
  const [modalDirectionShow, setModalDirectionShow] = useState(false)
  const [modalEditDirectionShow, setModalEditDirectionShow] = useState(false)
  const [modalPhoneShow, setModalPhoneShow] = useState(false)
  const [modalEditPhoneShow, setModalEditPhoneShow] = useState(false)
  const [client, setClient] = useState({
    id: uniqueid(),
    nit: '',
    code: 'C-000123',
    business: '',
    names: '',
    surnames: '',
    email: '',
    directions: {
      defaultDirection: '',
      listDirections: []
    },
    phones: {
      defaultPhone: '',
      listPhones: []
    }
  })
  const [directionClient, setDirection] = useState({
    id: uniqueid(),
    departament: '',
    municipality: '',
    directionClient: ''
  })
  const [editDirection, setEditDirection] = useState({
    id: '',
    departament: '',
    municipality: '',
    directionClient: ''
  })
  const [phoneClient, setPhone] = useState({
    id: uniqueid(),
    phoneClient: ''
  })
  const [editPhone, setEditPhone] = useState({
    id: '',
    phoneClient: ''
  })

  const handleChange = ({ target: { name, value } }) =>
    setClient({ ...client, [name]: value })

  const handleChangeSelectDirection = ({ target: { name, value } }) =>
    setDirection({ ...directionClient, [name]: value })

  const handlePushDirection = () => {
    setClient(prevState => ({
      ...prevState,
      directions: {
        defaultDirection: client.directions.listDirections.length === 0 ? directionClient.id : prevState.directions.defaultDirection,
        listDirections: [
          ...prevState.directions.listDirections,
          directionClient
        ]
      }
    }))
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
    setClient(prevState => ({
      ...prevState,
      phones: {
        defaultPhone: client.phones.listPhones.length === 0 ? phoneClient.id : prevState.phones.defaultPhone,
        listPhones: [
          ...prevState.phones.listPhones,
          phoneClient
        ]
      }
    }))
    setPhone({
      id: uniqueid(),
      phoneClient: ''
    })
    setModalPhoneShow(false)
  }

  const handlePin = (key, defaultKey, id) => {
    setClient(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        [defaultKey]: id
      }
    }))
  }

  const handleDelete = (key, listKey, defaultKey, id) => {
    const filter = client[key][listKey].filter(elem => {
      return elem.id !== id
    })

    const handleDefaultOption = () => {
      if (filter.length === 0) return ''
      if (client[key][listKey].length > 1 && client[key][defaultKey] === id) return filter[0].id
      return client[key][defaultKey]
    }

    setClient(prevState => ({
      ...prevState,
      [key]: {
        [defaultKey]: handleDefaultOption(),
        [listKey]: filter
      }
    }))
  }

  // EDIT PHONE
  const handleChangeEditPhone = ({ target: { name, value } }) => {
    setEditPhone({ ...editPhone, [name]: value })
  }

  const handleEdit = (key, item) => {
    if (key === 'phone') {
      setModalEditPhoneShow(true)
      setEditPhone(item)
      return
    }

    setModalEditDirectionShow(true)
    setEditDirection(item)
  }

  const handleModifyPhone = () => {
    const edit = client.phones.listPhones.map(elem => {
      if (elem.id === editPhone.id) {
        return {
          id: elem.id,
          phoneClient: editPhone.phoneClient
        }
      }
      return elem
    })
    setClient(prevState => ({
      ...prevState,
      phones: {
        ...prevState.phones,
        listPhones: edit
      }
    }))
    setEditPhone({
      id: '',
      phoneClient: ''
    })
    setModalEditPhoneShow(false)
  }

  // EDIT DIRECTION

  const handleChangeSelectEditDirection = ({ target: { name, value } }) =>
    setEditDirection({ ...editDirection, [name]: value })

  const handleModifyDirection = () => {
    const edit = client.directions.listDirections.map(elem => {
      if (elem.id === editDirection.id) {
        return {
          id: elem.id,
          departament: editDirection.departament,
          municipality: editDirection.municipality,
          directionClient: editDirection.directionClient
        }
      }
      return elem
    })
    setClient(prevState => ({
      ...prevState,
      directions: {
        ...prevState.directions,
        listDirections: edit
      }
    }))
    setEditDirection({
      id: '',
      departament: '',
      municipality: '',
      directionClient: ''
    })
    setModalEditDirectionShow(false)
  }

  // ADD CLIENT LOCALSTORAGE
  const SetLocalStorage = () => {
    let clientsL = JSON.parse(window.localStorage.getItem('clients'))
    clientsL = clientsL || []
    clientsL.push(client)
    console.log(clientsL)
    window.localStorage.setItem('clients', JSON.stringify(clientsL))
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
          <ButtonPrimary size='100%' onClick={SetLocalStorage}>Agregar Cliente</ButtonPrimary>
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
                  client.directions.listDirections.length === 0 ? <div className='cardsItemsNull'>Aún no haz agregado ningúna dirección</div> : ''
                }
                {
                  client.directions.listDirections !== '' && client.directions.listDirections.map(direction => (
                    <CardItemClientDirection
                      {...direction}
                      key={direction.id}
                      onPin={handlePin}
                      onDelete={handleDelete}
                      onEdit={handleEdit}
                      active={client.directions.defaultDirection === direction.id && true}
                    />
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
                  client.phones.listPhones.length === 0 && <div className='cardsItemsNull'>Aún no haz agregado ningún télefono</div>
                }
                {
                  client.phones.listPhones !== '' &&
                    client.phones.listPhones.map(phone => (
                      <CardItemClientPhone
                        {...phone}
                        key={phone.id}
                        onPin={handlePin}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                        active={client.phones.defaultPhone === phone.id && true}
                      />
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
                    disabled={directionClient.departament === '' && 'disabled'}
                    name='municipality' onChange={handleChangeSelectDirection}
                  >
                    <option>Selecciona un municipio</option>
                    {
                      directionClient.departament !== '' &&
                      (
                        Object.entries(guatemala[directionClient.departament]).map((obj) => (
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
                  <NumberFormat
                    customInput={Form.Control}
                    type='text' name='phoneClient'
                    onChange={handleChangePhone}
                    placeholder='Ingresa un télefono'
                    format='+(502) ####-####'
                    allowEmptyFormatting
                    mask='_'
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter onHide={() => setModalPhoneShow(false)}>
          <Button className='BtnPrimary' onClick={handlePushPhone}>Agregar Télefono</Button>
        </ModalFooter>
      </ModalVertically>
      {/* MODAL EDIT PHONE */}
      <ModalVertically show={modalEditPhoneShow} onHide={() => setModalEditPhoneShow(false)} size='md'>
        <ModalHeader textNeutral='Modificar' textColor='Télefono' />
        <ModalBody>
          <Container>
            <Row>
              <Col md={12}>
                <Form.Group className='mb-3'>
                  <NumberFormat
                    customInput={Form.Control}
                    type='text'
                    name='phoneClient'
                    onChange={handleChangeEditPhone}
                    placeholder='Ingresa un télefono'
                    format='+(502) ####-####'
                    allowEmptyFormatting
                    mask='_'
                    value={editPhone.phoneClient}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter onHide={() => setModalEditPhoneShow(false)}>
          <Button className='BtnPrimary' onClick={handleModifyPhone}>Modificar Télefono</Button>
        </ModalFooter>
      </ModalVertically>
      {/* MODAL EDIT DIRECTION */}
      <ModalVertically show={modalEditDirectionShow} onHide={() => setModalEditDirectionShow(false)} size='md'>
        <ModalHeader textNeutral='Modificar' textColor='dirección' />
        <ModalBody>
          <Container>
            <Row>
              <Col md={12}>
                <Form.Group className='mb-3'>
                  <Form.Control
                    type='text'
                    placeholder='Ingresar dirección'
                    name='directionClient'
                    onChange={handleChangeSelectEditDirection}
                    value={editDirection.directionClient}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className='LabelBForm'>Departamento</Form.Label>
                  <Form.Select aria-label='Default select example' name='departament' onChange={handleChangeSelectEditDirection}>
                    <option>Selecciona</option>
                    {
                      Object.keys(guatemala).map((obj) => (
                        <option
                          value={obj}
                          key={obj}
                          selected={editDirection.departament === obj}
                        >
                          {obj}
                        </option>
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
                    disabled={editDirection.departament === '' && 'disabled'}
                    name='municipality' onChange={handleChangeSelectEditDirection}
                  >
                    <option>Selecciona un municipio</option>
                    {
                      editDirection.departament !== '' &&
                      (
                        Object.entries(guatemala[editDirection.departament]).map((obj) => (
                          <option
                            value={obj[1]}
                            key={obj[1]}
                            selected={editDirection.municipality === obj[1]}
                          >
                            {obj[1]}
                          </option>
                        ))
                      )
                    }
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter onHide={() => setModalEditDirectionShow(false)}>
          <Button className='BtnPrimary' onClick={handleModifyDirection}>Modificar dirección</Button>
        </ModalFooter>
      </ModalVertically>
    </main>
  )
}

export default Clients
