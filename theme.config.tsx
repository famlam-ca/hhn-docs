import { Globe } from "lucide-react"
import Image from "next/image"
import { DocsThemeConfig } from "nextra-theme-docs"

import EditLink from "./components/edit-link"

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image src="/favicon.ico" alt="logo" height={25} width={25} />
      <p>HHN Docs</p>
    </>
  ),
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
    component: EditLink,
    text: "Edit this page on GitHub →",
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
