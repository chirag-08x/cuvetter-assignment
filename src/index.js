import App from "./App";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./context/AppContext";

const Index = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Index />);
