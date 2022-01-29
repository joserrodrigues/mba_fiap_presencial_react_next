import React, {useState, useEffect} from 'react';
import DetailView from './DetailView';
import { useRouter } from 'next/router';

const DetailController = () => {
    
    const router = useRouter();
    const { id, data } = router.query;
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/api/getInfo/${id}?search=Roberto`)
            .then(function (response) {
                return response.json();
            })
            .then(function (info) {
                console.log(info);
                setUserInfo(info);
            });
    }, []);

    const onBackClicked = () => {
        router.back();
    }

    return (
        <DetailView id={id} data={data} onBackClicked={onBackClicked} userInfo={userInfo} />
    );
};

export default DetailController;