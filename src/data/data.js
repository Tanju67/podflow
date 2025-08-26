import img1 from "../assets/profile/img1.jpg";
import img2 from "../assets/profile/img2.jpg";
import img3 from "../assets/profile/img3.jpg";
import img4 from "../assets/profile/img4.jpg";
import img5 from "../assets/profile/img5.jpg";
import img6 from "../assets/profile/img6.jpg";
import img7 from "../assets/profile/img7.jpg";
import epi1 from "../assets/podcast/epi1.jpg";
import epi2 from "../assets/podcast/epi2.jpg";
import epi3 from "../assets/podcast/epi3.jpg";
import epi4 from "../assets/podcast/epi4.jpg";
import top1 from "../assets/topics/top1.jpg";
import top2 from "../assets/topics/top2.jpg";
import top3 from "../assets/topics/top3.jpg";
import top4 from "../assets/topics/top4.jpg";

export const people = [
  {
    id: 1,
    name: "Maria",
    role: ["Influencer", "Acting"],
    img: img1,
    description:
      "My name is Maria, and I live between two exciting worlds: social media influencing and acting. As an influencer, I love creating content that inspires people to express themselves freely, whether it’s through lifestyle choices, beauty, or personal growth. Acting, on the other hand, gives me the chance to dive into different characters and emotions, telling stories that move and connect with audiences. I believe both roles are about authenticity and sharing real emotions. Through my podcast, I want to bring listeners behind the scenes of both industries, sharing the challenges, the fun, and the lessons I’ve learned along the way. I want my voice to feel like a friend who understands the excitement and struggles of being creative in the modern world.",
  },
  {
    id: 2,
    name: "Jenny",
    role: ["Modelling", "Fashion"],
    img: img2,
    description:
      "I’m Jenny, and fashion has always been my greatest passion. As a model, I see fashion not just as clothing but as a language that allows us to express who we are without speaking a single word. My journey started with small shoots, and over time, I learned how much discipline, patience, and creativity it takes to really live in this world. Beyond the glamorous images, there’s a lot of hard work, self-reflection, and constant growth. In my podcast, I talk openly about the realities of modeling, my personal experiences in the industry, and the way fashion can influence confidence and self-expression. I hope to inspire young people to embrace their individuality, while also sharing tips and stories from behind the runway and photo sessions.",
  },
  {
    id: 3,
    name: "Ricardo",
    role: ["Sport"],
    img: img3,
    description:
      "My name is Ricardo, and sport has always been the driving force in my life. From an early age, I understood how physical activity not only strengthens the body but also shapes the mind and character. Training has taught me resilience, teamwork, and the importance of discipline. Whether it’s football, running, or fitness, I believe sport is a universal language that connects people across cultures. On my podcast, I share my personal journey, the lessons I’ve learned on and off the field, and conversations with athletes and enthusiasts who inspire me. I want listeners to feel motivated to move, to push their limits, and to discover how sport can bring joy and balance to everyday life.",
  },
  {
    id: 4,
    name: "Jennifer",
    role: ["Education", "Business"],
    img: img4,
    description:
      "I’m Jennifer, and my passion lies in building and understanding businesses. Over the years, I’ve worked on projects that challenged me to think creatively, manage risks, and constantly learn about leadership and innovation. For me, business is not just about numbers or profit, but about people, ideas, and meaningful impact. Through my podcast, I want to share my journey as a woman navigating the corporate and entrepreneurial world, the struggles I’ve faced, and the strategies that helped me grow. I love exchanging stories with others who are on a similar path, and I want to inspire listeners who might be at the start of their own business adventure. My goal is to make business talk approachable, honest, and motivating.",
  },
  {
    id: 5,
    name: "Allan",
    role: ["Creative", "Funny"],
    img: img5,
    description:
      "My name is Allan, and creativity has always been my superpower. Whether I’m sketching, writing, or simply coming up with silly ideas that make people laugh, I love exploring the fun side of life. Humor is the way I connect with others—it breaks barriers, lifts moods, and reminds us not to take ourselves too seriously. My podcast is a place where I mix my creative thoughts with comedy, sharing stories, jokes, and reflections about everyday life. I want people to feel like they’re sitting with a friend who can make them smile while also sparking new ideas. For me, laughter and creativity go hand in hand, and I believe both can inspire people to see the world in brighter colors.",
  },
  {
    id: 6,
    name: "Anna",
    role: ["Fashion", "Beauty"],
    img: img6,
    description:
      "I’m Anna, and I’ve always been fascinated by the world of fashion and beauty. For me, these aren’t just industries—they’re ways of celebrating identity, confidence, and artistry. I enjoy experimenting with new styles, makeup looks, and trends, but I also love talking about the deeper side of beauty: self-acceptance and empowerment. In my podcast, I share my own journey with fashion, the lessons I’ve learned from the beauty community, and tips that make self-care accessible to everyone. I want listeners to feel inspired not to chase perfection, but to discover their own unique style and feel good in their own skin. Beauty is personal, and fashion is freedom—and I’m here to celebrate both.",
  },
  {
    id: 7,
    name: "Tonny",
    role: ["Cooking"],
    img: img7,
    description:
      "Hello, I’m Tonny, and cooking is more than just a hobby for me—it’s a passion and a way of life. Ever since I was a child, I’ve loved experimenting in the kitchen, mixing flavors, and creating meals that bring people together. Food, for me, is about connection, tradition, and joy. On my podcast, I share recipes, cooking stories, and conversations with people who inspire me in the culinary world. I love talking about the cultural roots of food, the little tricks that make cooking fun, and the happiness that comes from preparing something with love. My goal is to make listeners feel the warmth of the kitchen and remind them that food has the power to bring comfort, laughter, and community.",
  },
];

