import { Conversation } from "./conversation.interface";

export const INITIAL_CONVERSATIONS: Conversation[] = [
  {
    id: "1",
    phoneNumber: "+05 92564828",
    lastMessage: "Yes, around $300-500 per month.",
    time: "11:54am",
    unreadCount: 0,
    avatar: "/avatars/user1.png",
    messages: [
      {
        id: "m1",
        sender: "user",
        text: "Hi, I'm interested in your AI automation service.",
        timestamp: "Today 10:27am",
      },
      {
        id: "m2",
        sender: "ai",
        text: "Hi there 👋 Thanks for reaching out! May I know your name?",
        timestamp: "10:28am",
      },
      {
        id: "m3",
        sender: "user",
        text: "I'm Daniel.",
        timestamp: "10:30am",
      },
      {
        id: "m4",
        sender: "ai",
        text: "Nice to meet you, Daniel! Are you looking to automate leads for your business?",
        timestamp: "10:32am",
      },
      {
        id: "m5",
        sender: "user",
        text: "Yes, we get many WhatsApp leads and it's hard to reply fast.",
        timestamp: "10:35am",
      },
      {
        id: "m6",
        sender: "ai",
        text: "Got it 👍 Approximately how many leads do you receive per day?",
        timestamp: "10:36am",
      },
      {
        id: "m7",
        sender: "user",
        text: "Around 40-50 per day.",
        timestamp: "10:40am",
      },
      {
        id: "m8",
        sender: "ai",
        text: "That's great volume 🚀 Are you the decision maker for this project?",
        timestamp: "10:41am",
      },
      {
        id: "m9",
        sender: "user",
        text: "Yes, I am.",
        timestamp: "10:45am",
      },
      {
        id: "m10",
        sender: "ai",
        text: "Perfect. Do you have a budget allocated for automation tools?",
        timestamp: "10:46am",
      },
      {
        id: "m11",
        sender: "user",
        text: "Yes, around $300-500 per month.",
        timestamp: "10:50am",
      },
    ],
  },
  {
    id: "2",
    phoneNumber: "+85 92564828",
    lastMessage: "I can't join, sorry! Have fun!",
    time: "11:54am",
    unreadCount: 1,
    avatar: "/avatars/user2.png",
    messages: [
      {
        id: "m1",
        sender: "user",
        text: "I can't join, sorry! Have fun!",
        timestamp: "11:54am",
      },
    ],
  },
  {
    id: "3",
    phoneNumber: "+85 92564828",
    lastMessage: "I can't join, sorry! Have fun!",
    time: "11:54am",
    unreadCount: 1,
    avatar: "/avatars/user3.png",
    messages: [],
  },
];
