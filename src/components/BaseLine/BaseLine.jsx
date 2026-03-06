import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createChart, BaselineSeries } from 'lightweight-charts';

export default function BaseLine({ data, ath }) {
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
      height: 230,
    });

    const somaTotal = data.reduce((acc, item) => acc + item.value, 0);
    const media7days = somaTotal / data.length;

    const baseLineSeries = chart.addSeries(BaselineSeries, {
      baseValue: { type: 'price', price: media7days },
      topLineColor: 'rgba(38, 166, 154, 1)',
      topFillColor1: 'rgba(38, 166, 154, 0.28)',
      topFillColor2: 'rgba(38, 166, 154, 0.05)',
      bottomLineColor: 'rgba(239, 83, 80, 1)',
      bottomFillColor1: 'rgba(239, 83, 80, 0.05)',
      bottomFillColor2: 'rgba(239, 83, 80, 0.28)',
      priceFormat: {
        type: 'volume',
      },
    });

    baseLineSeries.setData(data);
    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, [data, ath]);

  return <div ref={chartContainerRef} style={{ width: '100%' }} />;
}

BaseLine.propTypes = {
  data: PropTypes.array,
  ath: PropTypes.number,
};
