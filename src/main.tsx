import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Make sure index.html has a div with id='root'");
}

try {
  const root = createRoot(rootElement);
  root.render(<App />);
} catch (error) {
  console.error("Failed to render app:", error);
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: sans-serif; color: #333;">
        <h1 style="color: #d32f2f;">Error loading application</h1>
        <p><strong>Error:</strong> ${error instanceof Error ? error.message : "Unknown error"}</p>
        <details style="margin-top: 20px;">
          <summary style="cursor: pointer; color: #666;">Show error details</summary>
          <pre style="background: #f5f5f5; padding: 10px; margin-top: 10px; overflow: auto; border-radius: 4px;">${error instanceof Error ? error.stack : String(error)}</pre>
        </details>
        <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Reload Page</button>
      </div>
    `;
  }
}
