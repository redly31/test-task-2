import { Outlet } from "react-router-dom";
import Header from "../widgets/header/Header";

export const AppLayout = () => {
    return (
        <main>
            <Header/>
            <Outlet/>
        </main>
    );
}