import React from 'react'
import './CommonActs.css'

import DocItemCorr from '../DocItemCorr/DocItemCorr'

const CommonActs = ({ items = [] }) => {

  return (
    <section className='common-act'>
      <div className='common-act__gos'>
        <a href="https://mintrud.gov.ru/ministry/anticorruption/legislation/0"
          className='common__link'
          target="_blank" rel="noreferrer">ФЕДЕРАЛЬНОЕ ЗАКОНОДАТЕЛЬСТВО</a>
        <a href="https://www.gov.spb.ru/gov/protivodejstvie-korrupcii/zakonodatelstvo/zakonodatelstvo-sankt-peterburga/"
          className='common__link'
          target="_blank" rel="noreferrer">ЗАКОНОДАТЕЛЬСТВО САНКТ-ПЕТЕРБУРГА</a>
      </div>
      <h3 className='common-act__title'>Нормативные правовые и иные акты СПб ГБУК «Клуба «Выборгская сторона» в сфере противодействия коррупции</h3>


      <ul className='info-corr'>

        <DocItemCorr
          item={{
            link: "https://disk.yandex.ru/i/ZRRO4y7SYR95GA",
            title: "План мероприятий по противодействию коррупции в «Клубе «Выборгская сторона» № 6 на 2018 - 2022 годы",
          }
          }
        />
        <DocItemCorr
          item={{
            link: "https://disk.yandex.ru/i/YsSIqwOgzbeOCA",
            title: "Приказ о внесении изменений в План мероприятий по противодействию коррупции в СПб ГБУК Клуб Выборгская сторона на 2018 - 2022 годы ",
          }
          }
        />
        <DocItemCorr
          item={{
            link: "https://disk.yandex.ru/i/e15S-MY0DlCkpA",
            title: "Положение о Комиссии по противодействию коррупцииа",
          }
          }
        />
        <DocItemCorr
          item={{
            link: "https://disk.yandex.ru/i/3Onpcy8zknNKWA",
            title: "Приказ о Комиссии по противодействию коррупции ",
          }
          }
        />
        <DocItemCorr
          item={{
            link: "https://disk.yandex.ru/i/9DtsBp8g2lSZYw",
            title: "Приказ об изменениях в составе Комиссии по противодействию коррупции",
          }
          }
        />
        { }
        <DocItemCorr
          item={{
            link: "https://disk.yandex.ru/i/qFvKEYfg68c2-A",
            title: "Кодекс этики и служебного поведения работников СПб ГБУК \"Клуба \"Выборгская сторона\"",
          }
          }
        />
        <DocItemCorr
          item={{
            link: "https://disk.yandex.ru/i/2gfFe-ZH_LJlfQ",
            title: "Перечень коррупционно-опасных функций и должностей, подверженных коррупционным рискам",
          }
          }
        />
        <DocItemCorr
          item={{
            link: "https://disk.yandex.ru/i/CllPrWZhawpi5g",
            title: "Приказ о назначении ответственного лица за профилактику коррупционных и иных правонарушений",
          }
          }
        />
        <DocItemCorr
          item={{
            link: "https://disk.yandex.ru/i/Zoo08GZCY8r3ig",
            title: "Приказ о назначении ответственного лица за взаимодействие с ГУ МВД России по СПБ И ЛО и с управлением экономической безопасности противодействия коррупции Главного управления МВД России по   СПБ И ЛО",
          }
          }
        />
      </ul>
    </section>
  )
}

export default CommonActs