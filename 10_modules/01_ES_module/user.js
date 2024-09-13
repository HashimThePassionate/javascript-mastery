export default class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    getProfile() {
      return `${this.name} <${this.email}>`;
    }
  
    sendEmail(subject, message) {
      // Simulate sending an email
      console.log(`Sending email to ${this.email}...`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
    }
  }