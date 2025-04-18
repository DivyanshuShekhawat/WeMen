# 💼 WeMen — *Justice Beyond Bias*

*A comprehensive platform providing support for men facing false accusations, with enhanced UI/UX and improved accessibility.*

## Chatbot Backend Configuration

This project includes a backend server for handling the chatbot API requests securely. To set up the chatbot:

1. Install dependencies:
```bash
cd server
npm install
```

2. Set up your API key in the `.env` file:
```
OPENROUTER_API_KEY=your_api_key_here
PORT=3000
```

3. Start the server:
```bash
cd server
node server.js
```

For more detailed instructions, see [CHATBOT_README.md](CHATBOT_README.md).

---

## 🌐 Overview

**WeMen** is a safe and empowering platform designed to assist men navigating the complexities of false accusations. This is a **modified version** of the original platform with updated design, modern UI, and better accessibility. Whether you're seeking guidance, legal help, or simply a community that understands, WeMen is here to support you.

---

## 🚀 Features

- 🏠 **Home Page**  
  Overview of the platform and services, now with a clean, modern UI.

- 💬 **Community Forum**  
  Connect with others who have faced similar experiences.

- ⚖️ **Legal Advisory**  
  Access preliminary legal advice through our AI-powered chatbot.

- 📚 **Resources**  
  Browse a curated library of legal guides, case studies, and expert information.

- 👨‍⚖️ **Lawyer Directory**  
  Find experienced legal professionals specializing in false accusation cases.

- 📝 **Case Submission**  
  Securely and anonymously submit your case for assistance.

---

## ✨ Enhancements in This Version

- 🎨 Improved modern color scheme  
- 🧭 Streamlined navigation menu  
- 👥 More prominent "Join Community" CTA  
- 🔒 Simplified "Submit Case" access (available from Home page)  
- 📱 Enhanced mobile responsiveness  
- ♿ Accessibility improvements for better usability  

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript  
- **Firebase** (Authentication, Firestore, Storage)  
- Font Awesome (for icons)

---

## 📁 Project Structure

```
wemen-platform/
├── css/
│   └── styles.css
├── js/
│   ├── auth.js
│   ├── firebase-config.js
│   └── main.js
├── pages/
│   ├── forum.html
│   ├── lawyer-directory.html
│   ├── legal-advice.html
│   ├── resources.html
│   └── submit-case.html
└── index.html
```

---

## ⚙️ Setup & Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/wemen-platform.git
   cd wemen-platform
   ```

2. **Set up Firebase**  
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com).
   - Replace credentials in `js/firebase-config.js`.

3. **Run the app**  
   Open `index.html` in your browser, or deploy to a web server of your choice.

---

## 🤝 Contributing

Contributions are welcome!  
Please feel free to fork the repo, submit a pull request, or open an issue for discussion.

## 🙏 Acknowledgments

- Thanks to all contributors who helped shape the platform.
- Special thanks to legal professionals who provided input and guidance on platform content.

> **WeMen** — *Empowering truth. Delivering justice.*

---

Let me know if you'd like a version with badges (e.g. license, build status, Firebase integration) or markdown anchors for TOC!
