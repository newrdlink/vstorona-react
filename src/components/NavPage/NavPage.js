import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavPage.css'

import { getEvent } from '../../utils/currentEvent'
import { getNews } from '../../utils/currentNews'
import { getCollective } from '../../utils/currentCollective'
// import getTypeCollectiveFromTypeRus from '../../helpers/createPathForCollIcons'
const NavPage = ({ currentPath }) => {
  const [upDate, setUpDate] = useState(false)
  const arrStr = currentPath.split('/')

  const strReverseForEvent = (str) => str.split("").reverse().join("")
  const isEventPage = (str) => str.indexOf("/")

  const event = getEvent() || { title: "" }
  const news = getNews() || { title: "" }
  const collective = getCollective() || { name: "" }

  const newsTitle = () => news.title.length > 80 ? news.title.slice(0, 80) + "..." : news.title
  const eventTitle = () => event.title.length > 80 ? event.title.slice(0, 80) + "..." : event.title
  const collectiveTitle = () => collective?.name.length > 80 ? collective.name.slice(0, 80) + "..." : collective.name
  // console.log(getCollective())

  const isHallPage = currentPath.endsWith('showroom') ||
    currentPath.endsWith('big') ||
    currentPath.endsWith('foyer') ||
    currentPath.endsWith('choreography') ||
    currentPath.endsWith('costume') ||
    currentPath.endsWith('dance') ||
    (isEventPage(strReverseForEvent(currentPath)) === 24 && currentPath.includes("events"))


  useEffect(() => {
    // console.log(`/collectives/${collective._id}`)
    if (!collective._id) {
      setTimeout(() => setUpDate(true))
    }
  }, [collective._id])

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
      case 'big':
        let k = {}
        k.id = 11
        k.name = 'большой зал '
        k.path = '/services/rent/big'
        obj.push(k)
        break
      case 'foyer':
        let l = {}
        l.id = 12
        l.name = 'зал фойэ 1 этажа '
        l.path = '/services/rent/foyer'
        obj.push(l)
        break
      case 'showroom':
        let m = {}
        m.id = 13
        m.name = 'выставочный зал '
        m.path = '/services/rent/showroom'
        obj.push(m)
        break
      case 'choreography':
        let n = {}
        n.id = 14
        n.name = 'зал хореографии '
        n.path = '/services/rent/choreography'
        obj.push(n)
        break
      case 'costume':
        let o = {}
        o.id = 15
        o.name = 'зал 6 '
        o.path = '/services/rent/costume'
        obj.push(o)
        break
      case 'activity':
        let p = {}
        p.id = 16
        p.name = 'мероприятия '
        p.path = '/activity'
        obj.push(p)
        break
      case 'events':
        let q = {}
        q.id = 17
        q.name = 'афиша '
        q.path = '/activity/events'
        obj.push(q)
        break
      case 'add-event':
        let r = {}
        r.id = 18
        r.name = 'добавить событие '
        r.path = '/activity/add-event'
        obj.push(r)
        break
      case 'festivals':
        let s = {}
        s.id = 19
        s.name = 'конкурсы и фестивали '
        s.path = '/activity/festivals'
        obj.push(s)
        break
      case 'exhibitions':
        let t = {}
        t.id = 20
        t.name = 'выставки '
        t.path = '/activity/exhibitions'
        obj.push(t)
        break
      case 'news':
        let u = {}
        u.id = 21
        u.name = 'новости '
        u.path = '/news'
        obj.push(u)
        break
      case 'add-news':
        let v = {}
        v.id = 22
        v.name = 'добавить новость  '
        v.path = '/news/add-news'
        obj.push(v)
        break
      case 'collectives':
        let w = {}
        w.id = 23
        w.name = 'творческие коллективы  '
        w.path = '/collectives'
        obj.push(w)
        break
      case 'add-collective':
        let col = {}
        col.id = 24
        col.name = 'добавить коллектив  '
        col.path = '/collectives/add-collective'
        obj.push(col)
        break
      case 'edit-collective':
        let edit = {}
        edit.id = 25
        edit.name = 'редактировать коллектив  '
        edit.path = '/collectives/edit-collective'
        obj.push(edit)
        break
      case `${event._id}`:
        let dinamic = {}
        dinamic.id = 100
        dinamic.name = `${eventTitle()} `
        dinamic.path = `/activity/${event.type === "festival" ? "festivals/" : "events/"}${event._id}`
        obj.push(dinamic)
        break
      case `${news._id}`:
        let dinamicNews = {}
        dinamicNews.id = 200
        dinamicNews.name = `${newsTitle()} `
        dinamicNews.path = `/news/${news._id}`
        obj.push(dinamicNews)
        break
      case `${collective._id}`:
        let dinamicCollective = {}
        dinamicCollective.id = 300
        dinamicCollective.name = `${collectiveTitle()}`
        dinamicCollective.path = `/collectives/${collective._id}`
        obj.push(dinamicCollective)
        break
      default:
    }
    return obj
  }, [])

  return (
    <ul className={`nav-page ${isHallPage && "nav-page_place_hall"}`}>
      {
        obj.map((item) =>
          <li key={item.id} className={`nav-page__item ${isHallPage && "nav-page__item_place_hall"}`}>
            <NavLink
              exact
              to={item.path}
              className={`nav-page__link ${isHallPage && "nav-page__link_place_hall"}`}
              activeClassName={`nav-page__link_active ${isHallPage && "nav-page__link_active_place_hall"}`}>
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
