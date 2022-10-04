import { ethers, utils, Wallet } from "ethers";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const loaded = (_obj, _type, _msg) => {
//     toast.update(_obj, { render: _msg, type: _type, isLoading: false })
// }
// const response = await toast.promise(
//     fetch("A_URL"),
//     {
//       pending: 'Promise is pending',
//       success: 'Promise resolved 👌',
//       error: 'Promise rejected 🤯'
//     }
// );

// const FindNetworksAvailableByHex = (id) => {
//     if(id === `0x${Number(Networks.BSC.ChainId).toString(16)}`) return true;
//     else if(id === `0x${Number(Networks.ETH.ChainId).toString(16)}`) return true;
//     else if(id === `0x${Number(Networks.RON.ChainId).toString(16)}`) return true;
//     else if(id === `0x${Number(Networks.MATIC.ChainId).toString(16)}`) return true;
//     else if(id === `0x${Number(Networks.AVAX.ChainId).toString(16)}`) return true;
//     else return false;
//     }
// const FindNetworksAvailableById = (id) => {
//     if(id === Networks.BSC.ChainId) return true;
//     else if(id === Networks.ETH.ChainId) return true;
//     else if(id === Networks.RON.ChainId) return true;
//     else if(id === Networks.MATIC.ChainId) return true;
//     else if(id === Networks.AVAX.ChainId) return true;
//     else return false;
//     }


// const checkNetworkConnected = () => {
// provider.on("network", (newNetwork) => {
// setUSER((prevState) => ({ ...prevState, ['_connectedNetwork']: con_wallet }));
// return newNetwork.chainId;
// });

// }

export const connectContract = async (_addr, _abi, _signer) => {
const contract = new ethers.Contract(_addr, _abi, _signer);
return contract;
}

export const ToEthers = (_value) => {
    return ethers.utils.parseUnits(String(_value));
}
export const FromEthers = (_value) => {
    return ethers.utils.formatUnits(String(_value));
}

export const shortStr = (_url) => {
  return _url.slice(0, 5)+"..."+_url.slice(_url.length-4);
}

// const getBalanceOf = (_token, _addr) => {
// connectContract(contracts[_token].address).then((res) => {
// res.balanceOf(_addr).then((res2) => {
//     return utils.parseEther(res2.toString());
// })
// })
// }

// const changeState = (_state, _structure, _block, _value) => {
// _state((previousState) => ({
// [_structure] : [_structure][_block] = _value
// }));
// }

// const getTransaction = async (blockHash) => {
// const getTx = provider.getTransaction(blockHash).then((res) => {
// const iface = new ethers.utils.Interface(['function transfer(address,uint256)']);
// const txData = iface.decodeFunctionData('transfer', res.data);
// return txData[0];
// })
// };

// const getTokenByAddress = (_addr, _network) => {
//     if(_addr === contracts[_network].RNB.address) return contracts[_network].RNB;
//     if(_addr === contracts[_network].SLP.address) return contracts[_network].SLP;
//     if(_addr === contracts[_network].AXS.address) return contracts[_network].AXS;
//     if(_addr === contracts[_network].WETH.address) return contracts[_network].WETH;
//     if(_addr === contracts[_network].USDC.address) return contracts[_network].USDC;
//     if(_addr === contracts[_network].RON.address) return contracts[_network].RON;
//     if(_addr === contracts[_network].MATIC.address) return contracts[_network].MATIC;
//     if(_addr === contracts[_network].AVAX.address) return contracts[_network].AVAX;
//     if(_addr === contracts[_network].BNB.address) return contracts[_network].BNB;
// }

// const listenTo = async () =>{
// SignContract(contracts['AVAX'].RNB.address, getABI(contracts['AVAX'].RNB.address, ['AVAX']), connectProxyNetwork(Networks['AVAX'].RpcUrls).signer).on("Transfers", (to, name, amount, network, hash) => {
// console.log("New TX: "+hash);
// notify("info", "New TX: "+hash);
// });
// }



const Number_Format = new Intl.NumberFormat(undefined);
const Number_Format_USD = new Intl.NumberFormat(undefined);
const Number_Format_Compact = new Intl.NumberFormat(undefined, { notation: "compact"});
export const CurrencyFormat = (amount) => {
  let value_final;
  let value = Number_Format.format(amount);
  value = value.split(".")
  if(value[1]){
  value_final = value[0] +"."+ value[1].substring(0,2);
  }else{
  value_final = value;
  }
  return value_final;
}
export const CurrencyFormat2 = (amount) => {
    let value_final;
    let value =  parseFloat(amount).toFixed(6).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    value = value.split(".")
    if(value[1]){
      value_final = value[0] +"."+ value[1].substring(0,2);
      }else{
      value_final = value;
      }
    return value_final;
}
export const CurrencyFormatDecimals = (amount, dec) => {
    return Number_Format_Compact.format(amount);
// return parseFloat(amount).toFixed(dec).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}
export const CurrencyFormatUSD = (amount, dec) => {
  let value_final;
  let value = Number_Format_USD.format(amount);
  value = value.split(".")
  if(value[1]){
    value_final = value[0] +"."+ value[1].substring(0,2);
    }else{
    value_final = value;
    }
  return value_final;
}

export function sleep(duration){
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}

export function addGlobalEventListener(
    type,
    selector,
    callback,
    options,
    parent = document
  ) {
    parent.addEventListener(
      type,
      e => {
        if (e.target.matches(selector)) callback(e)
      },
      options
    )
  }
  
  export function qs(selector, parent = document) {
    return parent.querySelector(selector)
  }
  
  export function qsa(selector, parent = document) {
    return [...parent.querySelectorAll(selector)]
  }
  
  export function createElement(type, options = {}) {
    const element = document.createElement(type)
    Object.entries(options).forEach(([key, value]) => {
      if (key === "class") {
        element.classList.add(value)
        return
      }
  
      if (key === "dataset") {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue
        })
        return
      }
  
      if (key === "text") {
        element.textContent = value
        return
      }
  
      element.setAttribute(key, value)
    })
    return element
  }
export const short = (_url) => {
    return _url.slice(0, 5)+"..."+_url.slice(_url.length-4);
}

export const BigNumber = (amount, reverted, decimals) => {
    decimals = decimals ?? 18;
    if(reverted) return parseFloat(utils.formatUnits(amount, decimals)).toFixed(decimals/2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    else return utils.formatUnits(amount, decimals);
}

export const MoneyFormat = (labelValue) => { 
  
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+15

       ? parseFloat(Math.abs(Number(labelValue)) / 1.0e+15).toFixed(0) + "T"
       // Six Zeroes for Millions 
       : parseFloat(Math.abs(Number(labelValue)) >= 1.0e+9).toFixed(0)

       ? parseFloat(Math.abs(Number(labelValue)) / 1.0e+9).toFixed(6) + "B"
       // Six Zeroes for Millions 
       : parseFloat(Math.abs(Number(labelValue)) >= 1.0e+6).toFixed(6)

       ? parseFloat(Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
       // Three Zeroes for Thousands
       : parseFloat(Math.abs(Number(labelValue)) >= 1.0e+3).toFixed(2)

       ? parseFloat(Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

       : parseFloat(Math.abs(Number(labelValue))).toFixed(2);

   }

   export const notify = (_type, _msg) => {
    toast[_type](_msg, {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        enableHtml: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}