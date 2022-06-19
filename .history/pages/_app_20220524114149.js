import '../styles/globals.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/footer/Footer';
import { CartProvider } from "react-use-cart";


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
