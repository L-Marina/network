import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper-app">
        <Header />
        <Navbar />
        <div className="wrapper-app-content">
          <Routes>
            <Route
              path="/profile"
              element={<Profile state={props.state.profilePage} />}
            />
            <Route
              path="/dialogs"
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

//let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
//let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} />);

//<Route path={urls.courses} element={<CoursesList otherProp={myProp} />} />

//<Route path="profile" element={<Profile posts={props.posts} />} />
//<Route path="dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
