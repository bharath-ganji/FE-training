export interface Root {
    users: User[]
    departments: Department[]
    years: string[]
    sections: string[]
  }
  
  export interface User {
    rollno: string
    name: string
    phone: number
    sec: string
    dept: string
    year: string
    img: string
    email: string
  }
  
  export interface Department {
    name: string
    description: string
  }
  