import AdminHeaderSection from "../components/header";
import FooterSection from "../components/footer";
const MainLayout = ({ children }) => {
    return (
        <>
            <AdminHeaderSection></AdminHeaderSection>
                <div className="container" style={{
                    paddingTop: '170px',
                    minHeight: 'calc(100vh - 70px)'
                }}>
                    {children}
                </div>
            <FooterSection></FooterSection>
        </>
    )
  }
  
export default MainLayout