# 🌍 Landslide Prediction System

An AI-based Landslide Prediction System developed using Machine Learning, Flask, Leaflet.js, Twilio API, and MySQL.  
The system predicts landslide risk levels using environmental parameters such as rainfall, slope, and soil moisture and visualizes risk areas dynamically on an interactive map.

---

# 🚀 Features

✅ Machine Learning Based Prediction  
✅ Interactive Modern UI  
✅ Dynamic Leaflet.js Map Integration  
✅ Real-Time Risk Visualization  
✅ WhatsApp Alert Notifications using Twilio API  
✅ MySQL Database Integration  
✅ Flask Backend API  
✅ Random Forest Classifier Model  
✅ Dynamic Risk Marker Movement  
✅ Real-Time Prediction Results  

---

# 🛠 Technologies Used

| Technology | Purpose |
|---|---|
| Python | Backend & Machine Learning |
| Flask | Backend Web Framework |
| Scikit-learn | Machine Learning Model |
| Pandas | Data Processing |
| NumPy | Numerical Computation |
| Leaflet.js | Interactive Maps |
| OpenStreetMap | Map Tiles |
| Twilio API | WhatsApp Alerts |
| MySQL | Database |
| HTML/CSS/JavaScript | Frontend Development |

---

# 📂 Project Structure

```bash
landslide-prediction/
│
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── app.js
│   │   ├── map.js
│   │   └── prediction.js
│   ├── images/
│   └── pages/
│
├── backend/
│   ├── app.py
│   ├── model/
│   │   ├── landslide_model.pkl
│   │   └── predict.py
│   │
│   ├── routes/
│   │   ├── prediction.py
│   │   ├── alerts.py
│   │   └── map.py
│   │
│   ├── database/
│   │   ├── db_config.py
│   │   └── schema.sql
│   │
│   ├── utils/
│   │   ├── twilio_alert.py
│   │   └── preprocess.py
│   │
│   ├── requirements.txt
│   └── .env
│
├── dataset/
│   └── landslide_data.csv
│
├── ml-training/
│   ├── train_model.py
│   └── training.ipynb
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/landslide-prediction.git
```

---

## 2️⃣ Open Project Folder

```bash
cd landslide-prediction
```

---

## 3️⃣ Create Virtual Environment

```bash
python -m venv venv
```

---

## 4️⃣ Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

---

## 5️⃣ Install Dependencies

```bash
cd backend

pip install -r requirements.txt
```

---

# 🧠 Train Machine Learning Model

Go to training folder:

```bash
cd ../ml-training
```

Run:

```bash
python train_model.py
```

This generates:

```bash
backend/model/landslide_model.pkl
```

---

# 🗄 Database Setup

Open MySQL and create database:

```sql
CREATE DATABASE landslide_db;
```

Run `schema.sql` file.

---

# 🔐 Environment Variables

Create `.env` inside backend folder:

```env
TWILIO_ACCOUNT_SID=YOUR_ACCOUNT_SID
TWILIO_AUTH_TOKEN=YOUR_AUTH_TOKEN
TWILIO_PHONE=whatsapp:+14155238886
RECEIVER_PHONE=whatsapp:+91XXXXXXXXXX
```

---

# ▶️ Run Project

Go to backend folder:

```bash
cd backend
```

Run Flask server:

```bash
python app.py
```

Server runs on:

```bash
http://127.0.0.1:5000
```

---

# 🌐 Open Frontend

Open:

```bash
frontend/index.html
```

using browser or VS Code Live Server.

---

# 📊 System Workflow

```text
User Input
     ↓
Frontend Interface
     ↓
Flask Backend API
     ↓
Machine Learning Model
     ↓
Prediction Result
     ↓
Leaflet.js Map Visualization
     ↓
Twilio WhatsApp Alert
     ↓
Database Storage
```

---

# 📈 Machine Learning Metrics

| Metric | Value |
|---|---|
| Accuracy | 94.5% |
| Precision | 92.8% |
| Recall | 93.6% |
| F1-Score | 93.2% |

---

# 🗺 Map Features

✅ Dynamic Marker Movement  
✅ Risk Zone Visualization  
✅ Color-Based Risk Detection  
✅ Interactive Popup Information  

---

# 📱 WhatsApp Alert System

The system sends automatic WhatsApp alerts using Twilio API whenever a high-risk landslide condition is detected.

Example Alert:

```text
⚠ Warning! High Landslide Risk Detected.
Please stay alert and avoid dangerous areas.
```


---

# 👨‍💻 Developed By

Landslide Prediction Project using:
- Machine Learning
- Flask
- Leaflet.js
- Twilio API
- MySQL

---

# 📄 License

This project is developed for educational and research purposes.