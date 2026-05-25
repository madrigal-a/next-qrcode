"use client";

import { MouseEvent, ChangeEvent, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const Qrcode = () => {
  const [url, setUrl] = useState("");

  const handleDownload = () => {
    const qrCanvas = document.getElementById("qrCode") as HTMLCanvasElement | null;
    if (qrCanvas) {
      // Create a temporary link element to trigger the download
      const link = document.createElement("a");
      link.download = "codigo-qr.png";
      link.href = qrCanvas.toDataURL("image/png");
      link.click();
    }
  };

  const handleFormSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (url) {
      handleDownload();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleClear = () => {
    setUrl("");
  };

  // We show a placeholder QR code pointing to the app url if input is empty
  const qrValue = url.trim() || "https://madrigal-a.github.io/next-qrcode/";

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md px-4">
      {/* Brand Header */}
      <div className="text-center mb-8">
        <div className="inline-flex p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 mb-3 shadow-inner">
          <svg
            className="w-8 h-8 text-indigo-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-slate-100 to-indigo-200">
          Generador de QR
        </h1>
        <p className="text-sm text-slate-400 mt-2 max-w-xs mx-auto">
          Convierte cualquier enlace o texto en un código QR escaneable al instante.
        </p>
      </div>

      {/* Main Glassmorphic Card */}
      <div className="w-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center gap-6 transition-all duration-300 hover:border-indigo-500/20 hover:shadow-indigo-500/5">
        
        {/* QR Code Container with white background for maximum contrast/scannability */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative p-5 bg-white rounded-2xl shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-[1.02]">
            <QRCodeCanvas
              id="qrCode"
              value={qrValue}
              size={240}
              bgColor={"#ffffff"}
              fgColor={"#0f172a"}
              level={"H"}
              includeMargin={true}
            />
          </div>
        </div>

        {/* Form and input */}
        <form className="w-full flex flex-col gap-4 mt-2" onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-indigo-300 uppercase tracking-wider pl-1">
              Introduce URL o Texto
            </label>
            <div className="relative flex items-center">
              <input
                className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl pl-4 pr-10 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all duration-200 shadow-inner"
                type="text"
                value={url}
                onChange={handleInputChange}
                placeholder="https://ejemplo.com o tu texto aquí..."
              />
              {url && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute right-3 p-1 rounded-full text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <button
            onClick={handleDownload}
            className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold py-3.5 px-4 rounded-2xl shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-200 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none flex items-center justify-center gap-2"
            type="submit"
            disabled={!url}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Descargar Código QR</span>
          </button>
        </form>
      </div>

      {/* Footer Info */}
      <p className="text-xs text-slate-500 mt-6 text-center">
        El código QR se genera dinámicamente y se descarga en formato PNG de alta resolución.
      </p>
    </div>
  );
};

export default Qrcode;
