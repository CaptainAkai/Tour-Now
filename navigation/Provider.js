import React from "react";
import { AuthProvider } from "./AuthProvider";
import { Routes } from "./Routes";
import { StatusBar } from "react-native";
 
export const Provider = () => {
  return (
    <AuthProvider>
    <StatusBar hidden={true}></StatusBar>
      <Routes />
    </AuthProvider>
  );
};