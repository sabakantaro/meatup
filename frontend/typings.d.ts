export interface SignUpData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface SignInData {
  email: string
  password: string
}

export interface User {
  id: number
  uid: string
  provider: string
  email: string
  name: string
  profile?: string
  birthDate?: string
  image?: {
    url: string
  }
  allowPasswordChange: boolean
  created_at: string
  updated_at: string
  bookmarks: any
}

export interface Event {
  id: string
  title: string
  description?: string
  meetingDatetime?: string
}

export interface EventApiJson {
  comments: any
  event: any
  events: Event[]
}

export interface Place {
  id: string
  latitude: string
  longitude: string
  location: string
  image?: {
    url: string
  }
}

export interface PlaceApiJson {
  places: Place[]
}

export interface Comment {
  id: string
  content: string
  userId: string
  eventId: string
}

export interface CommentApiJson {
  content: string
  userId: string
  eventId: string
}

export interface Chatroom {
  chatroom: {
    id: number
  }
  otherUser: User,
  lastMessage: Message
}

export interface Message {
  chatroomId: number
  userId: number | undefined
  content: string
  createdAt?: Date
}