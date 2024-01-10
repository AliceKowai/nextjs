function MyApp({Component, pageProps}){
    return(
        <>
        <style>{`{
            font-family:sans-serif;
        }`}</style>
        <h1>soco</h1>
        <Component {...pageProps}/>
        </>
    )
}
export default MyApp