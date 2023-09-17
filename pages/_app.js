import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/ceo.css";
import "@/styles/Topbar.css";
import "@/styles/AwesomeWork.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </>
  );
}
