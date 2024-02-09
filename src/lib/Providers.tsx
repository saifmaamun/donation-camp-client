"use client";
import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AntdRegistry>{children}</AntdRegistry>
    </Provider>
  );
};

export default Providers;
