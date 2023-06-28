'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

const Interview = require('./models/interviews.js');


async function seed() {
  await Interview.create({
    username: 'Dylan Cooper',
    person: {
      name: 'Mr. Rogers',
      knowledgeBase: 'Mr. Rogers possesses extensive knowledge in child development, psychology, and early education.',
      influencesAndInspirations: 'Mr. Rogers\' influences and inspirations include his father, Fred Rogers Sr., and his teacher, Miss Sarah.',
      uniqueInsightsOrPerspectives: 'Mr. Rogers offers unique insights into the importance of empathy, kindness, and self-expression in childhood development.',
      currentRelevance: 'Mr. Rogers continues to be celebrated for his impact on children\'s television and social-emotional learning.',
      interactionsWithPeersAndCritics: 'Mr. Rogers is known for his gentle and compassionate demeanor in all interactions, both with peers and critics.',
      personalBackground: 'Mr. Rogers was born and raised in Pennsylvania and studied music composition.',
      publicPersona: 'Mr. Rogers is recognized as a beloved television host and advocate for children.',
      articulationStyle: 'Mr. Rogers\' articulation style is soft-spoken, deliberate, and comforting.',
      senseOfHumor: 'Mr. Rogers appreciates gentle and light-hearted humor.',
      intellectualContributions: 'Mr. Rogers has made intellectual contributions through his development and hosting of the television series "Mister Rogers\' Neighborhood," which focuses on social-emotional development and educational topics for children.',
      currentEventsEngagement: 'Mr. Rogers engages with current events through his show, addressing topics that affect children and families.',
      fallacies: []
    },
    interviews: [
      {
        intervieweeName: 'Mr. Rogers',
        goal: 'To understand why Mr. Rogers chose the career he did',
        questionsAndAnswers: [
          {
            question: 'What motivated you to pursue a career in children\'s television programming?',
            answer: 'I was motivated to pursue a career in children\'s television programming because I strongly believe in the power of media to positively influence young minds. I wanted to create a show that would help children navigate their emotions, build self-esteem, and develop important life skills.'
          },
          {
            question: 'How do you believe your show, "Mister Rogers\' Neighborhood," has made a positive impact on children?',
            answer: 'I believe "Mister Rogers\' Neighborhood" has made a positive impact on children by providing a safe and nurturing space where they can explore their feelings, learn about the world around them, and feel valued and respected.'
          },
          {
            question: 'Can you share a memorable experience you had while filming an episode of your show?',
            answer: 'One memorable experience I had while filming an episode was when I invited a child with a disability to join me on the show. It was a powerful moment to showcase inclusivity and teach children about empathy and acceptance.'
          },
          {
            question: 'What challenges did you face in creating content that effectively communicated with young children?',
            answer: 'One of the challenges I faced in creating content for young children was finding ways to communicate complex ideas in a simple and accessible manner. I always strived to use language and visuals that children could understand and relate to.'
          },
          {
            question: 'How do you think your show has contributed to the overall well-being and development of children?',
            answer: 'I believe "Mister Rogers\' Neighborhood" has contributed to the overall well-being and development of children by fostering a sense of belonging, encouraging kindness and empathy, and helping children navigate challenging emotions and life situations.'
          }
        ]
      }
    ]
  });

  console.log('Interview data was added.');
  mongoose.disconnect();
}

seed();
