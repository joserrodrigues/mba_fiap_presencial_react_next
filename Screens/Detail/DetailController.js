import React from 'react';
import DetailView from './DetailView';
import { useRouter } from 'next/router';

const DetailController = ({userInfo}) => {
    
    const router = useRouter();
    const { id, data } = router.query;

    const onBackClicked = () => {
        router.back();
    }

    return (
        <DetailView id={id} data={data} onBackClicked={onBackClicked} userInfo={userInfo} />
    );
};

export default DetailController;