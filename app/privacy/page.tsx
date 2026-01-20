import type { Metadata } from "next"
import LegalLayout from "@/components/legal/legal-layout"
import PrivacyContent from "@/content/legal/privacy.mdx"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how NQB8 Software Development Services collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="January 2025">
      <PrivacyContent />
    </LegalLayout>
  )
}
