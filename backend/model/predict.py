import joblib
import numpy as np

model = joblib.load('model/landslide_model.pkl')


def predict_landslide(data):

    data = np.array(data).reshape(1, -1)

    prediction = model.predict(data)

    if prediction[0] == 1:
        return "Landslide Risk"
    else:
        return "No Landslide Risk"