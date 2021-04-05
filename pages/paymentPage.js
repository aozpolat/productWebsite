// will be edited
import { useList } from "../contexts/cartContext";

import Layout from "../components/layout";
export default function CreditCart() {
  const { URL } = useList();
  return (
    <Layout payment>
      <iframe src={`${URL}`} frameBorder="0"></iframe>

      <style jsx>{`
        iframe {
          width: 70%;
          height: 40rem;
          margin: 0 10rem;
        }
      `}</style>
    </Layout>
  );
}
