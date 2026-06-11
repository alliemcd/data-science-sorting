const questions = [
  {
    question: "Which class sounds the most interesting to you?",
    answers: [
      { text: "Learning how computers can think or make decisions", type: "Machine Learning" },
      { text: "Learning about space, stars, and planets", type: "Physics & Astronomy: Data Science" },
      { text: "Learning how to understand data and make sense of it", type: "Statistics: Data Science" },
      { text: "Solving tricky math problems with equations", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "What kind of problem would you rather work on?",
    answers: [
      { text: "Getting a computer to recognize pictures or faces", type: "Machine Learning" },
      { text: "Figuring out how planets move", type: "Physics & Astronomy: Data Science" },
      { text: "Deciding if results from a test or survey can be trusted", type: "Statistics: Data Science" },
      { text: "Using math to describe how something works", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which kind of math sounds most interesting?",
    answers: [
      { text: "Step-by-step problem solving for computers", type: "Machine Learning" },
      { text: "Math that explains physics or how things move", type: "Physics & Astronomy: Data Science" },
      { text: "Math about chance, guessing, and uncertainty", type: "Statistics: Data Science" },
      { text: "Creating equations to describe real-life situations", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which project sounds the most fun?",
    answers: [
      { text: "Making a smart app that gives suggestions or answers questions", type: "Machine Learning" },
      { text: "Working with data from space or satellites", type: "Physics & Astronomy: Data Science" },
      { text: "Making a survey and figuring out what the results mean", type: "Statistics: Data Science" },
      { text: "Building a simulation (like a game) using math rules", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "What kind of coding sounds most interesting?",
    answers: [
      { text: "Teaching a computer to get better through practice", type: "Machine Learning" },
      { text: "Writing code to study science problems or physics", type: "Physics & Astronomy: Data Science" },
      { text: "Working with data to find patterns or answers", type: "Statistics: Data Science" },
      { text: "Writing code that uses math to model real systems", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which topic would you most want to learn more about?",
    answers: [
      { text: "How computers can learn patterns and improve", type: "Machine Learning" },
      { text: "Things like black holes or dark matter", type: "Physics & Astronomy: Data Science" },
      { text: "How to tell if information is reliable", type: "Statistics: Data Science" },
      { text: "How math explains things in the real world", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which kind of data sounds most interesting?",
    answers: [
      { text: "Pictures, videos, or text from apps", type: "Machine Learning" },
      { text: "Data from space or science experiments", type: "Physics & Astronomy: Data Science" },
      { text: "Polls, surveys, or health studies", type: "Statistics: Data Science" },
      { text: "Data created from math models or simulations", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which class sounds the most fun?",
    answers: [
      { text: "Building smarter computer programs", type: "Machine Learning" },
      { text: "Learning about how the universe works", type: "Physics & Astronomy: Data Science" },
      { text: "Learning how to make good conclusions from data", type: "Statistics: Data Science" },
      { text: "Learning about matrices and advanced math ideas", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "What would feel the most rewarding to accomplish?",
    answers: [
      { text: "Creating a smart system that can learn on its own", type: "Machine Learning" },
      { text: "Understanding how the universe works", type: "Physics & Astronomy: Data Science" },
      { text: "Finding the most accurate answer using data", type: "Statistics: Data Science" },
      { text: "Solving a really hard math problem", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which tool or idea sounds the coolest?",
    answers: [
      { text: "AI or “brain-like” computer systems", type: "Machine Learning" },
      { text: "Telescopes or big science machines", type: "Physics & Astronomy: Data Science" },
      { text: "Charts, graphs, and data models", type: "Statistics: Data Science" },
      { text: "Computer simulations based on math", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "What kind of challenge do you enjoy most?",
    answers: [
      { text: "Making a computer more accurate or smarter", type: "Machine Learning" },
      { text: "Explaining how something in science works", type: "Physics & Astronomy: Data Science" },
      { text: "Figuring out what unclear results really mean", type: "Statistics: Data Science" },
      { text: "Using math to represent something complicated", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which topic sounds most interesting to you?",
    answers: [
      { text: "Building apps like ChatGPT or recommendation systems", type: "Machine Learning" },
      { text: "Learning about space and how the universe works", type: "Physics & Astronomy: Data Science" },
      { text: "Understanding what data from surveys or experiments really means", type: "Statistics: Data Science" },
      { text: "Using equations to figure out how things work", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which future job sounds the most interesting?",
    answers: [
      { text: "Helping computers learn and make predictions", type: "Machine Learning" },
      { text: "Studying space using data and computers", type: "Physics & Astronomy: Data Science" },
      { text: "Using data to answer questions and find the truth", type: "Statistics: Data Science" },
      { text: "Using math and code to model real-world systems", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which activity would you rather do?",
    answers: [
      { text: "Help a computer learn how to do something new", type: "Machine Learning" },
      { text: "Study a new science discovery", type: "Physics & Astronomy: Data Science" },
      { text: "Check if data or results are correct", type: "Statistics: Data Science" },
      { text: "Work through a challenging math problem", type: "Applied & Computational Mathematics" }
    ]
  },

  {
    question: "Which statement sounds most like you?",
    answers: [
      { text: "I like technology and smart computer programs", type: "Machine Learning" },
      { text: "I think space and science are really interesting", type: "Physics & Astronomy: Data Science" },
      { text: "I like figuring out what’s true based on evidence", type: "Statistics: Data Science" },
      { text: "I enjoy thinking deeply about math and patterns", type: "Applied & Computational Mathematics" }
    ]
  }
];

const resultsInfo = {
  "Machine Learning": "You excel at building intelligent systems and solving complex problems with data-driven approaches.",
  "Physics & Astronomy: Data Science": "You're drawn to understanding the universe and applying data science to cosmic mysteries.",
  "Statistics: Data Science": "You have a strong analytical mind and excel at interpreting data to uncover meaningful insights.",
  "Applied & Computational Mathematics": "You thrive on mathematical modeling and using advanced mathematics to solve real-world problems.",
  "Data Science": "Your interests span multiple disciplines! Data Science offers a unique intersection of all these fields, allowing you to work on diverse problems using computational, statistical, and analytical approaches."
};
