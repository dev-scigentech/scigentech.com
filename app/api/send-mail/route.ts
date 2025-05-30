import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Initialize SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION || "us-east-1", // Replace with your AWS region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Received data:", data);

    // Extract email details from the request data
    const {name: senderName, email: senderEmail , organization, projectType: subject, message } = data;

        // Create email parameters
    const emailParams = {
      Source: process.env.VERIFIED_SENDER_EMAIL,
      Destination: {
        ToAddresses: [process.env.VERIFIED_RECEIVER_EMAIL],
      },
      Message: {
        Subject: {
          Data: subject || "New Contact Form Submission",
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: `
              <html>
                <head>
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                      line-height: 1.6;
                      color: #333;
                      background-color: #f9f9f9;
                      padding: 20px;
                    }
                    .container {
                      max-width: 600px;
                      margin: 0 auto;
                      background: #ffffff;
                      border: 1px solid #ddd;
                      border-radius: 8px;
                      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                      padding: 20px;
                    }
                    h2 {
                      color: #0056b3;
                    }
                    p {
                      margin: 10px 0;
                    }
                    .footer {
                      margin-top: 20px;
                      font-size: 0.9em;
                      color: #777;
                      text-align: center;
                    }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <h2>New Contact Form Submission</h2>
                    <p><strong>From:</strong> ${senderName || "Anonymous"}</p>
                    <p><strong>Email:</strong> ${senderEmail || "Not provided"}</p>
                    <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
                    <p><strong>Subject:</strong> ${subject || "No subject"}</p>
                    <h3>Message:</h3>
                    <p>${message || "No message provided"}</p>
                    <div class="footer">
                      <p>This email was sent from the Scigentech website contact form.</p>
                    </div>
                  </div>
                </body>
              </html>
            `,
            Charset: "UTF-8",
          },
          Text: {
            Data: `
              New Contact Form Submission
              
              From: ${senderName || "Anonymous"}
              Email: ${senderEmail || "Not provided"}
              Organization: ${organization || "Not provided"}
              Subject: ${subject || "No subject"}
              
              Message:
              ${message || "No message provided"}
              
              This email was sent from the Scigentech website contact form.
            `,
            Charset: "UTF-8",
          },
        },
      },
    };

    // Send the email
    const command = new SendEmailCommand(emailParams);
    const response = await sesClient.send(command);

    console.log("Email sent successfully:", response.MessageId);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      messageId: response.MessageId,
      data: data,
    });

  } catch (error) {
    console.error("Error sending email:", error);
    
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}