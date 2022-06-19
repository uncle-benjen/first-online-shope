import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>
            {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
              rel="stylesheet"
            /> */}
            <link
                  rel="preload"
                  href="/fonts/ProximaNova-Regular.woff"
                  as="font"
                  type="font/woff"
                  crossOrigin=""
                />
          </Head>
          <body>
          <div id='overlays'></div> 
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;