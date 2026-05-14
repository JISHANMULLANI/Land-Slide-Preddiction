import mysql.connector


def get_connection():

    connection = mysql.connector.connect(
        host='localhost',
        user='root',
        password='student',
        database='landslide_db'
    )

    return connection