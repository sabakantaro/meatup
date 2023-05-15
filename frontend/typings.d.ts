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
}

export interface Event {
  id: string
  title: string
  description?: string
  meetingDatetime?: string
}

export interface EventApiJson {
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