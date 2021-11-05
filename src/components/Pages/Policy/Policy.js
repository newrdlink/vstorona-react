import React, { useEffect, useRef } from "react"
import './Policy.css'

import NavPage from '../../NavPage/NavPage'
import PageTitle from '../../PageTitle/PageTitle'
import contentTitle from '../../../helpers/contentTitle'
import { infoPages } from '../../../config/infoPages'

import PolicyBlock from "./PolicyBlock/PolicyBlock"
import { infoPolicy } from "../../../constants/policy"

const Policy = ({ currentPath }) => {

  const pageInfo = contentTitle({ currentPath, infoPages })
  const { items = [] } = infoPolicy

  const scrollBlock = useRef()

  useEffect(() => {
    const element = scrollBlock.current
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, [])

  return (
    <main className="policy" ref={scrollBlock}>
      <NavPage
        currentPath={currentPath} />
      <PageTitle
        pageInfo={pageInfo}
      />
      <h3 className="policy__title">{infoPolicy.subtitle}</h3>
      <h5 className="policy__subtitle">{infoPolicy.title}</h5>
      {
        items.map(item => <PolicyBlock key={item.title} item={item} />)
      }
      <h6 className="accessible-block__title">5. Права и обязанности</h6>
      <h6 className="accessible-block__title">5.1. Администрация обязана:</h6>
      <ul className="policy-block">
        <li className="policy-item">5.1.1. Оказывать Пользователю Услуги в порядке и на условиях, оговоренных в настоящих Правилах.</li>
      </ul>
      <h6 className="accessible-block__title">5.2. Администрация вправе:</h6>
      <ul className="policy-block">
        <li className="policy-item">5.2.1. Приостановить оказание Услуг при выявлении нарушений, допущенных Пользователем при регистрации на Портале или при использовании его функциональных возможностей, а также в целях проведения необходимой проверки на период ее проведения.</li>
        <li className="policy-item">5.2.2. Вносить изменения в условия настоящих Правил.</li>
        <li className="policy-item">5.2.3. Приостанавливать предоставление Услуг на период проведения необходимых ремонтных и профилактических работ.</li>
      </ul>
      <h6 className="accessible-block__title">5.3. Пользователь обязан:</h6>
      <ul className="policy-block">
        <li className="policy-item">5.3.1. Самостоятельно знакомиться со сведениями, размещенными на Портале, сведениями об Услугах и условиях обслуживания, в том числе и о вносимых изменениях в настоящие Правила.</li>
        <li className="policy-item">5.3.2. Соблюдать требования действующего законодательства Российской Федерации, настоящих Правил и иных документов Администрации, распространяющих свое действие на Пользователей.</li>
        <li className="policy-item">5.3.3. Самостоятельно обеспечить режим конфиденциальности логина и пароля и принимать меры по ограничению к ним доступа третьих лиц. Администрация не несет ответственности за убытки и вред, причиненные Пользователю и возникшие в результате того, что логин и пароль стали известны третьим лицам.</li>
        <li className="policy-item">5.3.4. Не производить какие-либо несанкционированные действия, в том числе направленные на получение несанкционированного доступа к персональным данным других лиц, к базам данных Администрации, к программному обеспечению Администрации, модифицирование которого может создать угрозу нормального функционирования Портала, не совершать иных действий, которые могут нанести вред Администрации, другим Пользователям или третьим лицам.</li>
        <li className="policy-item">5.3.5. Не злоупотреблять правами, предоставленными настоящими Правилами, в том числе не использовать Услуги для совершения противоправных действий.</li>
        <li className="policy-item">5.3.6. Предоставлять достоверные, полные и актуальные данные, следить за их актуализацией.</li>
        <li className="policy-item">5.3.7. Не размещать на персональной странице данные, информацию и объекты (включая ссылки на них), которые могут нарушать права и интересы других лиц и/или повлечь в будущем их нарушение.</li>
        <li className="policy-item">5.3.8. Обеспечивать законность и правомерность использования и/или размещения данных, информации и объектов (включая, но не ограничиваясь изображениями других лиц, чужими текстами различного содержания, аудиозаписями и видеофильмами).</li>
        <li className="policy-item">5.3.9. Самостоятельно нести ответственность в случае допущения незаконности и неправомерности использования и/или размещения данных, информации и объектов (включая, но не ограничиваясь изображениями других лиц, чужими текстами различного содержания, аудиозаписями и видеофильмами).</li>
        <li className="policy-item">5.3.10. Обеспечивать конфиденциальность и не предоставлять другим Пользователям и/или третьим лицам персональные данные, ставшие ему известными в результате взаимодействия с другими Пользователями и иного использования Портала, а также информацию о частной жизни других Пользователей и третьих лиц без получения соответствующего предварительного разрешения указанных Пользователей и лиц.</li>
      </ul>
      <h6 className="accessible-block__title">5.4. Пользователю запрещается:</h6>
      <ul className="policy-block">
        <li className="policy-item">5.4.1. В нарушение требований действующего законодательства Российской Федерации незаконно использовать (в том числе, но не ограничиваясь, загружать, хранить, публиковать, использовать, распространять и предоставлять доступ) интеллектуальную собственность Пользователей и третьих лиц.</li>
        <li className="policy-item">5.4.2. Использовать программное обеспечение и осуществлять иные действия, направленные на нарушение нормального функционирования Портала и его сервисов или персональных страниц Пользователей.</li>
        <li className="policy-item">5.4.3. В нарушение требований действующего законодательства Российской Федерации незаконно использовать (в том числе, но не ограничиваясь, загружать, хранить, публиковать, использовать, распространять и предоставлять доступ) вирусы и другие вредоносные программы.</li>
        <li className="policy-item">5.4.4. Использовать без соответствующего письменного разрешения Администрации автоматизированные программы для сбора информации на Портале и/или взаимодействия с Порталом и его сервисами.</li>
        <li className="policy-item">5.4.5. Любым из возможных способов совершать действия, направленные на получение доступа к логину и паролю другого Пользователя.</li>
        <li className="policy-item">5.4.6. В нарушение требований действующего законодательства Российской Федерации осуществлять незаконный сбор и обработку персональных данных других лиц.</li>
        <li className="policy-item">5.4.7. Совершать действия, направленные на получение доступа к каким-либо Услугам, иным способом, кроме как через интерфейс, предоставленный Администрацией.</li>
        <li className="policy-item">5.5. В случае несогласия Пользователя с настоящими Правилами или их обновлениями Пользователь обязан отказаться от использования Портала и оказываемых Услуг.</li>
      </ul>
      <h6 className="accessible-block__title">6. Права на интеллектуальную собственность</h6>
      <ul className="policy-block">
        <li className="policy-item">6.1. Контент является объектом исключительных прав Администрации и других правообладателей, все права на эти объекты защищены.</li>
        <li className="policy-item">6.2. Контент не может быть скопирован (воспроизведен), переработан, распространен, отображен во фрейме, опубликован, скачан, передан, продан или иным способом использован целиком или по частям без предварительного разрешения правообладателя, кроме случаев, когда правообладатель явным образом выразил свое согласие на свободное использование Контента любым лицом или такое использование прямо установлено действующим законодательством Российской Федерации.</li>
        <li className="policy-item">6.3. Использование Потребителем Контента, доступ к которому получен исключительно для личного некоммерческого использования, допускается при условии сохранения всех знаков авторств или других уведомлений об авторстве, сохранения имени автора в неизменном виде, сохранении произведения в неизменном виде.</li>
        <li className="policy-item">6.4. Любое использование Портала или Контента, кроме разрешенного в настоящих Правилах и действующим законодательством Российской Федерации или в случае явно выраженного согласия правообладателя на такое использование, без предварительного письменного разрешения правообладателя категорически запрещено.</li>
        <li className="policy-item">6.5. Портал содержит (или может содержать) ссылки на другие порталы в сети Интернет, также как и статьи, фотографии, иллюстрации, графические изображения, музыку, звуки, видео, информацию, приложения, программы и другой контент, принадлежащий или исходящий от третьих лиц (контент третьих лиц), являющийся результатом интеллектуальной деятельности и охраняемый в соответствии с законодательством Российской Федерации. Указанные третьи лица и их Контент не проверяются Администрацией на соответствие каким-либо требованиям (достоверности, полноты, добросовестности). Администрация не несет ответственности за любую информацию, размещенную на порталах третьих лиц, к которым Пользователь получает доступ через портал или через контент третьих лиц, включая в том числе любые мнения или утверждения, выраженные на порталах третьих лиц или в их контенте.</li>
        <li className="policy-item">6.6. Размещенные на Портале ссылки или руководства по скачиванию файлов и (или) установке программ третьих лиц не означают поддержки или одобрения этих действий со стороны Администрации.</li>
        <li className="policy-item">6.7. Ссылки на порталы, продукты, работы, услуги, любую иную информацию и сведения коммерческого или некоммерческого характера, размещенные на Портале, не являются одобрением или рекомендацией данных продуктов Администрацией.</li>
        <li className="policy-item">6.8. Переход с Портала к порталам третьих лиц или их использование, установка программного обеспечения третьих лиц производится Пользователем самостоятельно и на свой риск.</li>
      </ul>
      <h6 className="accessible-block__title">7. Функционирование Портала. Ответственность</h6>
      <ul className="policy-block">
        <li className="policy-item">7.1. Пользователи самостоятельно несут ответственность за совершаемые ими действия в связи с использованием Портала и его функциональных возможностей. Нарушение положений настоящих Правил и действующего законодательства Российской Федерации влечет за собой гражданско-правовую, административную и уголовную ответственность.</li>
        <li className="policy-item">7.2. Администрация предоставляет техническую возможность использования Портала Пользователями и не участвует в формировании содержания персональных страниц Пользователей, не контролирует и не несет ответственности за действия или бездействие любых лиц в отношении использования Портала или формирования и использования содержания персональных страниц Пользователей.</li>
        <li className="policy-item">7.3. В информационной системе Портала и его программном обеспечении отсутствуют технические решения, осуществляющие автоматическую цензуру и контроль действий и информационных отношений Пользователей по использованию Портала.</li>
        <li className="policy-item">7.4. Администрация сохраняет за собой право в любое время изменять оформление Портала, его содержание, список сервисов, изменять или дополнять используемые скрипты, программное обеспечение и другие объекты, используемые или хранящиеся на Портале, любые серверные приложения в любое время с предварительным уведомлением или без такового.</li>
        <li className="policy-item">7.5. Администрация не занимается предварительной модерацией или цензурой информации Пользователей и предпринимает действия по защите прав и интересов лиц и обеспечению соблюдения требований законодательства Российской Федерации только после обращения заинтересованного лица к Администрации в установленном порядке.</li>
        <li className="policy-item">7.6. Администрация не несет ответственности за нарушение Пользователем настоящих Правил и оставляет за собой право по своему усмотрению, а также при получении информации от других лиц о нарушении Пользователем настоящих Правил, изменять (модерировать) или удалять любую публикуемую Пользователем информацию, нарушающую запреты, установленные настоящими Правилами, приостанавливать, ограничивать или прекращать доступ Пользователя ко всем или к любому из разделов или сервисов Портала в любое время по любой причине или без объяснения причин, с предварительным уведомлением или без такового, не отвечая за любой вред, который может быть причинен любым лицам таким действием. Администрация закрепляет за собой право удалить персональную страницу Пользователя и/или приостановить, ограничить или прекратить доступ Пользователя к любому из сервисов Портала, если Администрация обнаружит, что Пользователь представляет угрозу для Портала и/или иных Пользователей. Администрация Портала не несет ответственности за осуществленное, в соответствии с настоящими Правилами, временное блокирование или удаление информации или удаление персональной страницы Пользователя.</li>
        <li className="policy-item">7.7. Удаление персональной страницы Пользователя означает автоматическое удаление всей информации, размещенной на ней, а также всей информации Пользователя, введенной при регистрации на Портале. После удаления персональной страницы Пользователь теряет права доступа к Порталу.</li>
        <li className="policy-item">7.8. Администрация обеспечивает функционирование и работоспособность Портала и обязуется оперативно восстанавливать его работоспособность в случае технических сбоев и перерывов. Администрация не несет ответственности за временные сбои и перерывы в работе Портала и вызванную ими потерю информации. Администрация не несет ответственности за любой ущерб, причиненный компьютеру Пользователя и/или Потребителя или иного лица, мобильным устройствам, любому другому оборудованию или программному обеспечению, вызванный или связанный со скачиванием материалов с Портала или прохождением по ссылкам, размещенным на Портале.</li>
        <li className="policy-item">7.9. Администрация имеет право распоряжаться статистической информацией, связанной с функционированием Портала, а также информацией Пользователей. Для целей организации функционирования и технической поддержки Портала и исполнения настоящих Правил Администрация имеет техническую возможность доступа к персональным страницам Пользователей, которую реализует только в случаях, установленных настоящими Правилами.</li>
        <li className="policy-item">7.10. Администрация имеет право направлять Пользователю информацию о развитии Портала и его сервисов, а также рекламировать собственную деятельность и Услуги.</li>
        <li className="policy-item">7.11. Портал и его сервисы, включая все скрипты, приложения, Контент и оформление Портала, поставляются в неизменном виде. Администрация не гарантирует того, что Портал или его сервисы могут подходить или не подходить для конкретных целей использования. Администрация не гарантирует и не обещает никаких специфических результатов от использования Портала и/или его сервисов.</li>
        <li className="policy-item">7.12. Пользователи обязаны соблюдать меры предосторожности при скачивании с Портала или по размещенным на нем ссылкам и использовании любых файлов, в том числе программного обеспечения. Администрация настоятельно рекомендует использовать только лицензионное, в том числе антивирусное программное обеспечение.</li>
        <li className="policy-item">7.13. Пользователь соглашается с тем, что скачивает с Портала или с его помощью любые материалы на свой собственный риск и несет ответственность за возможные последствия использования указанных материалов, в том числе за ущерб, который это может причинить компьютеру Пользователя или третьим лицам, за потерю данных или любой другой вред.</li>
        <li className="policy-item">7.14. Администрация и/или ее представители не несут ответственности перед Пользователем и/или перед любыми третьими лицами за любой косвенный, случайный, неумышленный ущерб, включая упущенную выгоду или потерянные данные, вред чести, достоинству или деловой репутации, вызванный в связи с использованием Портала, содержимого Портала или иных материалов, к которым любое лицо получило доступ с помощью Портала, даже если Администрация предупреждала или указывала на возможность такого вреда.</li>
      </ul>
      <h6 className="accessible-block__title">8. Срок действия Правил и внесение в них изменений</h6>
      <ul className="policy-block">
        <li className="policy-item">8.1. Настоящие Правила, как предложение, направленное неопределенному кругу лиц, вступают в силу с момента опубликования на Портале и действуют до момента отзыва оферты Администрацией.</li>
        <li className="policy-item">8.2. Администрация оставляет за собой право внести изменения в условия настоящих Правил и/или отозвать Правила в любой момент по своему усмотрению. Вносимые изменения вступают в силу с момента размещения на Портале таких изменений. Если Администрация не получит в течение 5 (пяти) календарных дней отказ Пользователя от принятия таких изменений и Пользователь продолжит пользоваться Услугами на новых условиях, изменения, вносимые в Правила, будут считаться безоговорочно принятыми Пользователем.</li>
        <li className="policy-item">8.3. Неиспользование Пользователем Портала в течение 6 (шести) месяцев с момента последнего использования является безусловным подтверждением Пользователем своего намерения прекратить пользование Порталом. При наступлении ранее указанных обстоятельств Администрация имеет право удалить персональную страницу Пользователя на Портале, прекратив оказание Услуг.</li>
      </ul>
      <h6 className="accessible-block__title">9. Гарантии</h6>
      <ul className="policy-block">
        <li className="policy-item">9.1. В течение срока действия настоящих Правил Администрация предпримет все усилия для устранения каких-либо сбоев и ошибок в случае их возникновения при оказании Услуг в максимально короткие сроки.</li>
      </ul>
      <h6 className="accessible-block__title">9.2. Принимая условия настоящей оферты путем Акцепта оферты, Пользователь гарантирует Администрации:</h6>
      <ul className="policy-block">
        <li className="policy-item">9.2.1. Достоверность данных, указанных при регистрации в качестве Пользователя.</li>
        <li className="policy-item">9.2.2. Ознакомление и безоговорочное согласие с условиями и предметом оферты.</li>
        <li className="policy-item">9.2.3. Полное понимание значения и последствий своих действий во исполнение настоящих Правил.</li>
        <li className="policy-item">9.2.4. Использование Услуг методами и способами, которые не повлекут за собой нарушений каких-либо прав Администрации, третьих лиц и действующего законодательства Российской Федерации.</li>
      </ul>
      <h6 className="accessible-block__title">10. Порядок разрешения споров</h6>
      <ul className="policy-block">
        <li className="policy-item">10.1. Все споры и разногласия, возникшие при соблюдении настоящих Правил и пользовании Порталом, разрешаются путем переговоров.</li>
        <li className="policy-item">10.2. В случае невозможности разрешения споров и разногласий путем переговоров все споры, разногласия и требования подлежат разрешению в соответствии с действующим законодательством Российской Федерации.</li>
      </ul>
      <h6 className="accessible-block__title">11. Заключительные положения</h6>
      <ul className="policy-block">
        <li className="policy-item">11.1. Во всем, что не предусмотрено настоящими Правилами, стороны руководствуются действующим законодательством РФ.</li>
        <li className="policy-item">11.2. Настоящие Правила составляют соглашение между Пользователем и Администрацией Портала относительно порядка использования Портала и его сервисов и заменяют собой все предыдущие соглашения между Пользователем и Администрацией.</li>
      </ul>
    </main>
  )
}

export default Policy