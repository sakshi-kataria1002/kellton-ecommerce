import "./homepage.style.scss"


const HomePage = () => {
    return(
        <>
            <div className="homepage" >
                    <h1>Welcome to my home page</h1>
                        <div className="directory-menu" >
                            <div className="menu-item" >
                                <div className="content" >
                                    <div className="title" >HATS</div>
                                    <div className="subtitle" >SHOP NOW</div>
                                </div>
                            </div>

                            <div className="menu-item" >
                                <div className="content" >
                                    <div className="title" >JACKETS</div>
                                    <div className="subtitle" >SHOP NOW</div>
                                </div>
                            </div>

                            <div className="menu-item" >
                                <div className="content" >
                                    <div className="title" >SNEAKERS</div>
                                    <div className="subtitle" >SHOP NOW</div>
                                </div>
                            </div>

                            <div className="menu-item" >
                                <div className="content" >
                                    <div className="title" >WOMENS</div>
                                    <div className="subtitle" >SHOP NOW</div>
                                </div>
                            </div>

                            <div className="menu-item" >
                                <div className="content" >
                                    <div className="title" >MENS</div>
                                    <div className="subtitle" >SHOP NOW</div>
                                </div>
                            </div>
                        </div>
            </div>
        </>
    )
}

export default HomePage
