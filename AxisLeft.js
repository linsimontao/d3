export const AxisLeft = ({ yScale }) => yScale.domain().map(country => (
    <g className="tick">
        <text
            style={{ textAnchor: 'end' }}
            x={-3}
            y={yScale(country) + yScale.bandwidth() / 2}
            dy=".32em">{country}
        </text>
    </g >
));