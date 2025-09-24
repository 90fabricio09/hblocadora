import { Outlet } from "react-router-dom";
import usePageTracking from "./hooks/usePageTracking";

const App = () => {
    // Ativa o tracking automático de páginas
    usePageTracking();
    
    return (
        <>
            <Outlet />
        </>
    );
};

export default App;