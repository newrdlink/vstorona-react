import React from 'react'
import './Documents.css'

import DocBox from './DocBox/DocBox'
// import { docItems } from '../../../../config/temp/docItems'

import ButtonAddDocument from '../../../UI/buttons/ButtonAddDocument/ButtonAddDocument'
import AddDocument from '../../../UI/popups/AddDocument/AddDocument'

const Documents = ({
  allDocuments,
  loggedIn,
  onClickAddDocument,
  onClickEditDocument,
  onClickRemoveDocument,
  isPopupAddDocumentOpen,
  onClickBtnClose,
  onSubmitHandlerAddDocument,
  errorResponse
}) => {

  const arrayAllTypeDocument = allDocuments.reduce((arr, item) => {
    if (!arr.includes(item.type)) {
      arr.push(item.type)
    }
    return arr
  }, [])

  return (
    <section className="documents">
      {loggedIn ?
        <ButtonAddDocument
          onClick={onClickAddDocument}
        /> : null}
      {
        arrayAllTypeDocument.map((type) => {
          const arrDoc = allDocuments.filter((item) => item.type === type)
          return <DocBox
            arrDoc={arrDoc}
            key={arrDoc[0]._id}
            loggedIn={loggedIn}
            onClickAdd={onClickAddDocument}
            onClickEdit={onClickEditDocument}
            onClickRemove={onClickRemoveDocument}

          />
        })
      }
      <AddDocument
        isOpen={isPopupAddDocumentOpen}
        title="Новый документ"
        submitBtnName="Добавить документ"
        onClickBtnClose={onClickBtnClose}
        onSubmitHandlerAddDocument={onSubmitHandlerAddDocument}
        onClose={onClickBtnClose}
        errorResponse={errorResponse}
      />
    </section>
  )
}

export default Documents
