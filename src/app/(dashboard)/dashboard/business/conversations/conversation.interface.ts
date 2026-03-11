export interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  phoneNumber: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  avatar: string;
  messages: Message[];
}
