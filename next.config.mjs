import nextra from "nextra"

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

export default withNextra({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.famlam.ca"
      }
    ]
  }
})
