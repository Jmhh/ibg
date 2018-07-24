module.exports = {
    base: "/ibg/",
    title: "My的文档",
    description: "Document library",
    themeConfig: {
        nav: [
            { text: "主页", link: "/" },
            { text: "工作笔记", link: "/work/" },
            { text: "学习文档", link: "/learn/" },
            { text: "github", link: "#" },
            // 下拉列表的配置
            {
                text: "Languages",
                items: [
                    { text: "Chinese", link: "/language/chinese" },
                    { text: "English", link: "/language/English" }
                ]
            }
        ],
        sidebar: "auto"
    }
};
