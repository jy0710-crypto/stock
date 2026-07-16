'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('overview');
  
  const marketData = {
    kospi: { value: 6806.93, change: -669.01, changePercent: -8.95, status: 'down' },
    kosdaq: { value: 799.36, change: -38.07, changePercent: -4.55, status: 'down' }
  };

  const stocks = {
    '현대차': { 
      code: '005380', 
      price: 504000, 
      change: -5000, 
      changePercent: -0.98,
      foreign: -214973,
      institution: 24930,
      individual: 196289,
      status: 'down'
    },
    'SK하이닉스': { 
      code: '000660', 
      price: 1845000, 
      change: -322000, 
      changePercent: -14.87,
      foreign: -106584,
      institution: -27686,
      individual: 136289,
      status: 'down'
    }
  };

  const news = [
    { title: 'SK하이닉스 HBM 생산량 축소 계획 보도', date: '7월 13일', impact: 'negative' },
    { title: '코스피 서킷브레이커 발동 (7번째)', date: '7월 13일', impact: 'negative' },
    { title: '외국인 대규모 순매도 (1조 6,850억원)', date: '7월 13일', impact: 'negative' }
  ];

  const StatCard = ({ label, value, change, changePercent, status }) => (
    <div style={{ 
      background: '#f9f8f7', 
      border: '0.5px solid #e1e0d9',
      borderRadius: '8px',
      padding: '1rem',
      flex: 1
    }}>
      <p style={{ fontSize: '13px', color: '#888780', margin: '0 0 8px' }}>{label}</p>
      <p style={{ fontSize: '22px', fontWeight: 500, margin: 0 }}>{value.toLocaleString()}</p>
      <p style={{ 
        fontSize: '12px', 
        margin: '6px 0 0',
        color: status === 'down' ? '#e34948' : '#0ca30c'
      }}>
        {change > 0 ? '+' : ''}{change.toLocaleString()} ({changePercent > 0 ? '+' : ''}{changePercent}%)
      </p>
    </div>
  );

  const StockRow = ({ name, data }) => (
    <div style={{
