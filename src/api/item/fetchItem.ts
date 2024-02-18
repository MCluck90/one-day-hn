import { Item } from '../../domain/Item'

export const fetchItem = (id: string): Promise<Item> =>
  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((resp) =>
    resp.json(),
  )
