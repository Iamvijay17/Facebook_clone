import React from "react";
import "./App.css";
import { Card_1 } from "./components/Card_1";
import { Find_Your_Account } from "./components/Find_Your_Account";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Mob_Menu } from "./components/Mob_Menu";
import { Mob_Nav } from "./components/Mob_Nav";
import { Mob_search } from "./components/Mob_search";
import { Navbar } from "./components/Navbar";
import { Sign_up_for_Facebook } from "./components/Sign_up_for_Facebook";
import { Statuscard } from "./components/statuscard";
import { Owl } from "./components/Owl";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { Friends } from "./components/Friends";
import { Friend_requests } from "./components/Friend_requests";
import { Suggestions } from "./components/Suggestions";
import { Video } from "./components/Video";
import { Marketplace } from "./components/Marketplace";
import { Notifications } from "./components/Notifications";
import { Inbox } from "./components/Inbox";

import { Mobi_video } from "./components/Mobi_video";
import { Mobimarketplace } from "./components/Mobimarketplace";

function App() {
  return (
    <div className="App bg-light">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={[<Navbar />, <Mob_Nav />, <Home />]} />
          <Route
            path="/friends"
            element={[<Navbar />, <Mob_Nav />, <Friends />]}
          />
          <Route path="/video" element={[<Navbar />, <Mob_Nav />, <Video />]} />
          {/* <Route path="/mobile-video" element={<Mobile_video/>} /> */}

          <Route path="/mobivideo" element={[<Mob_Nav />, <Mobi_video />]} />
          <Route
            path="/suggestions"
            element={[<Suggestions />, <Navbar />, <Mob_Nav />]}
          />
          <Route
            path="/requests"
            element={[<Navbar />, <Mob_Nav />, <Friend_requests />]}
          />
          <Route
            path="/marketplace"
            element={[<Navbar />, <Mob_Nav />, <Marketplace />]}
          />
          <Route
            path="/mobimarketplace"
            element={[<Navbar />, <Mob_Nav />, <Mobimarketplace />]}
          />
          <Route
            path="/notifications"
            element={[<Notifications />, <Navbar />, <Mob_Nav />]}
          />
          <Route path="/inbox" element={[<Mob_Nav />, <Navbar />, <Inbox />]} />
          <Route
            path="/mobilemenu"
            element={[<Mob_Menu />, <Navbar />, <Mob_Nav />]}
          />
          <Route
            path="/statuscard"
            element={[<Statuscard />, <Navbar />, <Mob_Nav />]}
          />
          <Route
            path="/mobilesearch"
            element={[<Mob_search />, <Navbar />, <Mob_Nav />]}
          />
          <Route path="/findyouraccount" element={[<Find_Your_Account />]} />
          <Route path="/signup" element={[<Sign_up_for_Facebook />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
