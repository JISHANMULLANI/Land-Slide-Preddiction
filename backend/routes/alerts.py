from flask import Blueprint, jsonify

alerts_bp = Blueprint('alerts', __name__)


@alerts_bp.route('/alerts')
def alerts():

    return jsonify({
        'message': 'Alert Route Working'
    })