export interface Todo {
  id: string
  titulo: string
  description: string
  category?: string
  date: string,
  hours: string,
}
export interface Category {
  id: string
  nombre: string
  isSelect: boolean
}
