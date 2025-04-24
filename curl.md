curl --location 'http://192.168.1.31:11434/api/chat' \
--header 'Content-Type: application/json' \
--data '{
  "model": "gemma3:12b",
  "messages": [
    {
      "role": "system",
      "content": "You are a senior Agile business analyst. Your task is to extract stories, epics from the users business requirement document and return a JSON structure compatible with Jira ticket creation. Max 5 stories per epic. Each ticket must include: title, detailed description, acceptance criteria, dependencies, and labels."
    },
    {
      "role": "user",
      "content": "Business Requirement Document: Real Estate Brokerage Firm Application\n\nOverview:\nThis application aims to digitize and streamline the operations of a real estate brokerage firm. The platform must enable agents, brokers, administrators, and clients to manage properties, leads, transactions, and commissions efficiently.\n\nModules & Features:\n\n1. **Authentication and Role-Based Access**\n- Admin, Agent, Broker, and Client roles\n- Secure login via email/mobile OTP or OAuth\n- Role-based dashboards\n\n2. **Property Listings Management**\n- Add/Edit/Delete property listings (by agents)\n- Upload images, videos, documents\n- Search, filter, and sort properties\n- Categorize as residential/commercial/rental\n\n3. **Client Management**\n- Create and manage client profiles\n- Tag clients with preferences, budgets, and history\n- Assign clients to agents\n\n4. **Lead Management**\n- Capture and track incoming leads\n- Lead source tagging (e.g., website, campaign, referral)\n- Assign to agents automatically or manually\n\n5. **Communication & Scheduling**\n- Log interactions (calls, emails, messages)\n- Schedule property visits and meetings\n- Reminders and calendar sync\n\n6. **Document Management**\n- Upload legal documents (ownership, registration)\n- Share documents with clients securely\n- Set expiration reminders for contracts\n\n7. **Commission Tracking**\n- Record deals and calculate agent/broker commissions\n- Apply dynamic commission rules\n- Generate monthly/quarterly reports\n\n8. **Admin Dashboard**\n- Real-time analytics: active listings, closed deals, top agents\n- Team performance tracking\n- Commission summaries\n\n9. **Notifications and Alerts**\n- Push/email/SMS for new leads, scheduled visits, deal closures\n- Customizable notification preferences\n\n10. **Audit & Compliance**\n- Change logs for property updates, commission changes\n- Role-based access to sensitive data\n\n11. **Integration Capabilities**\n- CRM (HubSpot, Zoho)\n- WhatsApp, Gmail API\n- Property portals (99acres, MagicBricks)\n\n12. **Mobile and Responsive UI**\n- PWA support\n- Optimized for agents on the move\n\n13. **Wallet/Payment System**\n- Maintain balances for clients and agents\n- Allow partial payments and track dues\n- Ledger view per user\n\n14. **Feedback & Ratings**\n- Allow clients to rate agents/property visits\n- Internal review mechanism\n\n15. **Data Export & Backup**\n- Export leads, clients, transactions\n- Automated daily cloud backup\n\nThis document forms the high-level feature scope. The system will be expanded and maintained with regular feature additions and compliance with evolving business processes."
    }
  ],
  "stream": false
}
'
