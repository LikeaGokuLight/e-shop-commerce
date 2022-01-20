import React from 'react';
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";

import CollectionPage from "../collection/Collection.component";

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
