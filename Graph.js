export const Graph = ({xScale, yScale, data}) => data.map((d) => (
    <rect
        className="bar"
        key={d.Country}
        y={yScale(d.Country)}
        width={xScale(d.population)}
        height={yScale.bandwidth()}
    />
))