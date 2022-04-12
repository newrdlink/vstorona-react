import React from 'react'
import './FormsDoc.css'

// import DocContainer from '../DocContainer/DocContainer'
import DocItemCorr from '../DocItemCorr/DocItemCorr'


const FormsDoc = ({ docs = [] }) => {
  // console.log(docs)
  return (
    <ul className='forms-doc'>

      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/H2jJlFvltoHOzg",
          title: "Обращение гражданина, представителя организации по фактам коррупционных правонарушений",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://www.gov.spb.ru/gov/protivodejstvie-korrupcii/formy-dokumentov-svyazannyh-s-protivodejstviem-korrupcii-dlya-zapolnen/",
          title: "Формы обращений, уведомлений, заявлений, справок, заполняемых государственными гражданскими служащими и гражданами в целях реализации действующего законодательства о противодействии коррупции ",
        }
        }
      />
    </ul>
    // <DocContainer items={docs} key={1} />
  )
}

export default FormsDoc