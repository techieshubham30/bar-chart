import "./chart-bar.css";
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
const ChartBar = () => {
 
  const [data, setData] = useState([200, 300, 100, 75, 30, 150]);
  const svgRef = useRef();

  useEffect(() => {
    const [containerWidth, containerHeight] = [400, 300];
    const svg = d3
      .select(svgRef.current)
      .attr("width", containerWidth)
      .attr("hight", containerHeight)
      .style("overflow", "visible")
      .style("margin-top", "75px");

    const xScale = d3
      .scaleBand()
      .domain(data.map((value, i) => i))
      .range([0, containerWidth])
      .padding(0.5);

    const yScale = d3
      .scaleLinear()
      .domain([0, containerHeight])
      .range([containerHeight, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(6);
    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0,${containerHeight})`);
    svg.append("g").call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("x", (val, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", (val) => containerHeight - yScale(val))
      .attr("fill", "aqua")
      .on("click", (d, i) => {
        setData((prev) =>
          prev.map((elem, i) => {
            return Math.floor(Math.random() * 200) + 10;
          })
        );
      });

      


  }, [data]);
  return (
    <div className="chart-bar">
      <svg ref={svgRef} className="xyz"></svg>
    </div>
  );
};

export { ChartBar };
