import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Encryption',
    png: require('@site/static/img/encrypted.png').default,
    description: (
      <>
        Securely trade cryptocurrencies in different blockchains at lowest fees possible.
        Mint, explore and List you NFTs.
        Bridge crypto-assets.
        ALL IN ONE PLACE.
      </>
    ),
  },
  {
    title: 'Scalability',
    png: require('@site/static/img/scale.png').default,
    description: (
      <>
        Blocklab-Protocol enhances the experience you get in defi, NFT marketplace and bridge of assets on various blockchains.
      </>
    ),
  },
  {
    title: 'Great UX & DX',
    png: require('@site/static/img/great-ux-dx.png').default,
    description: (
      <>
        Blocklab-Protocol has a seamless developer and user experience.
      </>
    ),
  },
];

function Feature({ png, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Use the PNG image */}
        <img src={png} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

//function Feature({Svg, title, description}) {
//  return (
//    <div className={clsx('col col--4')}>
//      <div className="text--center">
//        <Svg className={styles.featureSvg} role="img" />
//      </div>
//      <div className="text--center padding-horiz--md">
//        <h3>{title}</h3>
//        <p>{description}</p>
//      </div>
//    </div>
//  );
//}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
