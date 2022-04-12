import React from 'react'
import './Intelligence.css'

import DocItemCorr from '../DocItemCorr/DocItemCorr'

const Intelligence = () => {

  return (
    <ul className='intelligence'>
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/pu72nC2mKEMuOA",
          title: "Сведения о доходах руководителя учреждения за 2018 год ",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/qviwGBmHGWfP3A",
          title: "Сведения о доходах руководителя учреждения  за 2019 год",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/GKFQqdSLe2h58g",
          title: "Сведения о доходах руководителя за 2020 год",
        }
        }
      />
    </ul>
  )
}

export default Intelligence
