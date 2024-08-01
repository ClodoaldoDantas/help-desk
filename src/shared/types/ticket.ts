export type Ticket = {
  id: string
  assetNumber: number
  description: string
  status: string
  priority: string
  solution: string | null
  createdAt: Date
  updatedAt: Date
}
