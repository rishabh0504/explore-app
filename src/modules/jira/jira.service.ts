import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class JiraService {
  private readonly jiraBaseUrl =
    process.env.JIRA_BASE_URL || 'http://localhost:8080/rest/api/2';
  private readonly username = process.env.JIRA_USERNAME || ''; // Jira username
  private readonly password = process.env.JIRA_PASSWORD || ''; // Jira password

  constructor() {
    if (!this.username || !this.password) {
      throw new Error(
        'JIRA_USERNAME and JIRA_PASSWORD must be defined in environment variables',
      );
    }
  }

  /**
   * Create a Jira Ticket
   * @param ticketData - The ticket data that matches the Jira issue creation payload format
   * @returns The response from Jira API after ticket creation
   */
  async createTicket(ticketData: any): Promise<any> {
    try {
      // Ensure the ticketData is valid and in the correct format
      if (
        !ticketData.fields ||
        !ticketData.fields.project ||
        !ticketData.fields.summary
      ) {
        throw new Error('Invalid ticket data provided');
      }

      // Base64 encode the username:password for Basic Authentication
      const authHeader = Buffer.from(
        `${this.username}:${this.password}`,
      ).toString('base64');

      // Make the request to create the Jira ticket
      const response = await axios.post(
        `${this.jiraBaseUrl}/issue`,
        ticketData,
        {
          headers: {
            Authorization: `Basic ${authHeader}`, // Use Basic Authentication header
            'Content-Type': 'application/json', // Set content type to JSON
            Cookie: `JSESSIONID=${process.env.JIRA_SESSION_ID}; `, // Cookie and XSRF token
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error(
        'Error creating Jira ticket:',
        error.response?.data || error.message,
      );
      throw new Error('Error creating Jira ticket: ' + error.message);
    }
  }
}
