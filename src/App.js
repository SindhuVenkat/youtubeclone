import './App.css';
import { Provider } from "react-redux";
import Header from './Components/Header';
import Body from './Components/Body';
import Maincontainer from './Components/Maincontainer';
import Watch from './Components/Watch';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from "./utils/store";


  const Approuter = createBrowserRouter([
    {
      path:'/',
      element: <Body/>,
      children: [
        {
          path: "/",
          element: <Maincontainer />,
        },
        {
          path: "watch",
          element: <Watch />,
        },
      ]
    }
  ])
  function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Header/>
     <RouterProvider router={Approuter}/>
    </div>
    </Provider>
  );
}

export default App;
