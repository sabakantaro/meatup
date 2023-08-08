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
  uid: number
  provider: string
  email: string
  name: string
  profile?: string
  birthDate?: string
  gender?: string
  image?: {
    url: string
  }
  allowPasswordChange: boolean
  created_at: string
  updated_at: string
  bookmarks: Bookmark[]
  events: Event[]
}

export interface Event {
  map(arg0: (item: Event) => JSX.Element): import("react").ReactNode
  id: number
  title: string
  description?: string
  meetingDatetime?: string
  price?: number
  place: Place
  user: User
  participants?: participants[]
}

export interface EventApiJson {
  comments: any
  event: any
  events: Event[]
}

export interface Place {
  id: number
  latitude: string
  longitude: string
  location: string
  image?: {
    url: string
  }
  length: number
  filter(arg0: (place: Place) => JSX.Element | string): import("react").ReactNode
  map(arg0: (place: Place) => JSX.Element): import("react").ReactNode
}

export interface PlaceApiJson {
  places: Place[]
}

export interface Comment {
  id: number
  content: string
  userId: number
  eventId: number
  createdAt: string
  updatedAt: string
  user: User
}

export interface CommentApiJson {
  content: string
  userId: number
  eventId: number
}

export interface Chatroom {
  id: Key | null | undefined
  length: number
  chatroom: {
    id: number
  }
  otherUser: User,
  lastMessage: Message
  map(arg0: (chatroom: Chatroom) => JSX.Element): import("react").ReactNode
}

export interface Message {
  chatroomId: number
  userId: number | undefined
  content: string
  createdAt?: Date
}

export interface Notification {
  map(arg0: (notification: any) => JSX.Element): import("react").ReactNode
  id?: number
  isChecked: boolean
  linkUrl: string
  imageUrl?: string
  content: string
  length: number
}

export interface Bookmark {
  id: number
  userId: number
  eventId: number
  createdAt?: string
  updatedAt?: string
}

export interface participants {
  id: number
  userId: number
  eventId: number
  createdAt?: string
  updatedAt?: string
}