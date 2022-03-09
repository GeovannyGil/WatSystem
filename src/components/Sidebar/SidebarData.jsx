import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as GoIcons from 'react-icons/go'
import * as MdIcons from 'react-icons/md'

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <MdIcons.MdSpaceDashboard />
  },
  {
    title: 'Clients',
    path: '/clients',
    icon: <FaIcons.FaUserAlt />
  },
  {
    title: 'Colaborators',
    path: '/colaborators',
    icon: <FaIcons.FaUserFriends />
  },
  {
    title: 'Documents',
    path: '#',
    icon: <IoIcons.IoIosDocument />,
    iconClosed: <RiIcons.RiArrowDownCircleFill />,
    iconOpen: <RiIcons.RiArrowUpCircleFill />,
    subNav: [
      {
        title: 'Orders',
        path: '/documents/orders',
        icon: <GoIcons.GoArrowSmallRight />
      }
    ]
  }
]
