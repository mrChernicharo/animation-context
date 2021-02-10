import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <div>
            {/* <Html>
              <Head>
                <link
                  href="https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap"
                  rel="stylesheet"
                />
              </Head>
              <body>
                <Main />
                <NextScript>
                </NextScript>
              </body>
            </Html> */}
            {initialProps.styles}
            {sheet.getStyleElement()}
          </div>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}