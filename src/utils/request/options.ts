export const requestOptions = (method: string, body?: any): RequestInit => ({
  method: method,
  headers: {
    ...{ "Content-Type": "application/json" },
  },
  ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
})
