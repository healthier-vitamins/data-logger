function CalendarInfo ({ticker, trade, index}) {
    return (
        <>
        <div className="ticker">({index}) {ticker}</div>
        <div className="trade">{trade}</div>
        </>
    )
}

export default CalendarInfo