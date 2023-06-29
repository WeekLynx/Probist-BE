'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

const Interview = require('./models/interviews.js');


async function seed() {
  await Interview.create({
    user: {
      name: 'Dylan Cooper',
      email: 'cooper.softdev@gmail.com',
    },
    person: {
      name: 'Neil deGrasse Tyson',
      personality: {
        knowledgeBase: 'Neil deGrasse Tyson possesses extensive knowledge in astrophysics, cosmology, and science communication.',
        influencesAndInspirations: 'Neil deGrasse Tyson\'s influences and inspirations include Carl Sagan and his own experiences with astronomy and stargazing.',
        uniqueInsightsOrPerspectives: 'Neil deGrasse Tyson offers unique insights into the wonders of the universe, the importance of scientific literacy, and the need for evidence-based thinking.',
        currentRelevance: 'Neil deGrasse Tyson continues to be relevant as a science communicator, hosting educational programs and sharing his knowledge on various media platforms.',
        interactionsWithPeersAndCritics: 'Neil deGrasse Tyson is known for engaging with peers and critics in discussions and debates, providing scientific explanations and clarifications.',
        personalBackground: 'Neil deGrasse Tyson was born and raised in New York City and developed a passion for astronomy from a young age.',
        publicPersona: 'Neil deGrasse Tyson is recognized as a renowned astrophysicist, science communicator, and host of educational television programs.',
        articulationStyle: 'Neil deGrasse Tyson has an articulate and engaging style of communication, making complex scientific concepts accessible to a wide audience.',
        senseOfHumor: 'Neil deGrasse Tyson appreciates humor and often incorporates it into his science communication to make it more engaging and relatable.',
        intellectualContributions: 'Neil deGrasse Tyson has made significant intellectual contributions through his research in astrophysics and his efforts to popularize science and increase public interest in the cosmos.',
        currentEventsEngagement: 'Neil deGrasse Tyson actively engages with current events related to science, space exploration, and scientific discoveries, providing scientific analysis and commentary.',
        fallacies: [],
        rhetoricalStrategies: 'Neil deGrasse Tyson employs rhetorical strategies such as using vivid metaphors, storytelling, and relatable examples to communicate complex scientific concepts.',
        argumentativeStyle: 'Neil deGrasse Tyson adopts a rational and evidence-based argumentative style, relying on scientific data, logical reasoning, and critical thinking.',
        debateTactics: 'Neil deGrasse Tyson utilizes debate tactics such as presenting counterarguments, using analogies to illustrate points, and challenging flawed reasoning.',
        responsePatterns: 'Neil deGrasse Tyson demonstrates consistent response patterns, often addressing questions and challenges with scientific explanations and empirical evidence.',
        emotionalTriggers: 'Neil deGrasse Tyson may exhibit strong emotional responses when confronted with misinformation or pseudoscience that undermines scientific principles.',
        responseToCounterarguments: 'Neil deGrasse Tyson typically responds to counterarguments by providing scientific evidence, logical reasoning, and clarifications to address any misconceptions.'
      }
    },
    interviews: [
      {
        intervieweeName: 'Neil deGrasse Tyson',
        topics: ['Flat Earth and Round Earth'],
        goal: 'To make Neil deGrasse Tyson prove that the Earth is round',
        tone: 'AGGRESSIVE',
        questionsAndAnswers: []
      }
    ]
  });

  console.log('Interview data was added.');
  mongoose.disconnect();
}

seed();
