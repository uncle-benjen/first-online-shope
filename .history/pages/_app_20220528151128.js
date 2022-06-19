import '../styles/globals.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/footer/Footer';
import { CartProvider } from "react-use-cart";

function loading() {
  const router = useRouter();
  const [loading, setLoading] = useState();

  useEffect(()=>{
    const hanleStart = (url) => (url !== router.asPath) && setLoading(true);
    const hanleComplete = (url) => (url === router.asPath) && setTimeout(()=>{ setLoading(true);}, 3000);

    router.events.on('routeChangeStart', hanleStart);
    router.events.on('routeChangeComplete', hanleStart);
    router.events.on('routeChangeComplete', hanleStart);
  })

}




function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isDashboard = router.asPath.startsWith("/user");
  const page =
      <CartProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
       </CartProvider>;
       
       const dashboard = 
       <CartProvider>
        <Component {...pageProps} />
       </CartProvider>;
  return( 
    <div>
      {isDashboard ? dashboard : page }
    </div>
   
  );
}

export default MyApp
