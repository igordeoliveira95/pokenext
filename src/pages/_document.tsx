import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import React, { Fragment } from 'react'
import { ServerStyleSheet } from 'styled-components'
import favicon from '../assets/favicon.ico'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ]
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <title>Pokenext</title>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />
          <link rel="icon" href={favicon} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
