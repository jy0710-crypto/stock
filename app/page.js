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
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
      gap: '12px',
      padding: '12px 0',
      borderBottom: '0.5px solid #e1e0d9'
    }}>
      <div>
        <p style={{ fontSize: '12px', color: '#888780', margin: 0 }}>종목</p>
        <p style={{ fontSize: '14px', fontWeight: 500, margin: '4px 0 0' }}>{name}</p>
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#888780', margin: 0 }}>현재가</p>
        <p style={{ fontSize: '14px', fontWeight: 500, margin: '4px 0 0' }}>{data.price.toLocaleString()}원</p>
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#888780', margin: 0 }}>등락</p>
        <p style={{ 
          fontSize: '14px', 
          fontWeight: 500, 
          margin: '4px 0 0',
          color: data.status === 'down' ? '#e34948' : '#0ca30c'
        }}>
          {data.change > 0 ? '+' : ''}{data.change.toLocaleString()} ({data.changePercent > 0 ? '+' : ''}{data.changePercent}%)
        </p>
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#888780', margin: 0 }}>외인</p>
        <p style={{ 
          fontSize: '13px', 
          margin: '4px 0 0',
          color: data.foreign > 0 ? '#0ca30c' : '#e34948'
        }}>
          {data.foreign > 0 ? '+' : ''}{(data.foreign / 1000).toFixed(0)}천
        </p>
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#888780', margin: 0 }}>기관</p>
        <p style={{ 
          fontSize: '13px', 
          margin: '4px 0 0',
          color: data.institution > 0 ? '#0ca30c' : '#e34948'
        }}>
          {data.institution > 0 ? '+' : ''}{(data.institution / 1000).toFixed(0)}천
        </p>
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#888780', margin: 0 }}>개인</p>
        <p style={{ 
          fontSize: '13px', 
          margin: '4px 0 0',
          color: data.individual > 0 ? '#0ca30c' : '#e34948'
        }}>
          {data.individual > 0 ? '+' : ''}{(data.individual / 1000).toFixed(0)}천
        </p>
      </div>
    </div>
  );

  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '2rem' }}>📈 국내 주식 대시보드</h1>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
          {['overview', 'stocks', 'news'].map(tab => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              style={{
                padding: '8px 16px',
                background: selectedTab === tab ? '#0b0b0b' : 'transparent',
                color: selectedTab === tab ? 'white' : '#0b0b0b',
                border: '0.5px solid ' + (selectedTab === tab ? 'transparent' : '#e1e0d9'),
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 500
              }}
            >
              {tab === 'overview' && '시장 개요'}
              {tab === 'stocks' && '관심 종목'}
              {tab === 'news' && '주요 뉴스'}
            </button>
          ))}
        </div>

        {selectedTab === 'overview' && (
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: 500, margin: '0 0 1rem' }}>지수</h2>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '2rem' }}>
              <StatCard 
                label="코스피" 
                value={marketData.kospi.value}
                change={marketData.kospi.change}
                changePercent={marketData.kospi.changePercent}
                status={marketData.kospi.status}
              />
              <StatCard 
                label="코스닥" 
                value={marketData.kosdaq.value}
                change={marketData.kosdaq.change}
                changePercent={marketData.kosdaq.changePercent}
                status={marketData.kosdaq.status}
              />
            </div>

            <h2 style={{ fontSize: '16px', fontWeight: 500, margin: '0 0 1rem' }}>시장 상황</h2>
            <div style={{ 
              background: '#f9f8f7', 
              border: '0.5px solid #e1e0d9',
              borderRadius: '8px',
              padding: '1rem'
            }}>
              <div style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '13px', color: '#888780', margin: 0 }}>상태</p>
                <p style={{ fontSize: '14px', fontWeight: 500, margin: '6px 0 0', color: '#e34948' }}>
                  ⚠️ 급락장 (8.95% 하락) - 서킷브레이커 발동
                </p>
              </div>
              <div>
                <p style={{ fontSize: '13px', color: '#888780', margin: 0 }}>주요 요인</p>
                <p style={{ fontSize: '13px', margin: '6px 0 0' }}>SK하이닉스 15% 폭락 → 시장 전체 영향</p>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'stocks' && (
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: 500, margin: '0 0 1rem' }}>관심 종목</h2>
            {Object.entries(stocks).map(([name, data]) => (
              <StockRow key={name} name={name} data={data} />
            ))}
          </div>
        )}

        {selectedTab === 'news' && (
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: 500, margin: '0 0 1rem' }}>주요 뉴스</h2>
            {news.map((item, idx) => (
              <div key={idx} style={{ 
                padding: '12px 0',
                borderBottom: idx !== news.length - 1 ? '0.5px solid #e1e0d9' : 'none'
              }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <div style={{
                    background: item.impact === 'negative' ? '#e34948' : '#0ca30c',
                    color: 'white',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    {item.impact === 'negative' ? '↓' : '↑'}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '14px', fontWeight: 500, margin: 0 }}>{item.title}</p>
                    <p style={{ fontSize: '12px', color: '#888780', margin: '4px 0 0' }}>{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{
        background: '#faeeda',
        color: '#854f0b',
        border: '0.5px solid #ef9f27',
        borderRadius: '8px',
        padding: '1rem',
        fontSize: '13px',
        marginTop: '2rem'
      }}>
        <p style={{ margin: 0, fontWeight: 500 }}>⚠️ 알림</p>
        <p style={{ margin: '6px 0 0' }}>이는 기본 프로토타입입니다. 실제 API 연결 예정</p>
      </div>
    </main>
  );
}
