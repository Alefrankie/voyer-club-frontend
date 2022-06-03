// const hostBackend = 'http://services.sps.com.ve'
// const hostBackend = ''
export const HOST_DEFAULT = 'http://localhost:3001'

export const HEADERS_DEFAULT = new Headers({
	'Content-Type': 'application/json',
	Accept: 'application/json'
	// authorization: `bearer ${localStorage.getItem("token")}`,
})

export const http = {
	Get: async ({ host = HOST_DEFAULT, url, headers = HEADERS_DEFAULT }): Promise<any> => {
		const res = await fetch(host + url, {
				headers,
				method: 'GET'
			}),
			response = await res.json()

		if (!res.ok) throw new Error(response.message)

		return response
	},
	Post: async ({ host = HOST_DEFAULT, url, body, headers = HEADERS_DEFAULT }): Promise<any> => {
		const res = await fetch(host + url, {
				body: JSON.stringify(body),
				headers,
				method: 'POST'
			}),
			response = await res.json()
		if (!res.ok) throw new Error(response.message)

		return response
	},
	Put: async ({ host = HOST_DEFAULT, url, body, headers = HEADERS_DEFAULT }): Promise<any> => {
		const res = await fetch(host + url, {
				body: JSON.stringify(body),
				headers,
				method: 'PUT'
			}),
			response = await res.json()

		if (!res.ok) throw new Error(response.message)

		return response
	},
	Delete: async ({ host = HOST_DEFAULT, url, body = {}, headers = HEADERS_DEFAULT }) => {
		const res = await fetch(host + url, {
				body: JSON.stringify(body),
				headers,
				method: 'DELETE'
			}),
			response = await res.json()

		if (!res.ok) throw new Error(response.message)

		return response
	}
}
