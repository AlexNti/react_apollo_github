import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';


const Wrapper = styled.div`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0; 
 display:flex;
 justify-content:center;
 align-items:center;
 min-height:100vh;
 min-width:100vh;
`;

const Card = styled.div`
    display: flex;
    padding: 24px;
    border-radius: 5px;
    box-shadow: 1px 4px 16px rgba(0,0,0,.4);
    min-height: 300px;
    min-width: 400px;
    background-color: #fbfbfb;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Loading = styled.div`
      position: relative;
      height: 0;
      width: 0;
`;

const loader1Anim = keyframes`
  from,to {
     transform: scale3d(1.15, 0.80, 1);
  }
  42% {
    transform: translateY(-45px) ;
  }
  88%{
    transform: scale3d(1,1,1);
  }
  95%{
    transform:  scale3d(1.05, 0.85, 1);
  }
  98% {
    transform: scale3d(1.15, 0.80, 1);
  }

`;
const LoadingDots = styled.span`
        display: block;
        height: 20px;
        width: 20px;
        background: #61a9ea;
        position: absolute;
        border-radius: 50%;
      
        &:nth-of-type(1){
          left: -40px;
          animation: ${loader1Anim} 1.2s linear;
          animation-delay: 0s;
          animation-iteration-count: infinite;
          animation-direction: forwards;
        }
        &:nth-of-type(2){
          left:-10px;
          animation: ${loader1Anim} 1.2s linear;
          animation-delay: .2s;
          animation-iteration-count: infinite;
          animation-direction: forwards;
        }
        &:nth-of-type(3){
          left: 20px;
          animation: ${loader1Anim} 1.2s linear;
          animation-delay: .4s;
          animation-iteration-count: infinite;
          animation-direction: forwards;
        }
`;

const FullScreenLoading = () => (
  <Wrapper>
    <Card>
      <Loading>
        <LoadingDots />
        <LoadingDots />
        <LoadingDots />
      </Loading>
    </Card>
  </Wrapper>
);

FullScreenLoading.propTypes = {

};

export default FullScreenLoading;
