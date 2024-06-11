import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';
import StateAdvanced from './components/State';
import Eventbinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/conditionalRendering';

function App() {
  return (
    <div className="App">
    {/* <Greet/>
    <Welcome name="shahid"/>
    <Hello name="shahid"/>
    <Message/> */}
    {/* <StateAdvanced/> */}
    {/* <Eventbinding/> */}
    {/* <ParentComponent/> */}
    <ConditionalRendering/>
    </div>
  );
}

export default App;
