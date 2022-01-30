import React from 'react';
import DetailController from '../../Screens/Detail/DetailController';

const detail = ({ userInfo }) => {
    return (
        <DetailController userInfo={userInfo} />
    );
};
export default detail;

export async function getServerSideProps({ query }) {

    console.log("Inicio SSR getServerSideProps");
    const res = await fetch(process.env.REACT_APP_URL + `api/getInfo/${query.id}?search=Roberto`);
    const userInfo = await res.json();
    console.log("Checking items");
    console.log(userInfo);

    return {
        props: {
            userInfo: userInfo,
        },
    }
}
