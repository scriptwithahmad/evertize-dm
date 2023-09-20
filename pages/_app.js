import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/ceo.css";
import "@/styles/Topbar.css";
import "@/styles/AwesomeWork.css";
import "@/styles/Loader.css";
import "@/styles/Footer.css";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Layout>{loading ? <Loader /> : <Component {...pageProps} />}</Layout>
    </>
  );
}
