import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EmailList } from "./EmailList";
import logo from "./logo.svg";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <EmailList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
