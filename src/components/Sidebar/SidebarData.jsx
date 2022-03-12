// import * as AiIcons from 'react-icons/ai'
// import * as GoIcons from 'react-icons/go'
import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
  {
    tag: 'Application',
    navs: [
      {
        title: 'Tablero',
        path: '/dashboard',
        icon: <MdIcons.MdSpaceDashboard />
      },
      {
        title: 'Clientes',
        path: '/clients',
        icon: <FaIcons.FaUserAlt />
      },
      {
        title: 'Colaboradores',
        path: '/colaborators',
        icon: <FaIcons.FaUserFriends />
      },
      {
        title: 'Documentos',
        path: '#',
        icon: <IoIcons.IoIosDocument />,
        iconArrow: <RiIcons.RiArrowDownCircleFill className='Nav__dropdown-icon' />,
        subNav: [
          {
            title: 'Ordenes',
            path: '/documents/orders',
            icon: <RiIcons.RiArrowDropRightLine />
          },
          {
            title: 'Cotizaciones',
            path: '/documents/cotizations',
            icon: <RiIcons.RiArrowDropRightLine />
          },
          {
            title: 'Facturas',
            path: '/documents/invoice',
            icon: <RiIcons.RiArrowDropRightLine />
          },
          {
            title: 'Recibos de Caja',
            path: '/documents/registeReceipts',
            icon: <RiIcons.RiArrowDropRightLine />
          }
        ]
      }
    ]
  }
]
