function SingleViewInfo ({ticker, price, time, trade, index}) {
    return (
        <section className="each-trade-activity">
            <p>({index}) {ticker}</p>
            <p>Price: {price}</p>
            <p>Trade: {trade}</p>
            <p>Time: {time}</p>
        </section>
    )
}

export default SingleViewInfo;
