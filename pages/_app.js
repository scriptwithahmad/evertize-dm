import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/ceo.css";
import "@/styles/Topbar.css";
import "@/styles/AwesomeWork.css";
import "@/styles/Loader.css";
import "@/styles/Footer.css";
import "@/styles/Team.css"; 
import "@/styles/dashboard.css"; 
import "@/styles/createTeam.css"; 
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const router = useRouter();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          className="slide-in"
          transition={{
            duration: 0.7,
          }}
          initial={{
            scaleX: 1,
          }}
          animate={{
            scaleX: 0,
          }}
          exit={{ scaleX: 1 }}
        ></motion.div>
        <Layout>{loading ? <Loader /> : <Component {...pageProps} />}</Layout>
      </AnimatePresence>
    </>
  );
}
