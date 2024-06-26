import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';
import StateAdvanced from './components/State';
import Eventbinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/conditionalRendering';
import NameList from './components/NameList';
import Style from './components/Style';
import Form from './components/SimpleForm';
import ComponentLifecycleMethod from './components/ComponentLifecycleMethod';
import ComponentLifecycleUpdateMethod from './components/ComponentLifecycleUpdateMethod';
import Fragment from './components/Fragment';
import FRInputParent from './components/FRInputParent';
import Portals from './components/Portals';
import ChildComponent1 from './components/ChildComponent1';
import { ContextProvider } from './components/Context';
// import Refs from './components/Refs';

function App() {
  return (
    <div className="App">
      <ContextProvider value={"this is shahid"}>
         <Greet/>
      </ContextProvider>
    {/* <Welcome name="shahid"/>
    <Hello name="shahid"/>
    <Message/> 
    {/* <StateAdvanced/> */}
    {/* <Eventbinding/> */}
    {/* <ParentComponent/> */}
    {/* <ConditionalRendering/> */}
    {/* <NameList/> */}
    {/* <Style/> */}
    {/* <Form/> */}
    {/* <ComponentLifecycleMethod/> */}
    {/* <ComponentLifecycleUpdateMethod/> */}
    {/* <Fragment/> */}
    {/* <Refs/> */}
    {/* <FRInputParent/> */}
    {/* <Portals/> */}
    {/* <ChildComponent1 /> */}

    </div>
  );
}

export default App;
