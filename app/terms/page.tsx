import type { Metadata } from "next"
import LegalLayout from "@/components/legal/legal-layout"
import TermsContent from "@/content/legal/terms.mdx"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the Terms of Service for NQB8 Software Development Services, including website use and service agreements.",
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="January 2025">
      <TermsContent />
    </LegalLayout>
  )
}
