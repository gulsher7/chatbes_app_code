import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function apiReq(
	endPoint,
	data,
	method,
	headers,
	requestOptions = {}
) {

	return new Promise(async (res, rej) => {
		headers = {
			...headers
		};

		if (method === 'get' || method === 'delete') {
			data = {
				...requestOptions,
				...data,
				headers
			};
		}

		axios[method](endPoint, data, { headers })
			.then(result => {
				const { data } = result;

				if (data.status === false) {
					return rej(data);
				}

				return res(data);
			})
			.catch(error => {
				console.log(error)
				console.log(error && error.response, 'the error respne')
				if (error && error.response && error.response.status === 401) {
                    return rej({ ...error.response.data, msg: "Aunauthorized" })

				}
				if (error && error.response && error.response.data) {
					if (!error.response.data.message) {
						return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" })
					}
					return rej(error.response.data)
				} else {
					return rej({ message: "Network Error", msg: "Network Error" });
				}
			});
	});
}


export function apiPost(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
	return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'put', headers);
}


export const setItem = async (key, value) => {
	try {
	  const jsonValue = JSON.stringify(value)
	  await AsyncStorage.setItem(key, jsonValue)
	} catch (e) {
		console.log("error raised during setItem",e)
	}
  }

export const getItem = async (key) => {
	return new Promise((resolve, reject)=>{
		AsyncStorage.getItem(key).then(data=>{
			resolve(JSON.parse(data))
		}).catch((error)=>{
			reject(error)
		})
	})
  }

  export const clearAllItem = async () => {
	try {
		await AsyncStorage.clear()
	} catch (e) {
		console.log("error raised during setItem",e)
	}
  }

