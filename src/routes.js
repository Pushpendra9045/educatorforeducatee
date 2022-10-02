import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
    const layout = useSelector((state) => state.site);
  
    return (
      <Router>
        {layout.layout === "dash_layout" ? null : <Header />}
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </MainLayout>
        {/* {layout.layout === "dash_layout" ? null : <Footer />} */}
      </Router>
    );
  };
  
  export default App;