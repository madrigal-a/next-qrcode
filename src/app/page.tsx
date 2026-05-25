import Qrcode from "./components/Qrcode";
import "./globals.css";

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Qrcode />
    </div>
  );
}
