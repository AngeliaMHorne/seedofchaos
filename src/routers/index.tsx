import { FC } from "react";
import React = require("react");
import { Routes, Route } from "react-router-dom";
import { AppHome, AngeliaHome } from "../pages/Home";

export const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<AppHome />} />
        </Routes>
    );
};

export const AngeliaRouter: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<AngeliaHome />} />
        </Routes>
    );
};