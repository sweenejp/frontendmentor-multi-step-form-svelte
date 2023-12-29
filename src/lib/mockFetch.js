export default function mockFetch() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ status: 'success' });
		}, 3000);
	});
}
