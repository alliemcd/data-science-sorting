const questions = [
  {
    question: "What kind of data sounds most interesting to work with?",
    answers: [
      { text: "AI-generated images, language, or recommendation systems", type: "Machine Learning" },
      { text: "Space, planets, stars, or physics experiments", type: "Physics & Astronomy: Data Science" },
      { text: "Social media, apps, sports, or business trends", type: "Data Science" },
      { text: "Polls, surveys, and experiments", type: "Statistics: Data Science" },
      { text: "Patterns, equations, and simulations", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which activity sounds the most fun?",
    answers: [
      { text: "Teaching a computer to recognize patterns", type: "Machine Learning" },
      { text: "Studying how the universe works", type: "Physics & Astronomy: Data Science" },
      { text: "Finding insights in real-world data", type: "Data Science" },
      { text: "Testing whether conclusions are actually reliable", type: "Statistics: Data Science" },
      { text: "Solving difficult math problems", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which school subject do you enjoy most?",
    answers: [
      { text: "Computer Science", type: "Machine Learning" },
      { text: "Physics or Astronomy", type: "Physics & Astronomy: Data Science" },
      { text: "A mix of math, coding, and problem-solving", type: "Data Science" },
      { text: "Statistics or probability", type: "Statistics: Data Science" },
      { text: "Advanced mathematics", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "What sounds most rewarding?",
    answers: [
      { text: "Building smarter technology", type: "Machine Learning" },
      { text: "Making scientific discoveries", type: "Physics & Astronomy: Data Science" },
      { text: "Using data to solve practical problems", type: "Data Science" },
      { text: "Finding the most accurate answer", type: "Statistics: Data Science" },
      { text: "Creating elegant mathematical models", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "How do you usually approach problems?",
    answers: [
      { text: "Experiment until something works", type: "Machine Learning" },
      { text: "Look for scientific explanations", type: "Physics & Astronomy: Data Science" },
      { text: "Combine different tools and ideas", type: "Data Science" },
      { text: "Carefully analyze the evidence", type: "Statistics: Data Science" },
      { text: "Break it down mathematically", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which future career sounds most exciting?",
    answers: [
      { text: "AI or Machine Learning Engineer", type: "Machine Learning" },
      { text: "Astrophysicist or Space Researcher", type: "Physics & Astronomy: Data Science" },
      { text: "Data Scientist", type: "Data Science" },
      { text: "Statistician or Data Analyst", type: "Statistics: Data Science" },
      { text: "Quantitative Researcher or Applied Mathematician", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which type of project would you rather do?",
    answers: [
      { text: "Train an AI to make predictions", type: "Machine Learning" },
      { text: "Analyze telescope or science data", type: "Physics & Astronomy: Data Science" },
      { text: "Study trends in real-world behavior", type: "Data Science" },
      { text: "Design a reliable experiment or survey", type: "Statistics: Data Science" },
      { text: "Build mathematical simulations", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "What kind of thinking do you enjoy most?",
    answers: [
      { text: "Creative coding and experimentation", type: "Machine Learning" },
      { text: "Scientific reasoning", type: "Physics & Astronomy: Data Science" },
      { text: "Connecting ideas from different fields", type: "Data Science" },
      { text: "Logical analysis and evidence", type: "Statistics: Data Science" },
      { text: "Abstract mathematical thinking", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "What sounds most interesting to learn about?",
    answers: [
      { text: "How AI tools like ChatGPT work", type: "Machine Learning" },
      { text: "Black holes, galaxies, or quantum physics", type: "Physics & Astronomy: Data Science" },
      { text: "How companies use data to make decisions", type: "Data Science" },
      { text: "How scientists know if results are trustworthy", type: "Statistics: Data Science" },
      { text: "How math can describe complex systems", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "What type of work environment sounds best?",
    answers: [
      { text: "A fast-moving AI or tech company", type: "Machine Learning" },
      { text: "A science lab or observatory", type: "Physics & Astronomy: Data Science" },
      { text: "A collaborative tech or analytics team", type: "Data Science" },
      { text: "Researching data and improving accuracy", type: "Statistics: Data Science" },
      { text: "Working on mathematical models and simulations", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "How important is coding to your interests?",
    answers: [
      { text: "I want coding to be central", type: "Machine Learning" },
      { text: "Mostly for scientific work", type: "Physics & Astronomy: Data Science" },
      { text: "I like combining coding with analysis", type: "Data Science" },
      { text: "Only when needed for analysis", type: "Statistics: Data Science" },
      { text: "Mostly for solving mathematical problems", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which description sounds most like you?",
    answers: [
      { text: "I love technology and innovation", type: "Machine Learning" },
      { text: "I’m curious about how the universe works", type: "Physics & Astronomy: Data Science" },
      { text: "I like learning a little bit of everything", type: "Data Science" },
      { text: "I care about accuracy and reliability", type: "Statistics: Data Science" },
      { text: "I enjoy deep mathematical challenges", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "What would you rather spend time doing?",
    answers: [
      { text: "Improving an AI model", type: "Machine Learning" },
      { text: "Analyzing scientific discoveries", type: "Physics & Astronomy: Data Science" },
      { text: "Exploring patterns in data", type: "Data Science" },
      { text: "Checking whether data supports a conclusion", type: "Statistics: Data Science" },
      { text: "Solving advanced equations", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "What sounds most satisfying?",
    answers: [
      { text: "Creating technology that learns", type: "Machine Learning" },
      { text: "Understanding nature and space", type: "Physics & Astronomy: Data Science" },
      { text: "Using data to help people make decisions", type: "Data Science" },
      { text: "Finding the most statistically accurate answer", type: "Statistics: Data Science" },
      { text: "Building mathematical models from scratch", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which major feels closest to your personality?",
    answers: [
      { text: "Innovative and tech-focused", type: "Machine Learning" },
      { text: "Scientific and curious", type: "Physics & Astronomy: Data Science" },
      { text: "Flexible and interdisciplinary", type: "Data Science" },
      { text: "Careful and analytical", type: "Statistics: Data Science" },
      { text: "Theoretical and mathematical", type: "Applied & Computational Mathematics" }
    ]
  }
];

const resultsInfo = {
  "Machine Learning":
    "You are drawn to AI, intelligent systems, and technology. You likely enjoy coding, experimentation, and building systems that can learn from data.",

  "Physics & Astronomy: Data Science":
    "You are curious about science, space, and how the universe works. You enjoy using data and computation to explore scientific questions.",

  "Data Science":
    "You enjoy combining coding, math, and analysis to solve real-world problems. You are interested in many different applications of data.",

  "Statistics: Data Science":
    "You are analytical, practical, and interested in reliability and evidence. You likely enjoy understanding uncertainty and making accurate conclusions from data.",

  "Applied & Computational Mathematics":
    "You enjoy deep mathematical thinking, modeling complex systems, and solving challenging quantitative problems."
};
