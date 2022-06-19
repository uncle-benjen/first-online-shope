import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>
            <meta name="document" content="Generated by rApToR" />
           
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