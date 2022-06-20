/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Metaverse Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-pink-500">
              Sell NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-pink-500">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-pink-500">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
    <React.Fragment>
      <Script src="selection.js" strategy="afterInteractive" />
    </React.Fragment>
  )
}

export default MyApp
