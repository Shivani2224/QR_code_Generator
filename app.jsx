import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function App() {
  const [text, setText] = useState("");
  const [qrText, setQrText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      alert("Please enter some text or URL.");
      return;
    }
    setQrText(text);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple QR Code Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: "10px", fontSize: "16px", width: "300px" }}
        />
        <br />
        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#0f4c5c",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Generate QR Code
        </button>
      </form>

      {qrText && (
        <div style={{ marginTop: "30px" }}>
          <QRCode
            value={qrText}
            size={256}
            fgColor="#0f4c5c"
            bgColor="#fb8b24"
          />
        </div>
      )}
    </div>
  );
}
