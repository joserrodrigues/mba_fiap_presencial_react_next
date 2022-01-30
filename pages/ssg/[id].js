import HomeController from '../../Screens/Home/HomeController';

export default function Home({ items }) {
    return (
        <HomeController items={items} />
    )
}

export async function getStaticProps() {

    console.log("Inicio SSG getStaticProps with params");
    const res = await fetch(process.env.REACT_APP_URL + 'api/getItems');
    const items = await res.json();
    console.log("Checking items");
    console.log(items);


    return {
        props: {
            items: items,
        },
    }
}

export async function getStaticPaths() {
    return {
        paths:
            [{ params: { id: '1' } },
            { params: { id: '2' } }],
        fallback: true // false | blocking
        // false - coloca erro 400 se variável for diferente do array acima
        // true -  se a variável for diferente do array acima, carrega a página sem informação e depois carrega novamente
        // 'blocking' - espera o carregamento da informação para mostrar a página
    };
}
