import React from "react"
import './Feedback.css'

import DocItemCorr from "../DocItemCorr/DocItemCorr"

const Feedback = () => {

  return (
    <ul className='feedback'>
      <DocItemCorr
        item={{
          link: "https://zakon.gov.spb.ru/hot_line/",
          title: "Специальная линия \"Нет коррупции!\"",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://docs.google.com/forms/d/e/1FAIpQLSfPWTHJwnF_VNPWdjFFaLcEjqkWeFMPdc_FlVZI9BmaB2kaVg/viewform",
          title: "Обращения граждан",
        }
        }
      />
    </ul>
  )
}

export default Feedback