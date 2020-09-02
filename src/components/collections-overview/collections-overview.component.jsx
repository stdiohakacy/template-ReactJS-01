import CollectionPreview from '../collection-preview/collection-preview.component'
import './collections-overview.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selectors'
import React from 'react'

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
        collections.map(({ id, ...otherCollections }) => (
                <CollectionPreview key={id} {...otherCollections} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
