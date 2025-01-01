import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-50 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600">
          Ramsha Fawad : Navigating the secrets of Health and Fitness Blog!
        </h2>
        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-16 animate-fade-in-up delay-100">
        Welcome to my Health and Fitness blog! This platform is dedicated to empowering you with the knowledge and inspiration needed to embrace a healthier and more balanced lifestyle. From tips on nutrition and effective workout routines to insights on mental well-being, my goal is to make your fitness journey enjoyable and sustainable. Whether you are just starting or looking to refine your health practices, you will find valuable resources and motivation here. Let&apos;s embark on this journey toward a fitter, happier you!
        </p>
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">Exploring Our Categories</h1>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-col-6 animate-fade-in-up delay-100">
            {[
              "Nutrition and Diet",
              "Exercise and Workouts",
              "Mental Health and Wellness",
              "Weight Management",
              "Lifestyle and Habits",
              "Sports and Physical Activities",
              "Health Conditions and Fitness",
              "Technology and Fitness",
              "Motivation and Inspiration",
            ].map((category, index) => (
              <div key={index}
              className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600">
         <p className="text-center text-lg font-semibold">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
