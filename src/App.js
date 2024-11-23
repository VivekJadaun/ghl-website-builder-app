import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Section from "./components/Section/Section";
import { RecentActivities } from './components/RecentActivities/RecentActivities';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Modal />
      <RecentActivities/>
      <Section/>
    </div>
  );
}

export default App;
