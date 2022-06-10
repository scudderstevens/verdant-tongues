import React from 'react'
import S from '@sanity/desk-tool/structure-builder'

// BootStrap Icons
import { BsRecordFill, BsDiagram3Fill, BsSliders } from 'react-icons/bs'
// otherwise defined within schema - https://react-icons.github.io/react-icons/icons?name=bs

export default () =>
  S.list()
    .id('content')
    .title('Content')
    .items([

      S.listItem()
      .title('Nodes')
      .icon(BsRecordFill)
      .child(
        S.documentTypeList('node')
        .title('Nodes')
        .child(id =>
          S.document()
          .schemaType('node')
          .documentId(id)
          .views([
            // The default form for editing a document
            S.view.form(),
            
            // Render the current selected document’s values as JSON
            S.view.component(({document}) => (
                <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
            )).title('View JSON')
          ])
        )
      ),

      S.divider(),

      S.listItem()
      .title('EndPoints')
      .icon(BsDiagram3Fill)
      .child(
        S.documentTypeList('endPoint')
        .title('EndPoints')
        .child(id =>
          S.document()
          .schemaType('endPoint')
          .documentId(id)
          .views([
            // The default form for editing a document
            S.view.form(),
            
            // Render the current selected document’s values as JSON
            S.view.component(({document}) => (
                <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
            )).title('View JSON')
          ])
        )
      ),

      S.listItem()
      .title('Settings')
      .icon(BsSliders)
      .child(
        S.document()
        .title('Settings')
        .schemaType('settings')
        .documentId('settings')
        .views([
          // The default form for editing a document
          S.view.form(),
          
          // Render the current selected document’s values as JSON
          S.view.component(({document}) => (
              <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
          )).title('View JSON')
        ])
      )

  ])