import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <>
      <nav>
        <div className={styles.navBarWrapper}>
          <div className={styles.showMeLogoContainer}>
            <Image
              src="/showMe.svg"
              alt="showMeLogo"
              width={91}
              height={109}
              className="showMeLogo"
            />
          </div>
          <div className={styles.navbarButtonWrapper}>
            <button className={styles.navbarConnectWallet}>Connect Wallet</button>
          </div>
        </div>
      </nav>

      {/* NFT Gallery Section */}
      <section>
        <div className="galleryWrapper">
          <h1 className={styles.heading}>
            connect your <span className={styles.walletSpan}>wallet,</span>
            <br /> see your NFTs
          </h1>
          <div className={styles.connectButtonWrapper}>
          <ConnectButton className={styles.connectbutton}/>
          </div>
        </div>
      </section>
    </>
  );
}
