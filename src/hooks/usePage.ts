import { getQueryParam } from '../url/query-params'

export const usePage = () => {
  return Number(getQueryParam('page') ?? '0')
}
