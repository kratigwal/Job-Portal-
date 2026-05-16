// // import React from 'react'
// // import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'
// // import './index.css'
// // import { Toaster } from './components/ui/sonner.jsx'
// // import { Provider } from 'react-redux'
// // import store from './redux/store.js'
// // import { persistStore } from 'redux-persist'
// // import { PersistGate } from 'redux-persist/integration/react'

// // const persistor = persistStore(store);

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <Provider store={store}>
// //       <PersistGate loading={null} persistor={persistor}>
// //         <App />
// //         <Toaster />
// //       </PersistGate>
// //     </Provider>
// //   </React.StrictMode>,
// // )

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { Toaster } from "./components/ui/sonner.jsx";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./redux/store.js"; // ✅ import both

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//         <Toaster />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "./components/ui/sonner.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

// ✅ ADD THIS
import axios from "axios";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);