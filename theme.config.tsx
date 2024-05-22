import { Globe } from "lucide-react"
import { DocsThemeConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  logo: <span>HHN Docs</span>,
  banner: {
    dismissible: true,
    text: "Happy Virtualizing!",
    key: "happy_virtualizing",
  },
  project: {
    link: "https://github.com/famlam-ca/hhn-documentation",
  },
  chat: {
    icon: () => <Globe />,
    link: "https://www.famlam.ca",
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  toc: {
    backToTop: true,
  },
  feedback: {
    useLink: () => "https://www.famlam.ca/contact/support",
  },
  gitTimestamp: true, // TODO: Implement this
  docsRepositoryBase: "https://github.com/famlam-ca/hhn-documentation",
  footer: {
    text: "Humble Home Network Documuentation",
  },
}

export default config
