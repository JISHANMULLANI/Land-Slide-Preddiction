import pandas as pd

from sklearn.model_selection import train_test_split

from sklearn.ensemble import RandomForestClassifier

import joblib


# Load dataset

data = pd.read_csv('../dataset/landslide_data.csv')


# Features

X = data[['24h_Rainfall_mm', 'Slope_deg', 'Soil_Thickness_m']]

# Target

y = data['Landslide_Label']


# Split dataset

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)


# Train model

model = RandomForestClassifier()

model.fit(X_train, y_train)


# Save model

joblib.dump(model,
            '../backend/model/landslide_model.pkl')

print('Model Trained Successfully')