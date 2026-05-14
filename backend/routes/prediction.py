from flask import Blueprint, request, jsonify

from model.predict import predict_landslide

from utils.twilio_alert import send_alert

prediction_bp = Blueprint('prediction', __name__)


@prediction_bp.route('/predict', methods=['POST'])
def predict():

    data = request.json

    rainfall = float(data['rainfall'])
    slope = float(data['slope'])
    soil = float(data['soil'])

    result = predict_landslide([
        rainfall,
        slope,
        soil
    ])

    if result == "Landslide Risk":
       send_alert(
           "Warning! Landslide Risk Detected"
       )

    return jsonify({
        'prediction': result
    })