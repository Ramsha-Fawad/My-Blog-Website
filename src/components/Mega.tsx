import React from "react";
import BlogCard from "../components/BlogCard";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title:
        "The Science Behind a Balanced Diet: Fueling Your Body for Optimal Performance",
      description:
        "A balanced diet provides the nutrients your body needs to function effectively. It includes carbohydrates, proteins, fats, vitamins, and minerals in the right proportions. This blog explains how each component contributes to energy levels, immune function, and overall health. Learn tips for creating a diet plan that suits your lifestyle and fitness goals.",
      date: "2024-12-28",
      image: "../images/blog1.jpg",
    },
    {
      id: "2",
      title:
        "Top 10 Exercises for Full-Body Fitness: A Guide for Beginners and Experts",
      description:
        "Achieving full-body fitness does not require complicated routines. This blog highlights 10 essential exercises like squats, push-ups, planks, and burpees that target multiple muscle groups. Whether you are a beginner or an experienced athlete, these moves will help you build strength, endurance, and flexibility.",
      date: "2024-12-28",
      image: "../images/blog2.jpg",
    },
    {
      id: "3",
      title:
        "Mental Health and Fitness: How Exercise Boosts Your Mood and Reduces Stress",
      description:
        "Physical activity is not just for the body—it is a powerful tool for mental well-being. Discover how regular exercise releases endorphins, reduces anxiety, and improves focus. From yoga to jogging, this blog explores activities that promote a healthy mind and body connection.",
      date: "2024-12-28",
      image: "../images/blog3.jpg",
    },
    {
      id: "4",
      title: "The Importance of Sleep in Achieving Your Health Goals",
      description:
        "Sleep is often overlooked in fitness journeys, yet it plays a critical role in muscle recovery, metabolism, and mental clarity. This blog discusses how poor sleep impacts your health and provides tips for establishing a restful nighttime routine to support your fitness progress.",
      date: "2024-12-28",
      image: "../images/blog4.jpg",
    },
    {
      id: "5",
      title:
        "Building a Sustainable Workout Routine: Tips for Long-Term Success",
      description:
        "Consistency is key to achieving fitness goals. This blog offers practical advice on designing a workout routine that fits your schedule, keeps you motivated, and prevents burnout. Learn about setting realistic goals, incorporating rest days, and tracking your progress effectively.",
      date: "2024-12-28",
      image: "../images/blog5.jpg",
    },
    {
      id: "6",
      title: "The Role of Hydration in Maintaining Peak Physical Health",
      description:
        "Water is vital for nearly every function in your body, from regulating temperature to transporting nutrients. This blog explores how staying hydrated enhances athletic performance, aids digestion, and supports overall health. Get tips for maintaining optimal hydration levels throughout your day.",
      date: "2024-12-28",
      image: "../images/blog6.jpg",
    },
    {
      id: "7",
      title:
        "Fitness Myths Debunked: Separating Facts from Fiction in Health Trends",
      description:
        "With so much information online, it is easy to fall for fitness myths. This blog busts common misconceptions like spot reduction, the dangers of carbs, or the need for expensive equipment. Discover evidence-based truths to make smarter health and fitness choices.",
      date: "2024-12-28",
      image: "../images/blog7.jpg",
    },
    {
      id: "8",
      title:
        "The Impact of Gut Health on Overall Fitness: Foods and Habits to Improve Digestion",
      description:
        "Your gut plays a vital role in overall fitness and health. A healthy gut improves nutrient absorption, energy levels, and immunity. This blog explores gut-friendly foods like yogurt, fermented vegetables, and fiber-rich fruits, along with habits like staying hydrated and reducing stress, to promote better digestion and enhance fitness.",
      date: "2024-12-28",
      image: "../images/blog8.jpg",
    },
    {
      id: "9",
      title:
        "The Benefits of Functional Training: Preparing Your Body for Everyday Movements",
      description:
        "Functional training focuses on exercises that mimic everyday activities, improving strength, flexibility, and balance. This blog highlights the importance of incorporating movements like squats, lunges, and pushes to enhance daily functionality and prevent injuries, making fitness practical and sustainable.",
      date: "2024-12-28",
      image: "../images/blog9.jpg",
    },
    {
      id: "10",
      title:
        "How to Stay Fit While Traveling: Portable Workouts and Healthy Eating Tips",
      description:
        "Traveling does not have to derail your fitness goals. This blog shares quick workouts, like bodyweight exercises and resistance band routines, that require minimal space. It also offers tips on selecting healthy meals and staying hydrated while on the go.",
      date: "2024-12-28",
      image: "../images/blog10.jpg",
    },
    {
      id: "11",
      title:
        "Strength Training vs. Cardio: Finding the Right Balance for Your Fitness Goals",
      description:
        "Strength training builds muscle and boosts metabolism, while cardio improves heart health and burns calories. This blog discusses the benefits of both and offers guidance on combining them to achieve balanced fitness tailored to your specific goals.",
      date: "2024-12-28",
      image: "../images/blog11.jpg",
    },
    {
      id: "12",
      title:
        "The Connection Between Fitness and Longevity: How Exercise Extends Your Life",
      description:
        "Regular exercise does not just enhance your current health—it can also add years to your life. This blog explores how activities like walking, strength training, and yoga reduce the risk of chronic diseases, improve mental health, and promote longevity.",
      date: "2024-12-28",
      image: "../images/blog12.jpg",
    },
    {
      id: "13",
      title:
        "Stress Eating and Fitness: Strategies to Break the Cycle and Stay Healthy",
      description:
        "Stress eating can sabotage your fitness goals. This blog offers strategies to manage emotional eating, such as mindfulness techniques, healthier snack options, and incorporating physical activities like yoga or jogging to reduce stress and maintain a balanced lifestyle.",
      date: "2024-12-28",
      image: "../images/blog13.jpg",
    },
    {
      id: "14",
      title:
        "Adapting Your Fitness Routine to Different Life Stages: A Comprehensive Guide",
      description:
        "Fitness needs change with age. This blog provides insights into tailoring your workout routine to suit different life stages, from high-intensity training in youth to strength-focused exercises in midlife and flexibility-enhancing activities in older adulthood.",
      date: "2024-12-28",
      image: "../images/blog14.jpg",
    },
    {
      id: "15",
      title:
        "The Power of Stretching: Enhancing Flexibility and Preventing Injuries",
      description:
        "Stretching is often overlooked but essential for flexibility, mobility, and injury prevention. This blog delves into the science behind dynamic and static stretching, explaining how incorporating them into your fitness routine can improve performance and overall well-being.",
      date: "2024-12-28",
      image: "../images/blog15.jpg",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        {" "}
        Exploring in the Health and Fitness World
      </h1>
      <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
