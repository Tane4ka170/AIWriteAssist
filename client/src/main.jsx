import { createRoot } from "react-dom/client";
import { PrivyProvider } from "@privy-io/react-auth";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ai from "./images/ai.png";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PrivyProvider
      appId="cm73dnc7a01c3ifvjvvwulr4w"
      config={{
        // Display email and wallet as login methods
        loginMethods: ["email", "wallet" / "google", "github"],
        // Customize Privy's appearance in your app
        appearance: {
          theme: "light",
          accentColor: "#b79a46",
          logo: ai,
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <App />
    </PrivyProvider>
  </BrowserRouter>
);
