import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { TitleMain, TitleLine, SubTitles, TextDescription, SpanLabelLink, SpanSelect } from '@/components/Elements/Texts'
import { HeaderTitleSection } from '@/components/Elements/Layout'
import { CardContent, CardHeader, CardTitle, CardItem, CardDescription } from '@/components/Elements/Cards'
import { ButtonPrimary, ButtonSecondary } from '../../components/Elements/Buttons'
import * as BoxIcon from 'react-icons/bi'
import { CheckInput, InputElement, InputElementSelect, FormGroupAction } from '@/components/Elements/Inputs'
import { Tiptap } from '@/components/Elements/RichText'
import colaborator from '@/pages/api/colaborator'
import guatemala from '@/pages/api/guatemala'
import states from '@/pages/api/states'
import uniqueid from '@/services/generateId'
import { ModalVertically, ModalHeader, ModalBody, ModalFooter } from '@/components/Elements/Modals'
import { Container, Row, Col, Badge, Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'
import clsx from 'clsx'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  align-items: center;

  @media(min-width: 1280px) {
   grid-template-columns: 80% 20%;
  }

  @media(min-width: 820px) {
   grid-template-columns: 70% 30%;
  }
`
const SectionCreateOrder = styled.section`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr;

  @media(min-width: 1280px) {
    grid-template-columns: 45% 55%;
  }
`
const FormOrder = styled.div`
  /* outline: 2px solid orange ; */
`
const CardTitleSelect = styled(CardTitle)`
  color: var(--color-gray-light);
`

const SectionRichText = styled.div`
  /* outline: 2px solid orange ; */
  margin-bottom: 15px;
`

const SpanOrderId = styled(SpanLabelLink)`
  text-align: right;
`

const HeaderTitle = styled(HeaderTitleSection)`
  margin-bottom: 25px;
`

const ContentBtnActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`

const BtnAction = styled(ButtonPrimary, ButtonSecondary)`
    width: 100%;
  @media(min-width: 680px) {
    width: auto;
  }
`
const radios = [
  { name: 'Dirección del cliente', value: 'client' },
  { name: 'Otra dirección', value: 'other' }
]

const InfoClient = (props) => {
  return (
    <>
      <Col md={6}>
        <SubTitles>{props.label}</SubTitles>
      </Col>
      <Col md={6}>
        <Badge bg='secondary' className='badgeIC'>{props.value}</Badge>
      </Col>
    </>
  )
}

const CardItemClient = styled(CardItem)`
  background-color: #f5f5f5;
  line-height: 0.9;

  &.active {
    border: 2px solid var(--primary-color);
  }
  & label{
    font-weight: normal;
    color: var(--color-gray);
  }
  & span {
    font-weight: var(--font-semi-bold);
    color: var(--primary-color);
    font-size: var(--smaller-font-size);
  }
`

const InfoClientDirection = (props) => {
  return (
    <CardItemClient className={clsx(props.active && 'active')} onClick={() => props.onSelect('direction', props.id)}>
      <label>{props.directionClient}</label>
      <label>{props.departament} - {props.municipality}</label>
      {
        props.active && <span>*Seleccioando</span>
      }
    </CardItemClient>
  )
}

const InfoClientPhone = (props) => {
  return (
    <CardItemClient className={clsx(props.active && 'active')} onClick={() => props.onSelect('phone', props.id)}>
      <label>{props.phoneClient}</label>
      {
        props.active && <span>*Seleccioando</span>
      }
    </CardItemClient>
  )
}

const Orders = () => {
  const [modalCite, setModalCite] = useState(false)
  const [modalInfoClient, setModalInfoClient] = useState(false)
  const [radioValue, setRadioValue] = useState('client')
  const checkCite = useRef(null)
  const [order, setOrder] = useState({
    id: uniqueid(),
    code: 'O-7656',
    client: {
      id: '',
      phoneSelect: ''
    },
    dateOrder: '',
    colaborator: '',
    stateOrder: '',
    cite: {
      citeState: false,
      type: 'client',
      data: {}
    }
  })
  const [clientDirectionSelect, setClientDirectionSelect] = useState({
    id: '',
    dateCite: '',
    direction: '',
    departament: '',
    municipality: ''
  })

  const [clients, setClients] = useState([])
  const [clientSelected, setClientSelected] = useState({
    id: '',
    nit: '',
    code: '',
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

  const handleChange = ({ target: { name, value } }) =>
    setOrder({ ...order, [name]: value })

  const handleChangeClientSelect = ({ target: { value } }) => {
    setOrder(prevState => ({
      ...prevState,
      client: {
        id: value
      }
    }))
  }

  useEffect(() => {
    if (clients.length === 0) {
      const getClients = () => {
        let clientsL = JSON.parse(window.localStorage.getItem('clients'))
        clientsL = clientsL || []
        return clientsL
      }

      setClients(getClients())
    }

    const FindClient = clients.find(client => {
      return client.id === order.client.id
    })
    if (FindClient) {
      setClientSelected(FindClient)
      setOrder(prevState => ({
        ...prevState,
        client: {
          ...prevState.client,
          phoneSelect: clientSelected.phones.defaultPhone
        },
        cite: {
          citeState: false,
          type: 'client',
          data: {}
        }
      }))
      if (clientSelected.directions.defaultDirection) {
        setClientDirectionSelect({ ...clientDirectionSelect, id: clientSelected.directions.defaultDirection })
      }
    }
  }, [clientSelected, order.client.id])

  useEffect(() => {
    if (modalCite === false && order.cite.citeState === false) {
      console.log('No se agendo nada')
      checkCite.current.checked = false
    }
  }, [modalCite])

  const handleChangeDefaultClient = (key, id) => {
    // PART OF CITE
    if (key === 'direction') {
      setClientDirectionSelect({ ...clientDirectionSelect, id })
      return
    }

    setOrder(prevState => ({
      ...prevState,
      client: {
        ...prevState.client,
        phoneSelect: id
      }
    }))
  }

  const handleOtherDirection = ({ target: { name, value } }) =>
    setClientDirectionSelect({ ...clientDirectionSelect, [name]: value })

  const handleCheckCite = ({ target }) => {
    if (target.checked === true) {
      setModalCite(target.checked)
      return
    }

    if (target.checked === false && order.cite.citeState === true) {
      setOrder(prevState => ({
        ...prevState,
        cite: {
          ...prevState.cite,
          citeState: false
        }
      }))
    }
  }

  const handleAgendCite = () => {
    let objD = {}
    if (radioValue === 'other') {
      objD = {
        dateCite: clientDirectionSelect.dateCite,
        direction: clientDirectionSelect.direction,
        departament: clientDirectionSelect.departament,
        municipality: clientDirectionSelect.municipality
      }
    } else {
      objD = {
        id: clientDirectionSelect.id,
        dateCite: clientDirectionSelect.dateCite
      }
    }
    setOrder(prevState => ({
      ...prevState,
      cite: {
        ...prevState.cite,
        citeState: true,
        type: radioValue,
        data: objD
      }
    }))
  }

  return (
    <main>
      <HeaderTitle>
        <Grid>
          <TitleMain textNeutral='Crear' textColor=' Orden.' />
          <div>
            <InputElement label='No. de Orden:'>
              <input type='text' disabled value={order.code} />
              <SpanOrderId>Último ingresaso: <a>C-000122</a></SpanOrderId>
            </InputElement>
          </div>
        </Grid>
      </HeaderTitle>
      <SectionCreateOrder>
        <FormOrder>
          <FormGroupAction label='Cliente'>
            <select name='client' onChange={handleChangeClientSelect}>
              {
                clients.map(elem => (
                  <option key={elem.id} value={elem.id}>{elem.names} {elem.surnames}</option>
                ))
              }
            </select>
          </FormGroupAction>
          <CardContent>
            <CardHeader>
              <CardTitleSelect>Cliente Seleccionado</CardTitleSelect>
              <button className='Btn__icon' onClick={() => setModalInfoClient(true)}><BoxIcon.BiInfoCircle size='1.1em' /></button>
            </CardHeader>
            <div>
              <SpanSelect>{clientSelected.code}</SpanSelect>
              <SpanSelect>{clientSelected.names} {clientSelected.surnames}</SpanSelect>
            </div>
          </CardContent>
          <TitleLine>Generales</TitleLine>
          <InputElement label='Fecha de orden'>
            <input type='datetime-local' name='dateOrder' value={order.dateOrder} onChange={handleChange} />
          </InputElement>
          <InputElementSelect label='Colaborador'>
            <select name='colaborator' onChange={handleChange}>
              {
                colaborator.map(elem => (
                  <option key={elem.id} value={elem.id}>{elem.name}</option>
                ))
              }
            </select>
          </InputElementSelect>
          <InputElementSelect label='Estado de orden'>
            <select name='stateOrder' onChange={handleChange}>
              {
                states.map(elem => (
                  <option key={elem.id} value={elem.id}>{elem.state}</option>
                ))
              }
            </select>
          </InputElementSelect>
          <CheckInput text='Agendar Cita'>
            <input type='checkbox' onChange={handleCheckCite} ref={checkCite} />
          </CheckInput>
          {
            order.cite.citeState &&
              <CardDescription label='Datos de la cita'>
                {
                order.cite.type === 'client'
                  ? clientSelected.directions.listDirections.map((elem) => {
                      return order.cite.data?.id === elem.id &&
                        (
                          <>
                            <TextDescription>{elem.directionClient}</TextDescription>
                            <TextDescription>{elem.departament} - {elem.municipality}</TextDescription>
                            <TextDescription>{order.cite.data.dateCite}</TextDescription>
                          </>
                        )
                    })
                  : (
                    <>
                      <TextDescription>{order.cite.data.direction}</TextDescription>
                      <TextDescription>{order.cite.data.departament} - {order.cite.data.municipality}</TextDescription>
                      <TextDescription>{order.cite.data.dateCite}</TextDescription>
                    </>
                    )
                }
              </CardDescription>
          }
        </FormOrder>
        <SectionRichText>
          <Tiptap />
          <ContentBtnActions>
            <BtnAction><BoxIcon.BiDetail /> Generar Orden</BtnAction>
          </ContentBtnActions>
        </SectionRichText>
      </SectionCreateOrder>
      {/* MODAL EDIT PHONE */}
      <ModalVertically show={modalInfoClient} onHide={() => setModalInfoClient(false)} size='lg'>
        <ModalHeader textNeutral='Más' textColor='información' />
        <ModalBody>
          <Container>
            <Row>
              <InfoClient label='Código del cliente:' value={clientSelected.code} />
              <InfoClient label='Nombre del cliente' value={`${clientSelected.names} ${clientSelected.surnames}`} />
              <InfoClient label='NIT:' value={clientSelected.nit} />
              <InfoClient label='Empresa:' value={clientSelected.business} />
              <InfoClient label='Correo:' value={clientSelected.email} />
              <Col md={6} className='mt-3'>
                <SubTitles>Télefonos</SubTitles>
                {
                  clientSelected.phones.listPhones.length !== 0 && clientSelected.phones.listPhones.map(elem =>
                    <InfoClientPhone
                      key={elem.id}
                      {...elem}
                      active={elem.id === order.client.phoneSelect}
                      onSelect={handleChangeDefaultClient}
                    />
                  )
                }
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter onHide={() => setModalInfoClient(false)} />
      </ModalVertically>
      {/* MODAL EDIT PHONE */}
      <ModalVertically show={modalCite} onHide={() => setModalCite(false)} size='md'>
        <ModalHeader textNeutral='Agendar' textColor='Cita' />
        <ModalBody>
          <Container>
            <Row>
              <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type='radio'
                    variant='outline-primary'
                    name='radio'
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              <Col md={12}>
                <Form.Group className='my-3'>
                  <Form.Label className='LabelBForm'>Fecha de la cita:</Form.Label>
                  <Form.Control
                    type='datetime-local'
                    placeholder=''
                    name='dateCite'
                    onChange={handleOtherDirection}
                    value={order.cite.data?.dateCite}
                  />
                </Form.Group>
              </Col>
              {
                radioValue === 'client' &&
                  <>
                    <Col md={12} className='mt-3'>
                      <SubTitles>Direcciones del cliente</SubTitles>
                      {
                        clientSelected.directions.listDirections.length !== 0 && clientSelected.directions.listDirections.map(elem =>
                          <InfoClientDirection
                            key={elem.id}
                            {...elem}
                            active={elem.id === clientDirectionSelect?.id}
                            onSelect={handleChangeDefaultClient}
                          />
                        )
                      }
                    </Col>
                  </>
              }
              {
                radioValue === 'other' &&
                  <>
                    <Col md={12}>
                      <SubTitles>Otra dirección</SubTitles>
                      <Form.Group className='my-3'>
                        <Form.Control
                          type='text'
                          placeholder='Ingresar dirección'
                          name='direction'
                          onChange={handleOtherDirection}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className='LabelBForm'>Departamento</Form.Label>
                        <Form.Select aria-label='Default select example' name='departament' onChange={handleOtherDirection}>
                          <option>Selecciona</option>
                          {
                            Object.keys(guatemala).map((obj) => (
                              <option
                                value={obj}
                                key={obj}
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
                          disabled={clientDirectionSelect.departament === '' && 'disabled'}
                          name='municipality' onChange={handleOtherDirection}
                        >
                          <option>Selecciona un municipio</option>
                          {
                            clientDirectionSelect.departament !== '' &&
                            (
                              Object.entries(guatemala[clientDirectionSelect.departament]).map((obj) => (
                                <option
                                  value={obj[1]}
                                  key={obj[1]}
                                >
                                  {obj[1]}
                                </option>
                              ))
                            )
                          }
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </>
              }
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter onHide={() => setModalCite(false)}>
          <Button className='BtnPrimary' onClick={handleAgendCite}>Agenddar Cita</Button>
        </ModalFooter>
      </ModalVertically>
    </main>
  )
}

export default Orders
