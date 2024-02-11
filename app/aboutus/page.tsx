"use client"
import React from 'react'
import Countdown from 'react-countdown'
// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }:{hours:number, minutes:number, seconds:number, completed:boolean }) => {
  if (completed) {
    // Render a completed state number
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};
const AboutPage = () => {
  return (
    <Countdown date={Date.now() + 10000} renderer={renderer}/>
  )
}

export default AboutPage