import { useState } from "react";
import QRCode from "qrcode";

export default function App() {
  const [qrcode, setqrcode] = useState("");
  const [url, seturl] = useState("");

  const generateQRCode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) return console.error(err);
      console.log(url);
      setqrcode(url);
    });
  };

  return (
    <div className="app">
      <h1>QR Code Generator </h1>
      <input
        type="text"
        placeholder="Enter the URL"
        value={url}
        onChange={(evt) => seturl(evt.target.value)}
      />
      <button onClick={generateQRCode}>Generate</button>
      <img src={qrcode} />
    </div>
  );
}
