'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const interviewSchema = new Schema(
  {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "$id": "https://example.com/interview.schema.json",
    "title": "Record of Interview",
    "description": "This document records the details of an interview",
    "type": "object",
    "properties": {
      "username": {
        "description": "Username of the interviewer",
        "type": "string"
      },
      "person": {
        "type": "object",
        "properties": {
          "name": {
            "description": "Name of the interviewee",
            "type": "string"
          },
          "knowledgeBase": {
            "description": "Specific areas of knowledge possessed by the interviewee",
            "type": "string"
          },
          "influencesAndInspirations": {
            "description": "Influences and inspirations for the interviewee",
            "type": "string"
          },
          "uniqueInsightsOrPerspectives": {
            "description": "Unique insights or perspectives offered by the interviewee",
            "type": "string"
          },
          "currentRelevance": {
            "description": "Current relevance or standing of the interviewee",
            "type": "string"
          },
          "interactionsWithPeersAndCritics": {
            "description": "Interactions of the interviewee with peers and critics",
            "type": "string"
          },
          "personalBackground": {
            "description": "Personal background of the interviewee",
            "type": "string"
          },
          "publicPersona": {
            "description": "Public persona or image of the interviewee",
            "type": "string"
          },
          "articulationStyle": {
            "description": "Articulation style of the interviewee",
            "type": "string"
          },
          "senseOfHumor": {
            "description": "Sense of humor displayed by the interviewee",
            "type": "string"
          },
          "intellectualContributions": {
            "description": "Intellectual contributions made by the interviewee",
            "type": "string"
          },
          "currentEventsEngagement": {
            "description": "Engagement of the interviewee with current events",
            "type": "string"
          },
          "fallacies": {
            "description": "Logical fallacies used by the interviewee",
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "interviews": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "intervieweeName": {
              "description": "Name of the interviewee",
              "type": "string"
            },
            "goal": {
              "description": "Goal or topic of the interview",
              "type": "string"
            },
            "questionsAndAnswers": {
              "description": "Alternating array of interview questions and answers",
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "question": {
                    "description": "An interview question",
                    "type": "string"
                  },
                  "answer": {
                    "description": "The corresponding answer to the question",
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      }
    }
  }  
)


// {
//   "username": "Dylan Cooper",
//   "person": {
//     "name": "Paul McCartney",
//     "knowledgeBase": "Paul McCartney possesses extensive knowledge in songwriting, music theory, and the history of rock and roll.",
//     "influencesAndInspirations": "Paul McCartney's influences include artists like Little Richard, Elvis Presley, and Chuck Berry, which shaped his musical style.",
//     "uniqueInsightsOrPerspectives": "Paul McCartney offers unique insights into the creative process and the dynamics of collaborative songwriting.",
//     "currentRelevance": "Paul McCartney remains highly relevant in the music industry, actively touring and releasing new music.",
//     "interactionsWithPeersAndCritics": "Paul McCartney has collaborated with numerous musicians and has faced both praise and criticism throughout his career.",
//     "personalBackground": "Paul McCartney's upbringing in Liverpool and experiences as a member of The Beatles significantly influenced his perspectives on music and life.",
//     "publicPersona": "Paul McCartney is known for his friendly and charismatic public persona, which has endeared him to fans worldwide.",
//     "articulationStyle": "Paul McCartney's articulation style is often warm, engaging, and filled with anecdotes from his career.",
//     "senseOfHumor": "Paul McCartney has a lighthearted sense of humor and often incorporates jokes and humorous anecdotes into his interviews.",
//     "intellectualContributions": "Paul McCartney's intellectual contributions include his songwriting prowess and innovative musical techniques.",
//     "currentEventsEngagement": "Paul McCartney engages with current events through his music, addressing social and environmental issues."
//   },
//   "interviews": [
//     {
//       "intervieweeName": "Paul McCartney",
//       "goal": "If you could do it all over again, what would you do differently?",
//       "questionsAndAnswers": [
//         {
//           "question": "Looking back on your time with The Beatles, is there anything you would have done differently?",
//           "answer": "In hindsight, there are always things you could have done differently. However, I believe every experience shaped us as individuals and as a band."
//         },
//         {
//           "question": "Do you have any regrets about the decisions made during your solo career?",
//           "answer": "I don't dwell on regrets. Each decision I made was a learning experience and part of my creative journey."
//         },
//         {
//           "question": "What advice would you give to your younger self if you could go back in time?",
//           "answer": "I would tell my younger self to enjoy every moment and not get too caught up in the pressures of success. Life is about the joy of creating music."
//         },
//         {
//           "question": "Were there any unexpected challenges or obstacles you faced throughout your career?",
//           "answer": "Certainly, there were challenges along the way, but we always found a way to overcome them and grow as artists."
//         },
//         {
//           "question": "Looking at the impact of The Beatles and your solo work, do you feel satisfied with your contributions to music history?",
//           "answer": "I am incredibly proud of what The Beatles achieved and the body of work I've created. It's humbling to know that our music continues to resonate with people around the world."
//         }
//       ]
//     }
//   ]
// }
