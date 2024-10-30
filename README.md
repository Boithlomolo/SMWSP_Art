
README - SMWSP Art Services Booking
Project Overview
This project is a simple Art Services Booking platform, titled SMWSP Art Services. It allows users to book various art-related services, including Fabric Painting, Drawing, and Tattoos. The platform features a dynamic webpage where users can explore services and submit bookings. The project integrates Node.js with Express.js on the server side, and it sends booking confirmation emails to both the service provider (Admin) and the customer using Nodemailer.

Key Features
Service Booking Form: Users can submit their details to book an art service, including name, phone number, email, service type, and preferred date.
Email Notifications: Automatically sends an email to both the service provider and the user upon successful booking submission.
Responsive Design: The front-end design adapts to different screen sizes.
Service Gallery: Display images related to each service using an image slider.
Technologies Used
Front-End:
HTML5, CSS3 for responsive design and layout.
JavaScript for form validation and dynamic interaction.
Back-End:
Node.js and Express.js for server-side logic.
Nodemailer to send booking confirmation emails to the Admin and the Customer.
body-parser and cors to handle form submissions and enable cross-origin requests.
dotenv for environment variable management.

How to Use
Run the Server: Make sure you have Node.js installed. Run npm install to install dependencies, then start the server using node server.js. Ensure you have a .env file with the following environment variables:
PORT=3000
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
ADMIN_EMAIL=admin@example.com
Book a Service: Visit the homepage and fill out the booking form with your details. The form validates the input and submits the data to the server.

Receive Email Notifications: Both the Admin and the customer will receive an email upon a successful booking submission.

Future Enhancements
Database Integration: Store booking details for future reference and management.
Service Customization: Allow users to upload images or provide more specific instructions for custom services.
Payment Gateway: Integrate an online payment system to allow users to pay for services upfront.
Contact
For any inquiries or issues, feel free to contact us at boithlomolo@gmail.com or call 067 930 9258
