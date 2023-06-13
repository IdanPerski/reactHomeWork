import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";

import ThemeProvider from "./providers/ThemeProvider";
import Router from "./routes/Router";
import UserProvider from "./user/providers/UseProvider";
import SnackbarProvider from "./providers/SnackBarProvider";

function App() {
  return (
    <div>
      <BrowserRouter>
        <SnackbarProvider>
          <ThemeProvider>
            <UserProvider>
              {/* <SearchProvider> */}
              <Layout>
                <Router />
              </Layout>
              {/* </SearchProvider> */}
            </UserProvider>
          </ThemeProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
