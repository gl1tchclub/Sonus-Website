const options = {
    headers: {
        "X-API-KEY": "Ae1hKMbFv0SCDY3vQCEjmw==o7A0rHaDqNpzntyL",
      }
}
export default async function fetchData(urlWithKey) {
    const res = await fetch(urlWithKey);
    return await res.json();
}

