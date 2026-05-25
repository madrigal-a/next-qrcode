import Qrcode from "./components/Qrcode";
import "./globals.css";

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-12 px-4">
      <Qrcode />
    </div>
  );
}
