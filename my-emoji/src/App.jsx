import React, { useState } from 'react';
import './App.css';
export default function App() {
  const [mood, setMood] = useState('');
  const handleMood = (emoji) => {
    setMood(emoji);
    };
    const moodText = {
      '😃': 'Happy',
      '😐': 'Neutral',
      '😢': 'Sad',
      '😠': 'Angry',
      '😴': 'Tired',
      '😍': 'Loved',
      '🤩': 'Excited',
      '😒': 'Bored',
      '😎': 'Confident',
      '🥳': 'Celebrating',
      '🤔': 'Thinking',
      '🤗': 'Hugging',
      '😇': 'Blessed',
      '🤯': 'Mind Blown',
      '🥺': 'Pleading',
      '😬': 'Awkward',
      '🤪': 'Goofy',
      '🤤': 'Drooling',
      '😷': 'Sick',
      '🤓': 'Nerdy',
      '🧐': 'Curious',
      '🥱': 'Yawning',
      '💪': 'Strong',
      '💔': 'Heartbroken',
      '😌': 'Relieved',
      '😡': 'Furious',
      '😳': 'Shocked',
      '🤩': 'Starstruck',
      '😻': 'In Love',
      '🥰': 'Adoring',
      '🤫': 'Shh',
      '🤡': 'Clown',
      '🥶': 'Freezing',
      '🥵': 'Sweating',
      '🤧': 'Sneezing',
      '👻': 'Spooky',
      '🎉': 'Party',
      '🚀': 'Boosted',
      '🔥': 'On Fire',
      '💀': 'Dead',
      '👀': 'Watching'
  };
  
    return (
      <div className="app">
      <h1>How are you feeling today?</h1>
      <div className="emoji-options">
      <div>
  <button onClick={() => handleMood('😃')}>😃</button>
  <button onClick={() => handleMood('😐')}>😐</button>
  <button onClick={() => handleMood('😢')}>😢</button>
  <button onClick={() => handleMood('😠')}>😠</button>
  <button onClick={() => handleMood('😴')}>😴</button>
  <button onClick={() => handleMood('😍')}>😍</button>
  <button onClick={() => handleMood('🤩')}>🤩</button>
  <button onClick={() => handleMood('😒')}>😒</button>
  <button onClick={() => handleMood('😎')}>😎</button>
  <button onClick={() => handleMood('🥳')}>🥳</button>
  <button onClick={() => handleMood('🤔')}>🤔</button>
  <button onClick={() => handleMood('🤗')}>🤗</button>
  <button onClick={() => handleMood('😇')}>😇</button>
  <button onClick={() => handleMood('🤯')}>🤯</button>
  <button onClick={() => handleMood('🥺')}>🥺</button>
  <button onClick={() => handleMood('😬')}>😬</button>
  <button onClick={() => handleMood('🤪')}>🤪</button>
  <button onClick={() => handleMood('🤤')}>🤤</button>
  <button onClick={() => handleMood('😷')}>😷</button>
  <button onClick={() => handleMood('🤓')}>🤓</button>
  <button onClick={() => handleMood('🧐')}>🧐</button>
  <button onClick={() => handleMood('🥱')}>🥱</button>
  <button onClick={() => handleMood('💪')}>💪</button>
  <button onClick={() => handleMood('💔')}>💔</button>
  <button onClick={() => handleMood('😌')}>😌</button>
  <button onClick={() => handleMood('😡')}>😡</button>
  <button onClick={() => handleMood('😳')}>😳</button>
  <button onClick={() => handleMood('🤩')}>🤩</button>
  <button onClick={() => handleMood('😻')}>😻</button>
  <button onClick={() => handleMood('🥰')}>🥰</button>
  <button onClick={() => handleMood('🤫')}>🤫</button>
  <button onClick={() => handleMood('🤡')}>🤡</button>
  <button onClick={() => handleMood('🥶')}>🥶</button>
  <button onClick={() => handleMood('🥵')}>🥵</button>
  <button onClick={() => handleMood('🤧')}>🤧</button>
  <button onClick={() => handleMood('👻')}>👻</button>
  <button onClick={() => handleMood('🎉')}>🎉</button>
  <button onClick={() => handleMood('🚀')}>🚀</button>
  <button onClick={() => handleMood('🔥')}>🔥</button>
  <button onClick={() => handleMood('💀')}>💀</button>
  <button onClick={() => handleMood('👀')}>👀</button>
</div>

      </div>
      {mood && (
      <div className="mood-display">
      <p>You’re feeling <strong>{moodText[mood]}</strong> {mood}</p>
      </div>
      )}
      </div>
      );
      }
