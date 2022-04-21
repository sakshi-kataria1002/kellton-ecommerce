import React from 'react'
import Directory from '../../components/directory/directory.component'
import './homepage.style.scss'

// Maintaining the entire state for the home page with the
// sections array that contributes to give the categories 
// of products
class HomePage extends React.Component {
    constructor(){
        super()
        this.state = { /**storing sections in this.state object*/
            sections: [
                {
                  title: 'Hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1
                },
                {
                  title: 'Jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2
                },
                {
                  title: 'Sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3
                },
                {
                  title: 'Womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                },
                {
                    title: 'Mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5
                }
            ]
        }
    }
    render() {
        // From the this.state object destructuring sections
        const {sections} = this.state /**object destructuring */
        return (
            <>
                <div className='homepage'>
                    <h1>Welcome to Home Page</h1>
                    {/**sending sections array as a prop */}
                    <Directory sections = {sections} />
                </div>
            </>
        )
    }
}
export default HomePage
