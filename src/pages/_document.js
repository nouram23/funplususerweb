/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

/**

 */

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Fun Plus</title>
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content="Pronia plant store bootstrap 5 template is an awesome website template for any home plant shop."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/assets/images/Logo.ico"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400&family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
          {/* 
          <link rel="stylesheet" href="/assets/css/Pe-icon-7-stroke.css" />
          <link rel="stylesheet" href="/assets/css/animate.min.css" />
          <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
          <link rel="stylesheet" href="/assets/css/nice-select.css" />
          <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
          <link rel="stylesheet" href="/assets/css/ion.rangeSlider.min.css" />
         
         */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />

          <script
            async
            src="https://kit.fontawesome.com/f9e2ab07a1.js"
            crossOrigin="anonymous"
          ></script>
          {/* <script
            async
            src="/assets/js/vendor/bootstrap.bundle.min.js"
          ></script>
          <script async src="/assets/js/vendor/jquery-3.6.0.min.js"></script>
          <script
            async
            src="/assets/js/vendor/jquery-migrate-3.3.2.min.js"
          ></script>
          <script async src="/assets/js/vendor/jquery.waypoints.js"></script>
          <script
            async
            src="/assets/js/vendor/modernizr-3.11.2.min.js"
          ></script>
          <script async src="/assets/js/plugins/wow.min.js"></script>
          <script async src="/assets/js/plugins/swiper-bundle.min.js"></script>
          <script async src="/assets/js/plugins/jquery.nice-select.js"></script>
          <script async src="/assets/js/plugins/parallax.min.js"></script>
          <script
            async
            src="/assets/js/plugins/jquery.magnific-popup.min.js"
          ></script>
          <script async src="/assets/js/plugins/tippy.min.js"></script>
          <script
            async
            src="/assets/js/plugins/ion.rangeSlider.min.js"
          ></script>
          <script async src="/assets/js/plugins/mailchimp-ajax.js"></script>
          <script async src="/assets/js/plugins/jquery.counterup.js"></script>

          <script async src="/assets/js/main.js"></script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
