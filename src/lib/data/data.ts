async function fetchData() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
	return await response.json();
}

export default fetchData;
