import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import WebsiteBuilder from "./components/WebsiteBuilder/WebsiteBuilder";
import { RecentActivities } from './components/RecentActivities/RecentActivities';
import { WebsiteBuilderProvider } from './contexts/WebsiteBuilderContext';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Modal />
      <RecentActivities />
      <WebsiteBuilderProvider>
        <WebsiteBuilder />
      </WebsiteBuilderProvider>
    </div>
  );
}

export default App;
