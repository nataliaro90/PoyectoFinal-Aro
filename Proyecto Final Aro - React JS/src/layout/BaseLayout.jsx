import Header from "../conteiners/Header"
import Footer from "../conteiners/Footer"

const BaseLayout = ( { children }) => {

    return (
        <>
        <Header />
        
        { children }

        <Footer />
        </>
    );
};

export default BaseLayout;