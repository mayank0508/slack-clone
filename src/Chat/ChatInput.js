import React, { useState } from 'react';
import './ChatInput.css';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase';


function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();

  const sendMessage = e => {
    e.preventDefault();

    if (channelId) {
        db.collection('rooms').doc(channelId).collection({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),  // this place i can have error plz check the code here
        user: user.displayName,
        userImage: user.photoURL,
        });
    }
  };

    

  return (
    <div className="chatInput">
      <form>
        <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={`Message #${channelName?.toLowerCase()}`} />
        <button type="submit" onClick={sendMessage}>
          SEND 🚀
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
