import Footer from '@/components/Footer';
import React from 'react';

const About = () => {
  return (
    <div>
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-center text-3xl font-bold md:text-5xl animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600">About Us</h1>
        <p className="text-lg mb-4 text-black sm:text-base animate-fade-in-up delay-100">
          Welcome to my Health and Fitness blog! My mission is to inspire and empower individuals to lead healthier, happier lives through reliable information, practical tips, and actionable advice.
        </p>
        <p className="text-lg mb-4 text-black sm:text-base animate-fade-in-up delay-100">
          Whether you&apos;re a fitness enthusiast, a beginner looking to start your wellness journey, or someone seeking balanced health tips, I strive to provide content that meets your needs. From workout routines to nutrition guides, mental health strategies to lifestyle changes, I&apos;ve got you covered.
        </p>
        <p className="text-lg mb-4 text-black sm:text-base animate-fade-in-up delay-100">
          I am passionate about promoting a holistic approach to health, combining the physical, mental, and emotional aspects of well-being. I believe that small, consistent changes can lead to transformative results.
        </p>
        <p className="text-lg mb-4 text-black sm:text-base animate-fade-in-up delay-100">
          Thank you for visiting my blog. I hope you find value in my content and join me in the journey towards a healthier, fitter you!
        </p>
        <p className="text-lg font-semibold text-black text-center mt-6 animate-fade-in-up delay-100 hover:text-blue-600">
          <em>Stay healthy, stay fit!</em>
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default About;
