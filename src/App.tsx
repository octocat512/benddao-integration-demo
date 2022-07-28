import "./styles.css";
import ethers from "ethers";
import { useState } from "react";

const useAccount = () => {
  const [account, setAccount] = useState(
    "0x36dd48f087E63c3253510A0b916F225Dc4d462a2"
  );

  return account;
};

const BAYCAddr = "0x588D1a07ccdb224cB28dCd8E3dD46E16B3a72b5e";

const useBalanceOf = (account) => {};

export default function App() {
  const account = useAccount();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>This is a simple UI demo for the benddao integration</h2>
      <h4>account: {account}</h4>
      <h4>BAYC address: {BAYCAddr}</h4>
    </div>
  );
}
