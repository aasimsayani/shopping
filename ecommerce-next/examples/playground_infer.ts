export default async function play() {
	type Greeting = { message: string };

    type InferHelloProps<T>  = T extends () => Promise<{props: infer Props}>
    ? Props
    : never

    // automatically returning into promise 
	const getHelloProps = async function() {
		const greeting = { message: "Price Increase!" };

		return {
			props: {
                greeting,
                data: {
                    cars: ["car1", "car2", "car3"]
                }
            }
		};
	};

    // const data = getHelloProps().then(data => {
    // })
    const props = await getHelloProps()

    function sayHello(props: InferHelloProps<typeof getHelloProps>) {
        console.log(props.greeting)
    }

    const data = await getHelloProps()
    sayHello(data.props)



}
