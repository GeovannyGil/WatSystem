import { FaSearch } from 'react-icons/fa'
import { GoThreeBars } from 'react-icons/go'
import perfil from '@/assets/img/perfil.jpg'

const Header = () => {
  return (
    <header className='Header'>
      <div className='Header__container'>
        <img src={perfil} alt='Photo User' className='Header__img' />
        <div className='Header__search'>
          <input type='search' placeholder='Search' className='Header__input' />
          <FaSearch className='Header__icon' />
        </div>
        <div className='Header__toggle'>
          <GoThreeBars className='Header__icon' />
        </div>
      </div>
    </header>
  )
}

export default Header
