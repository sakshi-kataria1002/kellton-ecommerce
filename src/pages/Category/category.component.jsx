import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component'
import './category.style.scss'

const Category = ({collections}) => {
   let params = useParams()
   console.log(collections)
   let filteredCollections = collections.filter(
       collection => 
       collection.routeName.includes(params.categoryId.toLowerCase())
   )
  let {items,title} = filteredCollections[0]
    return (
        <>  
        <div className='category-preview'>
            <h1 className='title'>
                {title.toUpperCase()}
            </h1>
            <div className='preview'>
                {
                items.map(item => <CollectionItem item={item} />)
                }
            </div>
        </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    collections: state.collection.collections
})
export default connect(mapStateToProps, null)(Category)