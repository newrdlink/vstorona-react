import React from 'react'
import './Documents.css'

import DocBox from './DocBox/DocBox'
// import { docItems } from '../../../../config/temp/docItems'

import ButtonAddDocument from '../../../UI/buttons/ButtonAddDocument/ButtonAddDocument'
import AddDocument from '../../../UI/popups/AddDocument/AddDocument'
import EditDocument from '../../../UI/popups/EditDocument/EditDocument'

const Documents = ({
  allDocuments,
  loggedIn,
  onClickAddDocument,
  onClickEditDocument,
  onClickRemoveDocument,
  isPopupAddDocumentOpen,
  isPopupEditDocumentOpen,
  editDocument,
  onClickBtnClose,
  onSubmitHandlerAddDocument,
  onSubmitHandlerEditDocument,
  errorResponse
}) => {
  // console.log(isPopupEditDocumentOpen)
  const arrayAllTypeDocument = allDocuments.reduce((arr, item) => {
    if (!arr.includes(item.type)) {
      arr.push(item.type)
    }
    return arr
  }, [])

  return (
    <section className="documents">
      {loggedIn && allDocuments.length === 0 ?
        <ButtonAddDocument
          // temp ID for case when no docs on server
          onClick={() => onClickAddDocument('6128e7d4b9735e545cee3542')}
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
      <EditDocument
        isOpen={isPopupEditDocumentOpen}
        title="Изменить документ"
        submitBtnName="Изменить документ"
        onClickBtnClose={onClickBtnClose}
        onSubmitHandlerEditDocument={onSubmitHandlerEditDocument}
        onClose={onClickBtnClose}
        errorResponse={errorResponse}
        editDocument={editDocument}
      />
    </section>
  )
}

export default Documents
