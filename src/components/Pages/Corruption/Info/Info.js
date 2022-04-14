import React from 'react'
import './Info.css'

// import DocContainer from '../DocContainer/DocContainer'
import DocItemCorr from '../DocItemCorr/DocItemCorr'


const Info = ({ docs = [] }) => {
  // console.log(docs)
  return (
    <ul className='info-corr'>

      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/IXMMG3gL1vKvng",
          title: "Отчет о выполнении плана мероприятий по противодействию коррупции за 2021 год",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/qaATuAonHeojrw",
          title: "Отчет о выполнении плана мероприятий по противодействию коррупции за 1-е полугодие 2021 года",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/I02-5UxKpaIawQ",
          title: "Отчет о выполнении плана мероприятий по противодействию коррупции за 1-е полугодие 2020 года",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/qcOETRXUK54n5A",
          title: "Отчет о выполнении плана мероприятий по противодействию коррупции за 2020 год ",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/wd0BTNyfe9JitQ",
          title: "Отчет о выполнении плана мероприятий по противодействию коррупции за 2019 год",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/7y0O7b0Gjk8k1w",
          title: "Отчет о выполнении плана мероприятий по противодействию коррупции за 1-е полугодие 2019 года",
        }
        }
      />
    </ul>
    // <DocContainer items={docs} key={1} />
  )
}

export default Info