export const episodes = [
  {
    id: "e1",
    img: epi1,
    time: 17,
    ep: 16,
    title: "The Style Debrief",
    creator: people[1],
    description:
      "I’ve always been fascinated by the way fashion tells stories. In this podcast, I share the latest style trends, decode runway moments, and talk about how fashion reflects culture and identity. I take a closer look at the designers shaping the future, the hidden details behind iconic looks, and the influence of fashion on our everyday lives. For me, it’s not only about clothes but also about confidence, expression, and creativity. Every episode is my chance to inspire you to see style as a language we all speak.",
    listening: 110,
    like: 42.8,
    comment: 12,
    download: 16,
  },
  {
    id: "e2",
    img: epi2,
    time: 32,
    ep: 25,
    title: "The Athletic Dispatch",
    creator: people[2],
    description:
      "Sports have been my passion since childhood, and this show is where I bring that passion to life. I talk about the most exciting games, the athletes who push limits, and the lessons hidden in their journeys. From training stories to unforgettable victories, I dive deep into the discipline, mindset, and energy that make sports so powerful. My goal is not only to share highlights but also to inspire you to move, to stay motivated, and to believe in the strength of persistence.",
    listening: 110,
    like: 42.8,
    comment: 12,
    download: 16,
  },
  {
    id: "e3",
    img: epi3,
    time: 55,
    ep: 98,
    title: "The Learning Hour",
    creator: people[3],
    description:
      "I believe learning never stops, no matter where you are in life. On this podcast, I explore big ideas and small insights that can change the way we see the world. I share lessons from books, science, and everyday experiences, always with curiosity at the center. Each episode is a new opportunity to think differently, to ask questions, and to grow. For me, learning is not about pressure but about joy — a journey that makes us better, kinder, and more open to the possibilities around us.",
    listening: 110,
    like: 42.8,
    comment: 12,
    download: 16,
  },
  {
    id: "e4",
    img: epi4,
    time: 20,
    ep: 201,
    title: "Hashtag Waves",
    creator: people[0],
    description:
      "Social media is shaping the way we connect, and I’m here to dive into that world. I talk about the latest viral trends, the stories behind digital culture, and the impact platforms have on our daily lives. From the excitement of creating content to the challenges of staying authentic online, I share my perspective on both the bright and the dark sides of the feed. For me, social media is more than likes and shares — it’s a reflection of our voices, our communities, and our future. Together, we ride the waves of what’s trending and meaningful online.",
    listening: 110,
    like: 42.8,
    comment: 12,
    download: 16,
  },
];

export const topics = [
  {
    id: 1,
    img: top1,
    title: "Fashion",
    ep: 16,
    description:
      "Fashion is more than just clothing; it is a powerful form of self-expression that reflects cultural trends, personal identity, and creativity. Over the years, fashion has evolved into a dynamic industry that influences how people perceive themselves and others. From haute couture runways to everyday streetwear, fashion sets the tone for lifestyle and social status. It also mirrors historical changes, artistic movements, and global connections. Today, sustainable fashion is becoming increasingly important as people seek eco-friendly alternatives and ethical production methods. With fashion podcasts, listeners can explore styling tips, industry insights, and stories from designers and trendsetters, making it an engaging subject for everyone.",
  },
  {
    id: 2,
    img: top2,
    title: "Social Media",
    ep: 76,
    description:
      "Social media has transformed the way people communicate, share information, and build communities. Platforms like Instagram, Twitter, TikTok, and Facebook have created a digital space where trends emerge overnight, opinions spread rapidly, and businesses reach global audiences with ease. While social media offers countless opportunities for creativity, connection, and growth, it also presents challenges such as misinformation, privacy concerns, and digital burnout. Podcasts on this topic often explore the psychology behind social platforms, strategies for content creation, and the impact of algorithms on everyday life. Social media continues to shape modern culture, making it a fascinating and ever-changing topic to discuss.",
  },
  {
    id: 3,
    img: top3,
    title: "Education",
    ep: 11,
    description:
      "Education is the foundation of personal and societal growth, providing knowledge, skills, and opportunities that shape the future. It extends beyond classrooms, evolving with technology, cultural shifts, and global challenges. Today, online learning platforms, podcasts, and digital resources allow people to access education anywhere, breaking barriers of location and time. Education also plays a crucial role in fostering critical thinking, creativity, and problem-solving skills. Discussions in educational podcasts often cover new teaching methods, the role of technology in learning, and inspiring stories from teachers and students. It is a universal topic that resonates with anyone seeking personal development and lifelong learning.",
  },
  {
    id: 4,
    img: top4,
    title: "Sports",
    ep: 38,
    description:
      "Sports are more than physical activity; they are a universal language that unites people across cultures, countries, and backgrounds. From football and basketball to tennis and athletics, sports foster teamwork, discipline, and perseverance. They also inspire emotions, from the thrill of victory to the lessons learned in defeat. Beyond competition, sports contribute to health, social interaction, and even national pride. Today, sports podcasts cover a wide range of topics including athlete interviews, game analysis, training tips, and the business side of major leagues. Whether professional or recreational, sports remain one of the most engaging and influential aspects of human life.",
  },
];
