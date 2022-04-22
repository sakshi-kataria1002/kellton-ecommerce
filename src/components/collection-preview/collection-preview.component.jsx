import CollectionItem from "../collection-item/collection-item.component"
import './collection-preview.style.scss'

const CollectionPreview = ({collection}) => {
    const {items} = collection
    return (
        <>
            <div className='collection-preview'>
                <h1>{collection.title.toUpperCase()}</h1>
                <div className="preview">
                    {
                        items
                        .filter((item, index) => index < 4)
                        .map(
                            item => <CollectionItem 
                                        key={item.id}
                                        item={item}
                                    />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default CollectionPreview