export function token(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      SB: '0x',
      SN: '0x',
      ST: '0x',
      SR: '0x',
      BUSD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    }
  } else {
    return {
      SB: '0x',
      SN: '0x',
      ST: '0x',
      SR: '0x',
      BUSD: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
      WBNB: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    };
  }
};

export function contract(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      BondDepository: '0x',
      PancakeRouter: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    };
  } else {
    return {
      BondDepository: '0x',
      PancakeRouter: '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3',
    };
  }
};

export function network(env?: string) {
  const environment = env || process.env.NODE_ENV;
  if (environment === 'production') {
    return {
      chainId: '0x38',
      chainName: 'BSC-Mainnet',
      rpcUrls: ['https://bsc-dataseed.binance.org/']
    };
  } else {
    return {
      chainId: '0x61',
      chainName: 'BSC-Testnet',
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/']
    };
  }
};