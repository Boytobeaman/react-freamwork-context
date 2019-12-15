import React from "react";
//创建Context组件
export const AppContext = React.createContext({
  toggle: () => { }, //向上下文设定一个回调方法
  onAddModel: {},
});