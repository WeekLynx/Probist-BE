'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

const Interview = require('./models/inter.js');


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
        questionsAndAnswers: [{
          question: 'Is the Earth flat?',
          answer: 'No, the Earth is not flat. The overwhelming scientific evidence supports the fact that the Earth is a spherical object. We have centuries of observations, photographs from space, satellite data, and countless experiments that demonstrate the Earth\'s curvature.'
        },
        {
          question: 'How do you explain the appearance of a flat horizon?',
          answer: 'The appearance of a flat horizon is a result of the Earth\'s large size and our limited perspective as observers on the planet\'s surface. When we look out at the horizon, the Earth\'s curvature is not readily apparent due to its vast scale. However, various phenomena such as ships disappearing over the horizon, the way sunlight illuminates the Earth\'s surface, and the shape of Earth\'s shadow during lunar eclipses provide conclusive evidence of its roundness.'
        },
        {
          question: 'What is the shape of other celestial bodies like planets and moons?',
          answer: 'Similar to the Earth, other celestial bodies like planets and moons are also generally spherical in shape. Gravity is responsible for their rounded appearance, as it pulls matter inward, creating a state of hydrostatic equilibrium. This phenomenon is known as "isostatic adjustment" and results in celestial bodies assuming a roughly spherical shape.'
        },
        {
          question: 'Can you provide evidence of the Earth\'s spherical shape from space exploration?',
          answer: 'Absolutely! Space exploration has provided us with substantial evidence of the Earth\'s spherical shape. Astronauts aboard spacecraft, such as the Apollo missions, have captured photographs of the Earth from space, clearly showing its curvature. Additionally, satellite imagery, such as that from weather satellites or mapping missions, further confirms the Earth\'s roundness.'
        },
        {
          question: 'How does gravity work on a spherical Earth?',
          answer: 'Gravity acts as a force that attracts objects toward the center of mass. On a spherical Earth, gravity pulls objects toward the Earth\'s core, resulting in a perpendicular force directed inward from all points on the planet\'s surface. This gives rise to the experience of weight and keeps objects, including our atmosphere, bound to the Earth.'
        },]
      }
    ]
  });

  console.log('Interview data was added.');
  mongoose.disconnect();
}

seed();
