/** @param {any} params */
export default function mockFetch(params) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ status: 'success', data: params });
		}, 3000);
	});
}
