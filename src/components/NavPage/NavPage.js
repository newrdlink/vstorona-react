import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavPage.css'
// import { aboutItems } from '../../config/aboutItems'

const NavPage = ({ currentPath }) => {

  const arrStr = currentPath.split('/')

  let obj = arrStr.reduce((obj, item) => {
    switch (item) {
      case '':
        let a = {}
        a.id = 1
        a.name = 'главная '
        a.path = '/'
        obj.push(a)
        break
      case 'about':
        let b = {}
        b.id = 2
        b.name = 'о нас '
        b.path = '/about'
        obj.push(b)
        break
      case 'collective':
        let c = {}
        c.id = 3
        c.name = 'коллектив'
        c.path = '/about/collective'
        obj.push(c)
        break
      case 'history':
        let d = {}
        d.id = 4
        d.name = 'история '
        d.path = '/about/history'
        obj.push(d)
        break
      case 'achievements':
        let e = {}
        e.id = 5
        e.name = 'достижения '
        e.path = '/about/achievements'
        obj.push(e)
        break
      case 'questionnaire':
        let f = {}
        f.id = 6
        f.name = 'анкета '
        f.path = '/about/questionnaire'
        obj.push(f)
        break
      case 'documents':
        let g = {}
        g.id = 7
        g.name = 'документы '
        g.path = '/about/documents'
        obj.push(g)
        break
      case 'services':
        let h = {}
        h.id = 8
        h.name = 'платные услуги '
        h.path = '/services'
        obj.push(h)
        break
      case 'rent':
        let i = {}
        i.id = 9
        i.name = 'аренда залов '
        i.path = '/services/rent'
        obj.push(i)
        break
      case 'dance':
        let j = {}
        j.id = 10
        j.name = 'танцевальные вечера '
        j.path = '/services/dance'
        obj.push(j)
        break
      default:
      // alert('fjhrioehgf')
    }
    return obj
  }, [])

  return (
    <ul className="nav-page">
      {
        obj.map((item) =>
          <li key={item.id} className="nav-page__item">
            <NavLink exact
              to={item.path}
              className="nav-page__link"
              activeClassName="nav-page__link_active">
              {
                item.name + (item.path === currentPath ? '' : '/')
              }
            </NavLink>
          </li>
        )
      }
    </ul>
  )
}

export default NavPage
