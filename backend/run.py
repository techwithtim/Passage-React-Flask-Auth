from app import create_app
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

flask_app = create_app()

if __name__ == '__main__':
    flask_app.run(debug=True)
