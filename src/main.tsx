import {ReactDOM} from "react";
import {routes} from "./pages/routes";
import { createBrowserRouter } from 'react-router-dom';
import App from "./App";

const run = async() => {
    const root = ReactDOM.createRoot(document.getElementById('root')!);
    const router = createBrowserRouter(routes);
    root.render(<App router={router}/>);
}

run();