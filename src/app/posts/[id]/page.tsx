"use client";

import React from 'react';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';
import Footer from '@/components/Footer';

const posts = [
  {
    id: "1",
      title:
        "The Science Behind a Balanced Diet: Fueling Your Body for Optimal Performance",
      description:
        "A balanced diet is essential for fueling your body and supporting optimal performance, both mentally and physically. At its core, a balanced diet involves consuming the right proportions of macronutrients—carbohydrates, proteins, and fats—as well as micronutrients such as vitamins and minerals, which are vital for various bodily functions. Carbohydrates are the primary source of energy for our body, providing glucose that fuels the brain and muscles during physical activity and daily tasks. For sustained energy, it is important to focus on complex carbohydrates found in whole grains, vegetables, and legumes, as they provide a slow, steady release of energy, unlike simple sugars, which can cause energy spikes followed by crashes. Protein, on the other hand, is crucial for repairing and building tissues, especially muscle. It also supports immune function and enzyme production. Incorporating high-quality protein sources such as lean meats, fish, eggs, dairy, and plant-based options like beans and lentils ensures that the body has the building blocks necessary for recovery and growth. Healthy fats, including those from avocados, nuts, seeds, and olive oil, play an essential role in hormone regulation, brain function, and protecting organs. These fats also aid in the absorption of fat-soluble vitamins like A, D, E, and K, which are vital for overall health. Micronutrients, though needed in smaller quantities, are equally important. Vitamins and minerals help regulate processes like energy production, bone health, and immune defense. For instance, calcium and vitamin D are crucial for bone strength, while iron supports oxygen transport in the blood. Additionally, antioxidants from fruits and vegetables protect against oxidative stress, reducing the risk of chronic diseases. Hydration is another key aspect of a balanced diet, as water is essential for digestion, nutrient absorption, and maintaining body temperature. A well-balanced diet not only enhances physical performance by ensuring that the body receives adequate nutrition to perform daily activities but also supports mental clarity, focus, and emotional well-being. By prioritizing nutrient-dense, whole foods over processed options, individuals can optimize their health and energy levels, improve cognitive function, and maintain a healthy weight. Ultimately, the science behind a balanced diet underscores its role as the foundation of a healthy lifestyle, powering the body and mind for long-term vitality and success.",
      image: "../images/blog1.jpg",
  },
  {
    id: "2",
    title:
      "Top 10 Exercises for Full-Body Fitness: A Guide for Beginners and Experts",
    description:
      "Achieving full-body fitness requires a balanced workout routine that targets all major muscle groups, enhances cardiovascular health, and improves flexibility and coordination. Whether you are a beginner or an expert, there are several effective exercises that can help you build strength, endurance, and mobility. Squats are a fundamental exercise that targets the lower body, especially the quads, hamstrings, and glutes, while also engaging the core for stability. Push-ups are a classic upper-body exercise that works the chest, shoulders, and triceps, while also activating the core to maintain proper form. Deadlifts are a powerful movement that targets the back, glutes, and hamstrings, promoting strength in the posterior chain and improving posture. Lunges, whether forward, reverse, or lateral, are excellent for building lower-body strength and balance, working the quads, hamstrings, and glutes. Pull-ups or their modified version, assisted pull-ups, are essential for developing upper-body strength, focusing on the back, biceps, and shoulders. Planks are a core-strengthening exercise that also engages the glutes and shoulders, promoting stability and improving overall posture. Burpees combine a squat, jump, and push-up, making them a full-body exercise that increases heart rate and helps with cardiovascular conditioning, agility, and strength. Kettlebell swings are a dynamic movement that targets the hips, glutes, and core, while also providing a great cardiovascular challenge. Mountain climbers are a great way to improve agility and core strength, while engaging the shoulders, arms, and legs. Finally, jumping jacks are a simple yet effective cardio exercise that also helps to improve coordination and endurance. Incorporating a mix of these exercises into your workout routine, whether in the form of circuits, intervals, or strength-focused sessions, can provide comprehensive benefits for both beginners and experts. For beginners, it is important to start with bodyweight variations of these exercises to build proper form and avoid injury. As you progress, adding resistance, weights, or more advanced variations can increase the challenge and continue to promote fitness gains. By combining strength training, cardiovascular exercises, and core work, these top 10 exercises help you develop a balanced, full-body fitness routine that enhances overall health and performance.",
    image: "../images/blog2.jpg",
  },
  {
    id: "3",
    title:
      "Mental Health and Fitness: How Exercise Boosts Your Mood and Reduces Stress",
    description:
      "Mental health and fitness are deeply interconnected, with exercise playing a pivotal role in enhancing mood and alleviating stress. Physical activity stimulates the release of endorphins, often called FEEL GOOD HORMONES, which act as natural mood elevators, reducing feelings of anxiety and depression. Regular exercise also lowers levels of stress hormones such as cortisol, creating a calming effect on the mind. Engaging in physical activity, whether through a brisk walk, yoga session, or strength training, improves blood flow to the brain, supporting cognitive function and emotional resilience. It promotes better sleep patterns, which are crucial for mental clarity and overall well-being. Activities like running or cycling can serve as a form of meditation, helping individuals focus on rhythmic movement and providing a break from intrusive thoughts. Group exercises, such as team sports or fitness classes, foster social connections that combat feelings of isolation and loneliness, further enhancing emotional health. Moreover, the sense of accomplishment from setting and achieving fitness goals boosts self-esteem, encouraging a positive self-image and greater confidence. Even short bouts of exercise can have an immediate uplifting effect, making it a powerful tool for managing everyday stress. The mind-body connection is also strengthened through practices like yoga and tai chi, which integrate physical movement with mindful breathing and relaxation techniques, creating a holistic approach to managing mental health challenges. By incorporating regular exercise into daily life, individuals can cultivate a healthier, more balanced state of mind, harnessing its transformative power to navigate stresses of life with greater ease and resilience.",
    image: "../images/blog3.jpg",
  },
  {
    id: "4",
    title: "The Importance of Sleep in Achieving Your Health Goals",
    description:
      "Sleep is a cornerstone of overall health and well-being, playing a vital role in achieving fitness and health goals. Often overlooked, quality sleep is as crucial as nutrition and exercise in supporting the body’s restorative processes. During sleep, the body repairs tissues, builds muscle, and synthesizes essential hormones, including those responsible for regulating appetite and metabolism. Poor sleep disrupts these processes, leading to hormonal imbalances that can increase cravings for unhealthy foods and hinder weight management efforts. Additionally, lack of sleep impairs cognitive functions like memory, focus, and decision-making, which are critical for maintaining motivation and consistency in pursuing health goals. For individuals aiming to improve physical performance, deep sleep is particularly important as it enhances energy reserves, supports muscle recovery, and reduces the risk of injuries. On the other hand, insufficient sleep can elevate stress levels by increasing cortisol production, which not only hampers fat loss but also weakens the immune system. Sleep is also closely tied to mental health; restful nights enhance mood and emotional stability, creating a positive mindset essential for adhering to long-term health strategies. Developing a consistent sleep routine that includes 7-9 hours of uninterrupted rest, a calming pre-bedtime ritual, and a sleep-conducive environment can significantly improve sleep quality. Limiting exposure to screens before bed, maintaining a dark and quiet sleeping space, and adhering to a regular schedule are simple yet effective strategies. By prioritizing sleep, you give your body the foundation it needs to recover, regenerate, and perform at its best, ensuring sustainable progress toward your health and fitness aspirations.",
    image: "../images/blog4.jpg",
  },
  {
    id: "5",
    title:
      "Building a Sustainable Workout Routine: Tips for Long-Term Success",
    description:
      "Building a sustainable workout routine is key to achieving long-term success in fitness and overall health. A routine that aligns with your lifestyle, goals, and interests not only ensures consistency but also prevents burnout and keeps you motivated over time. The foundation of sustainability is setting realistic and achievable goals that reflect your current fitness level while allowing room for gradual progress. Begin with activities you enjoy, as they are more likely to become habits. Incorporating variety, such as alternating between strength training, cardio, and flexibility exercises, prevents boredom and reduces the risk of overuse injuries. Start with shorter, manageable sessions and gradually increase intensity and duration as your stamina improves, giving your body time to adapt. Prioritizing rest days is equally important, as recovery allows muscles to repair and grow stronger, preventing fatigue and injury. Consistency outweighs intensity; even a 20-minute session is valuable if done regularly. Time management is crucial, so schedule workouts like any other important appointment to create accountability. Tracking progress, whether through apps, journals, or wearable devices, can help you stay motivated and recognize milestones. It is also essential to remain flexible; life events may disrupt your routine, but adaptability ensures you can resume without feeling discouraged. Nutrition, hydration, and sufficient sleep are integral companions to your workouts, supporting energy levels and recovery. Seeking support from friends, workout partners, or fitness communities fosters a sense of camaraderie and shared commitment, making exercise more enjoyable. Remember that setbacks are a natural part of the journey, and focusing on long-term consistency rather than short-term perfection will keep you on track. By integrating these strategies, you can create a workout routine that not only supports your fitness goals but also becomes a lasting and rewarding part of your lifestyle.",
    image: "../images/blog5.jpg",
  },
  {
    id: "6",
    title: "The Role of Hydration in Maintaining Peak Physical Health",
    description:
      "Hydration plays a fundamental role in maintaining peak physical health, influencing nearly every system in the body. Water makes up a significant portion of body weight and is essential for processes such as temperature regulation, nutrient transport, and waste elimination. Staying adequately hydrated ensures that your muscles, joints, and tissues function optimally, which is particularly important during physical activity. When you exercise, your body loses water through sweat, and failing to replace these fluids can lead to dehydration, causing fatigue, muscle cramps, and impaired performance. Even mild dehydration can affect cognitive functions like focus and decision-making, which are critical for safe and effective workouts. Hydration also supports cardiovascular health by aiding blood circulation, ensuring oxygen and nutrients reach your cells efficiently. Beyond physical performance, proper hydration impacts digestion, skin health, and energy levels. Drinking enough water helps maintain a healthy metabolism, facilitating weight management and detoxification. Factors like climate, activity level, and individual body composition influence daily hydration needs, but a general rule of thumb is to drink about 8-10 cups of water per day, adjusting as needed for strenuous activity or hot weather. Including electrolyte-rich beverages or foods, such as fruits and vegetables, can be beneficial after intense exercise to replenish lost minerals like sodium and potassium. Monitoring signs of dehydration, such as dark urine, dry mouth, or dizziness, can help you stay ahead of potential issues. Developing simple habits, such as carrying a water bottle, setting reminders to drink, or starting meals with a glass of water, can make hydration a seamless part of your daily routine. By prioritizing hydration, you enhance not only your physical performance but also your overall well-being, enabling your body to function at its best and supporting long-term health.",
    image: "../images/blog6.jpg",
  },
  {
    id: "7",
    title:
      "Fitness Myths Debunked: Separating Facts from Fiction in Health Trends",
    description:
      "In the world of health and fitness, myths and misconceptions often overshadow evidence-based practices, making it essential to separate facts from fiction. One common myth is that spot reduction, or targeting fat loss in specific areas of the body through exercise, is effective. In reality, fat loss occurs systematically, and a combination of consistent cardio, strength training, and a balanced diet is needed to reduce overall body fat. Another pervasive belief is that lifting weights makes women bulky, which is misleading. Strength training helps tone muscles, improve metabolism, and enhance overall physique without causing excessive muscle growth due to hormonal differences. Similarly, the idea that you must exercise for hours daily to see results is a myth; shorter, high-intensity workouts can be equally effective when combined with proper recovery. The notion that carbs are the enemy has also been debunked, as carbohydrates are an essential energy source, especially for active individuals. Instead of avoiding them entirely, choosing whole grains and complex carbs is key. Another misconception is that sweating more equates to a better workout or more fat loss; in truth, sweat is a measure of body temperature regulation, not calorie expenditure. Detox diets and cleanses are also widely misunderstood; the body has its own efficient detoxification system through the liver and kidneys, and these extreme diets often lack scientific backing. Rest and recovery are often overlooked, with some believing that taking days off hinders progress, but rest is critical for muscle repair and growth. Even the idea that you need expensive equipment or gym memberships to get fit is not true; bodyweight exercises and simple tools like resistance bands can deliver excellent results. By understanding these facts, individuals can make informed decisions, avoiding the pitfalls of fitness myths and embracing sustainable, science-based practices to achieve their health goals.",
    image: "../images/blog7.jpg",
  },
  {
    id: "8",
    title:
      "The Impact of Gut Health on Overall Fitness: Foods and Habits to Improve Digestion",
    description:
      "Gut health plays a crucial role in overall fitness, influencing everything from digestion and immune function to mental well-being and energy levels. A balanced gut microbiome, which consists of trillions of bacteria, helps break down food, absorb nutrients, and regulate metabolism. When gut health is compromised, it can lead to digestive issues like bloating, constipation, or diarrhea, making it harder for the body to absorb the nutrients needed for optimal performance and recovery. In addition, an imbalanced gut microbiome has been linked to increased inflammation, which can hinder muscle repair and growth. To support gut health, incorporating fiber-rich foods like fruits, vegetables, whole grains, and legumes is essential, as they act as prebiotics, feeding beneficial gut bacteria. Probiotic-rich foods such as yogurt, kefir, kimchi, and sauerkraut introduce live beneficial bacteria that promote a healthy gut environment. Healthy fats, like those from avocados, olive oil, and fatty fish, also support gut health by reducing inflammation and providing essential nutrients. Staying hydrated is equally important, as water aids in digestion and helps maintain the balance of beneficial bacteria. It is also important to avoid or limit processed foods, refined sugars, and artificial additives, which can disrupt the gut microbiome and contribute to inflammation. Regular physical activity not only supports cardiovascular and muscle health but also promotes the growth of beneficial gut bacteria. Sleep, too, plays a significant role in gut health; poor sleep has been shown to negatively impact the gut microbiome and, in turn, digestion and overall fitness. Managing stress through relaxation techniques, mindfulness, or yoga can further improve gut health by reducing the impact of stress hormones on digestion. By adopting a holistic approach that includes gut-friendly foods, regular exercise, adequate sleep, and stress management, individuals can improve their digestion, boost energy levels, and enhance their fitness journey, creating a strong foundation for long-term health.",
    image: "../images/blog8.jpg",
  },
  {
    id: "9",
    title:
      "The Benefits of Functional Training: Preparing Your Body for Everyday Movements",
    description:
      "Functional training is a type of exercise that focuses on movements mimicking everyday tasks, helping to improve ability of the body to perform common activities with greater ease and efficiency. Unlike traditional workouts that often isolate specific muscle groups, functional training involves multi-joint exercises that engage several muscle groups at once, enhancing coordination, balance, and flexibility. By training the body to move as a whole, functional exercises build strength in the muscles and joints used in daily life, such as squatting, bending, lifting, and twisting. This type of training prepares the body for real-world activities, reducing the risk of injury and improving posture and stability. Functional exercises like lunges, kettlebell swings, squats, and push-ups not only improve strength but also increase cardiovascular endurance, enhance mobility, and develop core stability, all of which are essential for performing routine tasks like carrying groceries, lifting children, or bending to tie your shoes. Moreover, functional training can be adapted to various fitness levels, making it an effective choice for both beginners and seasoned athletes. For those looking to improve balance and agility, functional exercises like step-ups or medicine ball throws challenge the body to stabilize and react to different movements, leading to better overall coordination. Another significant benefit of functional training is its efficiency; by incorporating full-body movements, individuals can achieve a complete workout in a shorter period, making it ideal for those with busy schedules. As it targets both strength and cardiovascular fitness, it supports fat loss while simultaneously building lean muscle, helping to create a toned and strong physique. Additionally, functional training is beneficial for mental health, as mastering complex movements and improving physical capabilities can boost confidence and self-esteem. By making functional exercises a regular part of your fitness routine, you are not only improving your athletic performance but also enhancing your ability to move freely, perform daily activities with less discomfort, and enjoy a higher quality of life.",
    image: "../images/blog9.jpg",
  },
  {
    id: "10",
    title:
      "How to Stay Fit While Traveling: Portable Workouts and Healthy Eating Tips",
    description:
      "Staying fit while traveling can be challenging, but with the right strategies, it is entirely possible to maintain your fitness routine and healthy eating habits on the go. One of the best ways to stay active while traveling is by incorporating portable workouts that require minimal or no equipment. Bodyweight exercises like squats, push-ups, lunges, and planks can be done in your hotel room, at the park, or even in a small hotel gym. High-intensity interval training (HIIT) is also a great option for travelers, as it can be completed in as little as 20-30 minutes and delivers excellent cardiovascular and strength benefits. If you have access to resistance bands or dumbbells, exercises like banded squats, rows, and shoulder presses can further enhance your workout, targeting various muscle groups. Yoga is another fantastic option for travel, as it can be practiced anywhere and helps improve flexibility, reduce stress, and increase strength. In addition to staying active, healthy eating while traveling requires some planning and smart choices. Many airports and restaurants offer healthier food options, such as salads, grilled meats, or wraps, so it is important to opt for these instead of high-calorie, processed foods. Packing your own snacks, like nuts, fruits, and protein bars, can help you avoid unhealthy temptations and keep your energy levels up. Staying hydrated is crucial, especially when traveling across time zones, so always carry a water bottle with you and refill it throughout the day. If you are staying in a hotel with a kitchenette, consider preparing simple meals like salads, smoothies, or grilled chicken, which can save you from relying on less nutritious options. Another tip is to try local fruits and vegetables, which not only provide fresh, nutrient-rich options but also give you a taste of the local culture. Managing portion sizes is important too—while it is tempting to indulge in local delicacies, it is best to enjoy them in moderation and balance them with healthier choices. Lastly, make time for short walks or exploring the city on foot, which can be a great way to stay active and see the sights. By planning ahead, staying mindful of your food choices, and fitting in quick workouts, you can maintain your fitness and health goals while traveling, ensuring you feel energized and ready for your adventures.",
    image: "../images/blog10.jpg",
  },
  {
    id: "11",
    title:
      "Strength Training vs. Cardio: Finding the Right Balance for Your Fitness Goals",
    description:
      "When it comes to achieving your fitness goals, understanding the balance between strength training and cardio is key to maximizing results and improving overall health. Strength training focuses on building muscle, increasing strength, and improving metabolic rate by stimulating muscle fibers to grow and adapt to resistance. It is effective for toning the body, enhancing bone density, and promoting fat loss through the increase in lean muscle mass. On the other hand, cardio exercises, such as running, cycling, or swimming, are excellent for boosting heart health, improving endurance, and burning calories during workouts. Cardiovascular exercise also helps improve lung capacity and can aid in weight management by creating a calorie deficit. However, the two should not be viewed as mutually exclusive; in fact, the most effective fitness programs integrate both strength training and cardio for a well-rounded approach to health and fitness. The ideal balance depends on individual goals and preferences. If your goal is to build muscle and strength, prioritize strength training with some cardio for overall cardiovascular health. If you are aiming for weight loss or improving endurance, you might focus more on cardio but include strength training to ensure you are maintaining muscle mass while losing fat. Incorporating both types of exercise can prevent plateaus, reduce the risk of injury by promoting flexibility and joint health, and enhance overall physical performance. For example, alternating between strength training days and cardio days allows the body to recover and reduce fatigue while still achieving fitness goals. Additionally, incorporating high-intensity interval training (HIIT), which combines short bursts of intense cardio with strength exercises, can be a time-efficient way to get the benefits of both in a single session. Ultimately, finding the right balance between strength training and cardio depends on personal preferences, fitness level, and specific objectives, but integrating both components into your routine is a surefire way to achieve a strong, healthy, and well-conditioned body.",
    image: "../images/blog11.jpg",
  },
  {
    id: "12",
    title:
      "The Connection Between Fitness and Longevity: How Exercise Extends Your Life",
    description:
      "The connection between fitness and longevity is undeniable, with regular exercise playing a critical role in extending lifespan and improving quality of life. Studies consistently show that staying physically active reduces the risk of chronic diseases such as heart disease, diabetes, and certain types of cancer, which are major contributors to premature death. Exercise helps maintain a healthy weight, lowers blood pressure, and regulates cholesterol levels, all of which contribute to better cardiovascular health. It also improves insulin sensitivity, reducing the likelihood of developing type 2 diabetes, and strengthens the immune system, making the body more resilient to infections. Beyond physical health, regular exercise is essential for maintaining mental well-being as it boosts the production of endorphins, known as FEEL GOOD hormones, which help reduce stress, anxiety, and depression. This has a significant impact on longevity, as chronic stress and poor mental health can accelerate aging and contribute to various health issues. Exercise also supports cognitive function, reducing the risk of age-related conditions like Alzheimers and dementia by improving blood flow to the brain and promoting the growth of new brain cells. In addition to its disease-preventing benefits, physical activity helps preserve muscle mass, bone density, and joint health as we age, which are key factors in maintaining mobility and independence throughout life. Strength training, in particular, is beneficial for combating the natural loss of muscle mass and bone strength that occurs with aging, reducing the risk of falls and fractures. Regular exercise also helps regulate sleep patterns, contributing to deeper, more restorative sleep, which is crucial for overall health and longevity. The good news is that it’s never too late to start reaping the benefits of exercise; even moderate activity, like walking, swimming, or cycling, can significantly enhance life expectancy and improve health outcomes, especially when combined with healthy eating habits. By making physical activity a consistent part of daily life, individuals can not only increase their lifespan but also improve their quality of life, ensuring they remain active, independent, and healthy well into their later years.",
    image: "../images/blog12.jpg",
  },
  {
    id: "13",
    title:
      "Stress Eating and Fitness: Strategies to Break the Cycle and Stay Healthy",
    description:
      "Stress eating is a common issue that many people face, especially when balancing busy lives and fitness goals. It occurs when individuals use food as a way to cope with emotional triggers such as anxiety, boredom, or frustration, often leading to overeating or choosing unhealthy comfort foods. This cycle not only impacts physical health, contributing to weight gain, poor nutrition, and fatigue, but it also hinders progress in fitness routines. Stress can increase levels of cortisol, a hormone that not only prompts cravings for sugary, high-fat foods but also promotes fat storage, especially around the abdominal area. Breaking the cycle of stress eating requires a combination of mindful eating strategies and healthier coping mechanisms. One effective approach is to identify emotional triggers and learn how to manage them without turning to food. Techniques such as deep breathing, meditation, and physical activity can help reduce stress and anxiety, offering healthier outlets than eating. Planning meals and snacks ahead of time ensures that healthier options are always available, reducing the temptation to indulge in comfort foods when stress arises. Additionally, staying hydrated can sometimes help curb cravings, as thirst is often mistaken for hunger. It is also important to focus on the quality of food consumed—choosing nutrient-dense meals that provide energy, stabilize blood sugar, and nourish the body can support fitness goals and help regulate appetite. Keeping a food journal can increase awareness of eating habits and emotional triggers, helping individuals make more conscious choices about when and why they eat. Getting adequate sleep and maintaining a regular workout routine also play crucial roles in reducing stress levels and preventing emotional eating, as exercise promotes the release of endorphins, which improve mood and help manage stress. By adopting these strategies, individuals can begin to break the cycle of stress eating, support their fitness goals, and improve both their physical and mental well-being. Developing a balanced, mindful approach to food, along with healthy ways to manage stress, is key to achieving long-term health and maintaining a strong, fit body.",
    image: "../images/blog13.jpg",
  },
  {
    id: "14",
    title:
      "Adapting Your Fitness Routine to Different Life Stages: A Comprehensive Guide",
    description:
      "Adapting your fitness routine to different life stages is essential for maintaining long-term health, wellness, and physical performance, as needs and abilities of the body change over time. In your 20s, the focus is often on building strength, endurance, and establishing a solid foundation for future fitness. This is the time when the body can handle higher-intensity workouts, including weight training, cardio, and high-impact exercises. In your 30s, it is important to shift focus towards maintaining muscle mass and preventing injuries as metabolism begins to slow. Incorporating strength training is still crucial, but adding flexibility exercises like yoga or Pilates can enhance joint mobility and improve posture, especially as daily activities or work may start to lead to more strain on the body. As you move into your 40s and 50s, maintaining a routine that emphasizes joint health, bone density, and cardiovascular health becomes increasingly important. Incorporating lower-impact activities, such as swimming, cycling, or brisk walking, can reduce the risk of injury while still offering cardiovascular and muscular benefits. Strength training remains important, but the focus should be on lighter weights and higher repetitions to avoid unnecessary strain. Flexibility and balance training become even more critical during these years to counteract the natural loss of mobility and muscle mass that comes with aging. For individuals in their 60s and beyond, the key is to stay active and maintain function rather than pushing for high-intensity performance. Activities like walking, gentle stretching, and bodyweight exercises, combined with balance work, help prevent falls and improve overall quality of life. Resistance training should still be incorporated, but with an emphasis on controlled movements and proper form to ensure safety and effectiveness. Regardless of age, it is vital to listen to your body, adjust workouts to suit your energy levels, and allow for proper recovery to prevent overtraining. Nutrition, hydration, and adequate sleep are always fundamental, but as you age, paying attention to muscle recovery and fueling your body with the right nutrients, including protein, becomes more important. By adapting your fitness routine to your specific life stage, you ensure that your body remains strong, mobile, and healthy, supporting your goals and enhancing your quality of life at every age.",
    image: "../images/blog14.jpg",
  },
  {
    id: "15",
    title:
      "The Power of Stretching: Enhancing Flexibility and Preventing Injuries",
    description:
      "Stretching is a powerful yet often overlooked aspect of fitness that can significantly enhance flexibility, improve range of motion, and help prevent injuries. Incorporating regular stretching into your fitness routine promotes the lengthening of muscles and tendons, which improves overall flexibility and allows the body to move more efficiently during exercise and daily activities. A flexible body is less likely to experience muscle strains or joint sprains, as proper stretching helps maintain muscle elasticity and joint health. Stretching also improves posture by releasing tension in tight muscles, particularly in areas like the back, shoulders, and hips, which are often affected by prolonged sitting or repetitive movements. This can reduce the risk of chronic pain and discomfort associated with poor posture. Additionally, stretching increases blood flow to muscles and tissues, which helps improve recovery after intense workouts by reducing soreness and promoting faster healing. It also aids in relaxing the nervous system, which can be beneficial for stress management and mental well-being. Static stretching, where you hold a stretch for 15-30 seconds, is effective for improving flexibility over time, while dynamic stretching, which involves moving through a full range of motion, is ideal for warming up before exercise. Proper warm-ups and cool-downs are crucial in preventing injuries, as they prepare the body for the intensity of a workout and allow muscles to return to their resting length after exertion. Stretching also encourages better muscle coordination and balance, which are essential for functional movement in daily life. Whether you are an athlete, a fitness enthusiast, or someone who simply wants to feel more agile and reduce stiffness, making stretching a regular part of your routine can provide lasting benefits. By committing to consistent stretching, you enhance flexibility, support muscle recovery, prevent injuries, and promote a more active and pain-free lifestyle.",
    image: "../images/blog15.jpg",
  },
];

export default function Post({ params }: { params: {id: string}}) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className='text-2xl font-bold text-center mt-10'> Post Not Found </h2>
    );
  }

  const renderParagraphs  = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className='mt-4 text-justify'>
        {para.trim()} </p>
    ));
  };

  return (
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center'>{post.title}</h1>

      {post.image && (
        <img
        src={post.image}
        alt={post.title}
        className='w-full h-auto rounded-md mt-4'/>
      )}
      <div className='mt-6 text-lg text-slate-600'>
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id}/>
      <AuthorCard />
      <Footer />
    </div>
  )
}