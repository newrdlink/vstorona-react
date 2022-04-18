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
          link: "https://disk.yandex.ru/i/HKKq5gxSkSqfOQ",
          title: "Обращение гражданина, представителя организации по фактам коррупционных правонарушений",
        }
        }
      />
    </ul>
    // <DocContainer items={docs} key={1} />
  )
}

export default FormsDoc