import React from 'react'
import './Materials.css'

import DocItemCorr from '../DocItemCorr/DocItemCorr'

const Materials = () => {

  return (
    <ul className='materials'>
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/N7cay3ovdQwnTQ",
          title: "Памятка «Что нужно знать о коррупции»",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/CBHZcDKXTdF_5Q",
          title: "Буклет. Коррупция вчера – сегодня – завтра",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://disk.yandex.ru/i/AqmcyQc6JZzRBQ",
          title: "МЕТОДИЧЕСКИЕ РЕКОМЕНДАЦИИ ПО РАЗРАБОТКЕ И ПРИНЯТИЮ ОРГАНИЗАЦИЯМИ МЕР ПО ПРЕДУПРЕЖДЕНИЮ И ПРОТИВОДЕЙСТВИЮ КОРРУПЦИИ",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://epp.genproc.gov.ru/web/gprf/activity/combating-corruption",
          title: "Генеральная прокуратура Российской Федерации",
        }
        }
      />
      <DocItemCorr
        item={{
          link: "https://epp.genproc.gov.ru/web/gprf",
          title: "Материалы сайта Генеральной  прокуратуры Российской Федерации раздел «Противодействие коррупции» подраздел «Что нужно знать о коррупции»",
        }
        }
      />
    </ul>
  )
}

export default Materials