# Personal Finance Dashboard

A web-based application designed to help users track their income and expenses, visualize their financial habits, and manage their personal finances effectively.

## ✨ Features

* **Secure User Authentication:** Users can create an account and log in to manage their private financial data.
* **Transaction Management:** Easily add, view, and delete income or expense transactions.
* **Recurring Transactions:** Set transactions to repeat monthly, which are automatically added for future months.
* **Interactive Dashboard:** At-a-glance summary of total balance, monthly income, monthly expenses, and savings.
* **Data Visualization:**
    * A line chart to compare income vs. expenses over the last 7 months.
    * A doughnut chart to see the breakdown of expenses by category.
* **Transaction History:** View a list of all transactions, with the ability to filter by month and year.
* **Data Persistence:** All user data is securely saved in real-time to a cloud database (Firebase Firestore).
* **Responsive Design:** A clean and modern UI that works on both desktop and mobile devices.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6)
* **Database & Authentication:** Google Firebase (Firestore for database, Firebase Authentication for users)
* **Charting Library:** [Chart.js](https://www.chartjs.org/) for creating beautiful and interactive charts.
* **Styling:**
    * Custom CSS for the main dashboard.
    * [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) for the login and registration pages.
* **Icons:** [Font Awesome](https://fontawesome.com/) for icons.

## 📂 File Structure



.
├── 📄 index.html # The main finance dashboard page.
├── 📄 login.html # User login page.
├── 📄 register.html # User registration page.
├── 📄 style.css # Styles for the main dashboard (index.html).
├── 📄 my-login.css # Styles for the login and register pages.
├── 🖼️ logo.png # The application logo.
├── 📜 script.js # Main JavaScript logic for the dashboard.
├── 📜 my-login.js # JavaScript for handling login and registration forms.
└── 📜 firebaseConfig.js # Configuration file for connecting to Firebase.
## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need a web browser and a code editor.

### Installation

1.  **Clone the repo (or download the files)**
    ```sh
    git clone [https://github.com/your_username/finance-dashboard.git](https://github.com/your_username/finance-dashboard.git)
    ```
2.  **Set up Firebase**
    * Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
    * In your project, go to **Project settings** > **General**.
    * Under "Your apps", click on the web icon (`</>`) to add a new web app.
    * Give your app a nickname and click "Register app".
    * Firebase will provide you with a `firebaseConfig` object. Copy this object.

3.  **Configure the application**
    * In the project's root directory, you'll find a file named `firebaseConfig.js`.
    * Replace the existing content of `firebaseConfig.js` with the `firebaseConfig` object you copied from your Firebase project.

    ```javascript
    // firebaseConfig.js
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();
    ```

4.  **Run the application**
    * Simply open the `login.html` or `register.html` file in your web browser to start.

## Usage

1.  **Create an Account:** Open `register.html` and sign up with your email and password.
2.  **Login:** After registering, you will be redirected to the `login.html` page. Log in with your new credentials.
3.  **Manage Finances:** You will be taken to the main dashboard (`index.html`) where you can start adding and tracking your transactions.
4.  **Save Data:** Click the "Save Data" button to ensure your latest transactions are persisted to the database.

## © Author

- **soxham**

---

Copyright ©2025 soxham
