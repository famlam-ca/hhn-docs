import React from "react"

import styles from "./edit-link.module.css"

const EditLink = ({ filePath, children }) => {
  const repoUrl = `https://github.com/famlam-ca/hhn-documentation/blob/main/${filePath}`

  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.editLink}`}>
      {children || "Edit this page on GitHub"}
    </a>
  )
}

export default EditLink
