import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavPage.css'

import { getEvent } from '../../utils/currentEvent'
import { getNews } from '../../utils/currentNews'
import { getCollective } from '../../utils/currentCollective'
import { getAlbum } from '../../utils/currentAlbum'
// import getTypeCollectiveFromTypeRus from '../../helpers/createPathForCollIcons'
const NavPage = ({ currentPath }) => {
  const [upDate, setUpDate] = useState(false)
  const arrStr = currentPath.split('/')

  const strReverseForEvent = (str) => str.split("").reverse().join("")
  const isEventPage = (str) => str.indexOf("/")

  const event = getEvent() || { title: "" }
  const news = getNews() || { title: "" }

  const collective = getCollective() || { name: "" }
  const album = getAlbum() || { title: "" }

  const newsTitle = () => news.title.length > 80 ? news.title.slice(0, 80) + "..." : news.title
  const eventTitle = () => event.title.length > 80 ? event.title.slice(0, 80) + "..." : event.title
  const collectiveTitle = () => collective?.name.length > 80 ? collective.name.slice(0, 80) + "..." : collective.name
  const albumTitle = () => album?.title.length > 80 ? album.title.slice(0, 80) + "..." : album.title
  // console.log(getCollective())
  const isMobileDevice = window.screen.availWidth <= 450

  const isHallPage = currentPath.endsWith('showroom') ||
    currentPath.endsWith('big') ||
    currentPath.endsWith('foyer') ||
    currentPath.endsWith('choreography') ||
    currentPath.endsWith('costume') ||
    currentPath.endsWith('dance') ||
    ((isEventPage(strReverseForEvent(currentPath)) === 24 && !isMobileDevice) && currentPath.includes("events"))

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
        l.name = 'фойе 1 этажа '
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
      case 'edit-event':
        let editEvent = {}
        editEvent.id = 234
        editEvent.name = 'редактировать событие '
        editEvent.path = '/activity/edit-event'
        obj.push(editEvent)
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
      case 'edit-news':
        let vq = {}
        vq.id = 202
        vq.name = 'редактировать новость  '
        vq.path = '/news/edit-news'
        obj.push(vq)
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
      case 'anti-corruption':
        let anti = {}
        anti.id = 26
        anti.name = 'противодействие коррупции  '
        anti.path = '/anti-corruption'
        obj.push(anti)
        break
      case 'add-anticorrdoc':
        let addanti = {}
        addanti.id = 27
        addanti.name = 'добавить новый документ  '
        addanti.path = '/anti-corruption/add-anticorrdoc'
        obj.push(addanti)
        break
      case 'measures':
        let me = {}
        me.id = 28
        me.name = 'меры юридической ответственности  '
        me.path = '/anti-corruption/measures'
        obj.push(me)
        break
      case 'contacts':
        let cont = {}
        cont.id = 28
        cont.name = 'контакты  '
        cont.path = '/contacts'
        obj.push(cont)
        break
      case 'accessible':
        let acc = {}
        acc.id = 29
        acc.name = 'доступная среда  '
        acc.path = '/accessible'
        obj.push(acc)
        break
      case 'policy':
        let po = {}
        po.id = 30
        po.name = 'политика конфиденциальности  '
        po.path = '/policy'
        obj.push(po)
        break
      case 'video':
        let vi = {}
        vi.id = 31
        vi.name = 'видео  '
        vi.path = '/media/video'
        obj.push(vi)
        break
      case 'photo':
        let ph = {}
        ph.id = 32
        ph.name = 'фото  '
        ph.path = '/media/photo'
        obj.push(ph)
        break
      case 'add-video':
        let addv = {}
        addv.id = 33
        addv.name = 'добавить видео  '
        addv.path = '/media/video/add-video'
        obj.push(addv)
        break
      case 'add-photo':
        let addp = {}
        addp.id = 34
        addp.name = 'добавить альбом  '
        addp.path = '/media/photo/add-photo'
        obj.push(addp)
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
      case `${album._id}`:
        let dinamicAlbum = {}
        dinamicAlbum.id = 400
        dinamicAlbum.name = `${albumTitle()}`
        dinamicAlbum.path = `/media/photo/${album._id}`
        obj.push(dinamicAlbum)
        break
      default:
    }
    return obj
  }, [])


  useEffect(() => {
    if (!collective._id) {
      setTimeout(() => setUpDate(true))
    }
  }, [collective._id])

  useEffect(() => {
    const cN = getNews()
    const trubl = news?._id === cN?._id

    if (!trubl) {
      setUpDate(!upDate)
    }
  }, [upDate, news._id, currentPath])


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
