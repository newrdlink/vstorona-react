import React from 'react'
import './Сommission.css'

import DocItemCorr from '../DocItemCorr/DocItemCorr'

const Сommission = () => {

  return (
    <ul className='commission'>
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/-VePqu95Q5S1qg",
          title: "Приказ о создании Комиссии по противодействию коррупции",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/AO3Xope-TbNLmQ",
          title: "Состав комиссии по противодействию коррупции",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/HVpSw5-MDibESw",
          title: "Приказ о назначении ответственного за профилактику коррупционных и иных правонарушений",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/wvBsRNOlB-P4Jg",
          title: "Положение о комиссии по противодействию коррупции",
        }
        }
      />
      <h5 className="span-com">Протоколы заседаний</h5>
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/3Zx3Neap8CaAPw",
          title: "Протокол заседания комиссии № 1 от 07.06.2019",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/_AvP2rQFtOBqbA",
          title: "Протокол заседания комиссии № 2 от 16.12.2019",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/lycB5_c9OmiXzg",
          title: "Протокол заседания комиссии № 1 от 16.06.2020",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/n476SvL6o2fAtQ",
          title: "Протокол заседания комиссии № 2 от 16.12.2020",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/lVA8ICN5TJRcrA",
          title: "Протокол заседания комиссии № 1 от 15.06.2021",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/Cj44OJklcgF3eA",
          title: "Протокол заседания комиссии № 2 от 17.12.2021",
        }
        }
      />
    </ul>
  )
}

export default Сommission 
