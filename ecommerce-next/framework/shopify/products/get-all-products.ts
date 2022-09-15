const fetchApi = async () => { 
    const url = "https://jsonplaceholder.typicode.com/todos"

    const res = fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = (await res).json()
    return { data }
}



const getAllProducts = async (): Promise <any[]> => {
    // const products = [1,2,3]
    const products = await fetchApi()
    return products.data
}

export default getAllProducts;