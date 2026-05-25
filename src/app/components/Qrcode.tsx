"use client"
import { MouseEvent, ChangeEvent } from 'react'; // Import the MouseEvent and ChangeEvent types from the 'react' library or appropriate type library

import html2canvas from "html2canvas";
import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const Qrcode = () => {
  const handleDownload = () => {
    const qrCanvas = document.getElementById("qrCode"); // Get the canvas element directly
    if (qrCanvas) {
      html2canvas(qrCanvas).then((canvas) => {
        const link = document.createElement("a");
        link.download = "qrcode.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  };

  const [url, setUrl] = useState("");

  const downloadQRCode = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUrl("");
  };

  const qrCodeEncoder = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={300}
      bgColor={"#ffffff"}
      level={"H"}
    />
  );
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="p-11 w-96 rounded-lg drop-shadow-lg mb-4 bg-white ">{qrcode}</div>
      <div className="">
        <form className="flex flex-col justify-center items-center w-96 py-4 px-1 rounded-lg drop-shadow-lg bg-white mt-4 " onSubmit={downloadQRCode}>
          <label className="font-bold text-xl mb-2 " >Enter URL</label>
          <input
            className="input input-bordered input-accent w-full max-w-xs mb-4"
            type="text"
            value={url}
            onChange={qrCodeEncoder}
            placeholder="https://google.com"
          />
          <button onClick={handleDownload} className="btn btn-accent w-full max-w-xs " type="submit" disabled={!url}>
            Download QR code
          </button>
        </form>
      </div>
    </div>
  );
};

export default Qrcode;
