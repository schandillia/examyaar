// page-header.tsx

import { Heading } from "@/components/heading"
import { Separator } from "@/components/ui/separator"
import React from "react"

interface PageHeaderProps {
  text: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ text }) => {
  return (
    <>
      <Heading>{text}</Heading>
      <Separator className="mb-8" />
    </>
  )
}

export default PageHeader
