import { SR__factory } from 'sacredrealm-core/typechain-types'
import { rpcProvider } from '../utils';
import { token } from '../constant';

export function sr() {
  return SR__factory.connect(token().SR, rpcProvider);
}