import React from 'react';
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import CollectionPage from "../category/collection.component";

const ShopPage = ({ match }) => {
    console.log(match)
    return (
        <div className='shop-page'>
            <Route exact path={"/dd"} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
}

export default ShopPage;
