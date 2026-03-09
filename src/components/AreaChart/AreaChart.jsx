import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createChart, AreaSeries } from 'lightweight-charts';

export default function AreaChart({ data }) {
  const chartContainerRef = useRef();

  useEffect(() => {
    if (!chartContainerRef.current || !data || data.length === 0) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: 'solid', color: '#111519' },
        textColor: '#d9d9d9',
      },
      grid: {
        vertLines: { visible: false },
        horzLines: { color: ' #2b2b43' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 680,
    });

    const areaSeries = chart.addSeries(AreaSeries, {
      lineColor: 'rgba(38, 166, 154, 1)',
      topColor: 'rgba(38, 166, 154, 0.28)',
      bottomColor: 'rgba(38, 166, 154, 1)',
      lineWidth: 2,
      priceFormat: {
        type: 'volume',
      },
    });

    areaSeries.setData(data);
    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, [data]);

  return <div ref={chartContainerRef} style={{ width: '100%' }} />;
}

AreaChart.propTypes = {
  data: PropTypes.array,
};
