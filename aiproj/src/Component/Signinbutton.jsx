import React from 'react';
import styled from 'styled-components';

const SignButton = () => {
  return (
    <StyledWrapper>
      <button>Sign In</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
   appearance: none;
   background-color: transparent;
   border: 0.125em solid #1A1A1A;
   border-radius: 0.9375em;
   box-sizing: border-box;
   color: #3B3B3B;
   cursor: pointer;
   display: inline-block;
   font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
   font-size: 14px;
   font-weight: 600;
   line-height: normal;
   margin: 0;
   min-height: 2.75em;
   min-width: 0;
   outline: none;
   padding: 0.2em 1.3em;
   text-align: center;
   text-decoration: none;
   transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
   user-select: none;
   -webkit-user-select: none;
   touch-action: manipulation;
   will-change: transform;
  }

  button:disabled {
   pointer-events: none;
  }

  button:hover {
   color: #fff;
   background-color: #1A1A1A;
   box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
   transform: translateY(-2px);
  }

  button:active {
   box-shadow: none;
   transform: translateY(0);
  }`;

export default SignButton;
