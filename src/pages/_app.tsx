import "@/styles/globals.css";
import 'boxicons/css/boxicons.min.css';
import 'aos/dist/aos.css';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
