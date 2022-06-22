import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function MyApp({Component, pageProps}: AppProps) {
  return <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false}/>
    <Component {...pageProps} />
  </QueryClientProvider>
}

export default MyApp
