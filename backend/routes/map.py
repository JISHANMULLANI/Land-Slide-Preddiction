from flask import Blueprint, jsonify

map_bp = Blueprint('map', __name__)


@map_bp.route('/map-data')
def map_data():

    data = {
        'latitude': 18.5204,
        'longitude': 73.8567,
        'risk': 'High'
    }

    return jsonify(data)