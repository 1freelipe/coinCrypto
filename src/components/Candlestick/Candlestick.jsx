import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createChart, CandlestickSeries } from 'lightweight-charts';

export default function CandlestickChart({ data }) {
  const chartContainerRef = useRef();

  useEffect(() => {
    if (!chartContainerRef.current || !data || data.length === 0) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: 'solid', color: '#111519' },
        textColor: '#d9d9d9',
      },
      grid: {
        vertLines: { color: '#2b2b43' },
        horzLines: { color: '#2b2b43' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 680,
    });

    const candleStickSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });

    candleStickSeries.setData(data);

    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, [data]);

  return <div ref={chartContainerRef} style={{ width: '100%' }} />;
}

CandlestickChart.propTypes = {
  data: PropTypes.array,
};
