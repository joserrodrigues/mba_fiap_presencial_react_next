import HomeController from '../../Screens/Home/HomeController';

export default function Home({ items }) {
    return (
        <HomeController items={items} />
    )
}


export async function getStaticProps() {

    console.log("Inicio ISR getStaticProps Revalidate");
    const res = await fetch(process.env.REACT_APP_URL + 'api/getItems');
    const items = await res.json();
    console.log("Checking items");
    console.log(items);


    return {
        props: {
            items: items,
        },
        revalidate: 10, // Em segundos
    }
}

