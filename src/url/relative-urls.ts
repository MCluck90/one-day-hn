import { getQueryParam } from './query-params'

export const getPrevPage = (): string => {
  const pageParam = getQueryParam('page')
  if (pageParam === null) {
    return window.location.href
  }

  const page = Number(pageParam)
  if (!Number.isNaN(page) || page <= 0) {
    return window.location.href
  }

  const queryParams = new URLSearchParams(window.location.search)
  queryParams.set('page', (page - 1).toString())
  return window.location.origin + window.location.pathname + `?${queryParams}`
}

export const getNextPage = (): string => {
  const queryParams = new URLSearchParams(window.location.search)
  const page = Number(getQueryParam('page') ?? 0)
  queryParams.set('page', (page + 1).toString())
  console.log({
    hostname: window.location.hostname,
    pathname: window.location.pathname,
    queryparams: queryParams.toString(),
  })
  return window.location.origin + window.location.pathname + `?${queryParams}`
}
