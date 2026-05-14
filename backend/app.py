from flask import Flask
from flask_cors import CORS

from routes.prediction import prediction_bp
from routes.alerts import alerts_bp
from routes.map import map_bp

app = Flask(__name__)

CORS(app)

app.register_blueprint(prediction_bp)
app.register_blueprint(alerts_bp)
app.register_blueprint(map_bp)

if __name__ == '__main__':
    app.run(debug=True)