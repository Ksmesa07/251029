export const NAV_ITEMS = [
    {path:"/",label:"首頁",icon:"💒"},
    {path:"/menu",label:"點餐菜單",icon:"🍔"},
    {path:"/about",label:"關於我們",icon:"🎎"},
    {path:"/contact",label:"聯絡我們",icon:"☎"},
];

export const isPathActive = (currentPath,targetPath) => {
    if (targetPath === "/" && currentPath === "/") return true;
    return currentPath === targetPath || currentPath.startsWith(targetPath + "/");
};

