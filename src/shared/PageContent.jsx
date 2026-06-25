const PageContent = ({title, children}) => {
    return (  
        <main className="landing-page">
            <div className="error-page">
                <h5 className="error__title">{title}</h5>
                {children}
            </div>
        </main>
    );
}
 
export default PageContent;