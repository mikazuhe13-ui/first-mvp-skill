export default {
  title: "FirstMVPSkill",
  description: "Ship your first AI MVP with agents.",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "快速入门", link: "/quick-start" },
      { text: "完整指南", link: "/guide" },
      { text: "API 参考", link: "/api-reference" },
      { text: "FAQ", link: "/faq" }
    ],
    sidebar: [
      {
        text: "Start",
        items: [
          { text: "Overview", link: "/" },
          { text: "快速入门", link: "/quick-start" },
          { text: "错误处理", link: "/troubleshooting" }
        ]
      },
      {
        text: "Use",
        items: [
          { text: "完整使用指南", link: "/guide" },
          { text: "API 参考", link: "/api-reference" },
          { text: "常见问题", link: "/faq" }
        ]
      },
      {
        text: "Maintain",
        items: [
          { text: "贡献指南", link: "/contributing" },
          { text: "Commit Convention", link: "/commit-convention" },
          { text: "Writing Standards", link: "/writing-standards" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/mikazuhe13-ui/first-mvp-skill" }
    ]
  }
};
