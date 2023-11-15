from flask import Flask, render_template
from flask_socketio import SocketIO
from flask_cors import CORS
import random

app = Flask(__name__)

# Apply CORS to Flask app
CORS(app, resources={r"/socket.io/*": {"origins": "*"}})

# Initiate SocketIO with the app
socketio = SocketIO(app, cors_allowed_origins="*")


@app.route('/')
def index():
    return "Chat Server"


@socketio.on('message')
def handle_message(message):
    cnt = random.randint(1, 10)
    print('Received message:', message)
    message = "你的消息是：" + message
    message = "Meow～ " * cnt
    # For this example, we'll just echo the received message back to the client
    socketio.emit('message', message)


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5001,allow_unsafe_werkzeug=True)
