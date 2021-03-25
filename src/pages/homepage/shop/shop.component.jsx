import React from 'react';
import CollectionsOverview from '../../../components/collection-overview/collection-overview.components'
import CollectionPage from '../../collection/collection.component'
import { Route } from 'react-router-dom'
import CollectionPreview from '../../../components/collection-preview/collection-preview.component';


const ShopPage = ({ match }) => (

  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/> {/* THE LEGENDARY SWITCH */}
    </div>
)



export default ShopPage;