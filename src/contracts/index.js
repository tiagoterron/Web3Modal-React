import { images } from '../constants';
import ABI from './abi.json';

const NAME = "0x00000000000000000000000";

const Contracts = {
    ETHW: {
        NAME: {address: NAME, abi: ABI}
    }
    
}

const Tokens = {
    NATIVE: {
        Symbol: "ETH",
        Title: "ETH",
        Logo: images.eth,
        Name: "ETH",
        Decimals: 18,
        
    } 
}

export { Contracts, Tokens };