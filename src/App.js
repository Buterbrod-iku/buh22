import './App.css';
import Header from "./components/header/header";
import Title from "./components/title/title";
import Services from "./components/services/services";
import InfoBlock from "./components/infoBlock/infoBlock";
import ListInfo from "./components/listInfo/listInfo";
import Partner from "./components/partner/partner";
import Form from "./components/form/form";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/Routing/about/about";
import Price from "./components/Routing/price/price";
import Interest from "./components/Routing/interest/interest";
import OneServices from "./components/Routing/oneServices/oneServices";
import Application from "./components/Routing/application/application";
import Zndfl from "./components/Routing/zndfl/zndfl";
import PriceList from "./components/Routing/priceList/priceList";
import Service from "./components/Routing/service/service";

function App() {
  return (
    <div className="App" id="app">
            <Header />
            <Routes>
                <Route path="" element={[<Title />, <Services />, <InfoBlock />, <ListInfo />, <Partner />, <Form />]} />
                <Route path="/about" element={<About />} />
                <Route path="/price" element={<Price />} />
                <Route path="/interest" element={<Interest />} />
                <Route path="/OneServices" element={<OneServices />} />
                <Route path="/application" element={<Application />} />
                <Route path="/zndfl" element={<Zndfl />} />
                <Route path="/priceList" element={<PriceList />} />
                <Route path="/service" element={<Service />} />
            </Routes>
            <Contact />
            <Footer />
    </div>
  );
}

export default App;
