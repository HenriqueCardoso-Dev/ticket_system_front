interface intTicket {
  id: number,
  state: number,
  title: string,
  content: string,
  createByUserId: number,
  urgency: number,
  creationDatetime: string
}

export default intTicket