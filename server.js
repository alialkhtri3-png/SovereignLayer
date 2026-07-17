import { ethers } from "ethers";

export async function connectWallet(){

  if(!window.ethereum){
    throw new Error("MetaMask not installed");
  }

  const provider =
    new ethers.BrowserProvider(window.ethereum);


  const accounts =
    await provider.send(
      "eth_requestAccounts",
      []
    );


  return accounts[0];
}


export async function signIdentity(){

  const provider =
    new ethers.BrowserProvider(window.ethereum);


  const signer =
    await provider.getSigner();


  const address =
    await signer.getAddress();


  const message =
`Base Onchain Identity Verification

Wallet:
${address}

DID:
did:web:alialkhtri3-png.github.io:base-onchain-identity

Timestamp:
${Date.now()}`;


  const signature =
    await signer.signMessage(message);


  return {
    address,
    message,
    signature
  };

}
