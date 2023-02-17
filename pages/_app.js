import Layout from "../components/layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/index";
import Modal from "../components/ui/Modal";
import { appWithTranslation } from 'next-i18next'




 function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>      
        <Modal></Modal>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}



export default appWithTranslation(App)
