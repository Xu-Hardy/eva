import React, { useState, useEffect, useRef } from 'react';  // Import useRef
import TitleComponent from './TitleComponent';
import socketIOClient from "socket.io-client";
import './App.css';

const ENDPOINT = "https://catgptflask.onrender.com";

function App() {
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [socket, setSocket] = useState(null);
    const chatHistoryRef = useRef(null);  // Create a ref

    useEffect(() => {
        const newSocket = socketIOClient(ENDPOINT);
        setSocket(newSocket);

        newSocket.on('message', (message) => {
            setChatHistory(prevChat => [...prevChat, { type: 'bot', text: message }]);
        });

        return () => newSocket.disconnect();
    }, []);

    useEffect(() => {  // Add this useEffect
        if (chatHistoryRef.current) {
            const element = chatHistoryRef.current;
            element.scrollTop = element.scrollHeight;
        }
    }, [chatHistory]);

    const sendMessage = () => {
        setChatHistory(prevChat => [...prevChat, { type: 'user', text: message }]);
        socket.emit('message', message);
        setMessage("");
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="App">
            <div className="chatWindow">
                <TitleComponent />
                <div className="chatHistory" ref={chatHistoryRef}>
                    {chatHistory.map((msg, index) => (
                        <div key={index} className={`chatMessage ${msg.type}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="chatControls">
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="输入消息..."
                    />
                    <button onClick={sendMessage}>发送</button>
                </div>
            </div>
        </div>
    );
}

export default App;
