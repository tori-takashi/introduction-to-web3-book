"use client"
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import artifact from "../abi/MyToken.sol/MyToken.json";

const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"

export default function Home() {
  const [windowEthreum, setWindowEthereum] = useState();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const { ethereum } = window as any
    console.log(ethereum);
    setWindowEthereum(ethereum);
  }, []);

  const handleButtonClick = async () => {
    console.log("Button clicked");
    console.log(windowEthreum);
    if (windowEthreum) {
      const provider = new ethers.BrowserProvider(windowEthreum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, artifact.abi, provider);
      const walletAddress: string = await signer.getAddress();
      const balance = await contract.balanceOf(walletAddress);
      setInputValue(balance.toString());
    }
  };

  return (
    <div>
      <h1>Blockchain sample app</h1>
      <button onClick={handleButtonClick}>Tokens owned</button>
      <input type="text" value={inputValue} readOnly />
    </div>
  )
}

