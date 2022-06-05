function Entry ({ticker, trade, price}) {

    
    return (
        <>
        <div className="ticker">{ticker}</div>
        <div className="trade">{trade}</div>
        <div className="price">{price}</div>
        </>
    )
}
export default Entry;