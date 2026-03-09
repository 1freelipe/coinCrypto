import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createChart, HistogramSeries } from 'lightweight-charts';

export default function Histogram({ data }) {
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
        horzLines: { color: '#2b2b43' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 330,
    });

    const histogramSeries = chart.addSeries(HistogramSeries, {
      color: '#26a69a',
      priceFormat: {
        type: 'volume',
      },
    });

    histogramSeries.setData(data);
    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, [data]);

  return <div ref={chartContainerRef} style={{ width: '100%' }} />;
}

Histogram.propTypes = {
  data: PropTypes.array,
};
