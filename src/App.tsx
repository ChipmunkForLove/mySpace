import React from "react";
import {RouterProvider, RouterProviderProps} from "react-router-dom";

type AppProps = {
    router: RouterProviderProps['router'];
}

const App = ({router}:AppProps) =>{
    return (
        <div>
            <RouterProvider router={router}/>
            Hello world! Yunyeong started using react
        </div>
    )
}

export default App