import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for message animation
const messageAnimation = keyframes`
  0% { 
    max-height: 100vmax; 
  }
  80% { 
    transform: scale(1.1); 
  }
  100% { 
    transform: scale(1); 
    max-height: 100vmax; 
    overflow: visible; 
    padding-top: 1rem;
  }
`;

const ChatContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;
  height: 13rem;
  font: 1rem/1.5 "Open Sans", Arial;
  color: #313131;   
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    height: 40%;
    width: 100%;
   background: linear-gradient(to bottom, rgb(18, 18, 18) 20%, rgba(255, 255, 255, 0));

  }
`;

const ChatInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
`;

const ChatMessage = styled.div`
  width: 45%;
  display: flex;
  align-items: flex-end;
  transform-origin: 0 100%;
  padding-top: 0;
  transform: scale(0);
  max-height: 0;
  overflow: hidden;
  animation: ${messageAnimation} 0.15s ease-out 0s forwards;
  animation-delay: var(--timeline);

  border-radius: ${({ type }) => (type === 'A' ? '12px 12px 12px 0' : '12px 12px 0 12px')};
  flex-direction: ${({ type }) => (type === 'B' ? 'row-reverse' : 'row')};
  text-align: ${({ type }) => (type === 'B' ? 'right' : 'left')};
  align-self: ${({ type }) => (type === 'B' ? 'flex-end' : 'flex-start')};
  transform-origin: ${({ type }) => (type === 'B' ? '100% 100%' : '0 100%')};

  &::before {
    content: "";
    flex: 0 0 40px;
    aspect-ratio: 1 / 1;
    background: url(${({ type }) => (type === 'A' ? 'https://images.unsplash.com/photo-1556157382-97eda2d62296' : 'https://images.unsplash.com/photo-1630939687530-241d630735df')}) no-repeat center center / cover;
    border-radius: 50%;
  }
`;

const ChatContent = styled.div`
  flex: 0 1 auto;
  padding: 1rem;
  margin: 0 0.5rem;
  background: inherit;
  border-radius: inherit;
  color: #fff;
  background-color: ${({ type }) => (type === 'A' ? '#d8d8d8' : '#1b1f33')};
`;


const Chat = () => {
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    // Total duration of all messages plus a buffer time
    const totalDuration = 30 + 2; // Updated for the new conversation
    const timer = setTimeout(() => {
      setResetKey(prevKey => prevKey + 1);
    }, totalDuration * 1000);

    return () => clearTimeout(timer);
  }, [resetKey]);

  return (
    <>
    <Container>
           <ChatContainer className="chat" style={{  height: "200px"}}>
        <ChatInner className="chat__inner" key={resetKey}>
          <ChatMessage type="A" style={{ '--timeline': '1s' }}>
            <ChatContent className="chat__content">
              <p style={{fontSize:"13px",marginBottom:"0px",textAlign:"left"}}>Hey team, we need to finalize the React components by EOD.</p>
            </ChatContent>
          </ChatMessage>
          <ChatMessage type="B" style={{ '--timeline': '4s' }}>
            <ChatContent className="chat__content">
              <p style={{fontSize:"13px",marginBottom:"0px",textAlign:"left"}}>Got it! I’m wrapping up the authentication flow.</p>
            </ChatContent>
          </ChatMessage>
          <ChatMessage type="A" style={{ '--timeline': '8s' }}>
            <ChatContent className="chat__content">
              <p style={{fontSize:"13px",marginBottom:"0px",textAlign:"left"}}>Perfect. How's the GoLang API coming along?</p>
            </ChatContent>
          </ChatMessage>
          <ChatMessage type="B" style={{ '--timeline': '12s' }}>
            <ChatContent className="chat__content">
              <p style={{fontSize:"13px",marginBottom:"0px",textAlign:"left"}}>It's almost done. Just finishing the endpoints for user data.</p>
            </ChatContent>
          </ChatMessage>
          <ChatMessage type="A" style={{ '--timeline': '16s' }}>
            <ChatContent className="chat__content">
              <p style={{fontSize:"13px",marginBottom:"0px",textAlign:"left"}}>Great! Let's integrate the API with the frontend after lunch.</p>
            </ChatContent>
          </ChatMessage>
          <ChatMessage type="B" style={{ '--timeline': '20s' }}>
            <ChatContent className="chat__content">
              <p style={{fontSize:"13px",marginBottom:"0px",textAlign:"left"}}>Sounds good. I’ll also start writing some unit tests.</p>
            </ChatContent>
          </ChatMessage>
          <ChatMessage type="A" style={{ '--timeline': '24s' }}>
            <ChatContent className="chat__content">
              <p style={{fontSize:"13px",marginBottom:"0px",textAlign:"left"}}>Thanks! Make sure to cover all the edge cases.</p>
            </ChatContent>
          </ChatMessage>
          <ChatMessage type="B" style={{ '--timeline': '28s' }}>
            <ChatContent className="chat__content">
              <p style={{fontSize:"13px",marginBottom:"0px",textAlign:"left"}}>Will do. Let's catch up again at 3 PM.</p>
            </ChatContent>
          </ChatMessage>
          <ChatMessage type="A" style={{ '--timeline': '32s' }}>
            <ChatContent className="chat__content">
              <p style={{fontSize:"13px",marginBottom:"0px",textAlign:"left"}}>Perfect. See you then!</p>
            </ChatContent>
          </ChatMessage>
        </ChatInner>
      </ChatContainer>
    </Container>
   
   
    </>
  );
};

export default Chat;
