'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedSector, setSelectedSector] = useState('semiconductor');
  const [selectedTab, setSelectedTab] = useState('overview');

  const sectors = {
    semiconductor: {
      name: '반도체 / 디스플레이',
      stocks: {
        우량주: [
          {
            name: '삼성전자',
            code: '005930',
            price: 299500,
            change: -7500,
            changePercent: -2.44,
            per: 45.3,
            pbr: 4.01,
            roe: 17.58,
            quarter: 'Q1 2026',
            salesGrowth: 69.2,
            profitGrowth: 756.1,
            status: 'down'
          },
          {
            name: 'SK하이닉스',
            code: '000660',
            price: 1830000,
            change: -322000,
            changePercent: -14.87,
            per: 20.68,
            pbr: 9.46,
            roe: 45.74,
            quarter: 'Q1 2026',
            salesGrowth: 198.1,
            profitGrowth: 405.5,
            status: 'down'
          }
        ],
        유망주: [
          {
            name: 'DB하이텍',
            code: '000990',
            price: 202000,
            change: 18500,
            changePercent: 10.1,
            per: 28.6,
            pbr: 3.37,
            roe: 12.44,
            quarter: '2026E',
            salesGrowth: 15.2,
            profitGrowth: 41.3,
            status: 'up'
          },
          {
            name: '네패스',
            code: '033640',
            price: 32950,
            change: 2050,
            changePercent: 6.64,
            per: 48.12,
            pbr: 6.46,
            roe: 13.42,
            quarter: '2026E',
            salesGrowth: 8.5,
            profitGrowth: 25.0,
            status: 'up'
          }
        ]
      }
    },
    auto: {
      name: '자동차 / 자동차 부품',
      stocks: {
        우량주: [
          {
            name: '현대자동차',
            code: '005380',
            price: 504000,
            change: -5000,
            changePercent: -0.98,
            per: 5.2,
            pbr: 0.65,
            roe: 12.5,
            quarter: 'Q1 2026',
            salesGrowth: 3.2,
            profitGrowth: -5.0,
            status: 'down'
          }
        ],
        유망주: [
          {
            name: '현대모비스',
            code: '012330',
            price: 469500,
            change: -18000,
            changePercent: -3.69,
            per: 12.73,
            pbr: 0.92,
            roe: 7.23,
            quarter: 'Q1 2026',
            salesGrowth: 5.5,
            profitGrowth: -13.5,
            status: 'down'
          }
        ]
      }
    },
    battery: {
      name: '배터리 / 에너지',
      stocks: {
        우량주: [
          {
            name: 'LG에너지솔루션',
            code: '373220',
            price: 0,
            change: 0,
            changePercent: 0,
            per: 0,
            pbr: 0,
            roe: 0,
            quarter: '데이터 수집 예정',
            salesGrowth: 0,
            profitGrowth: 0,
            status: 'pending'
          }
        ],
        유망주: [
          {
            name: '에코프로비엠',
            code: '247540',
            price: 0,
            change: 0,
            changePercent: 0,
            per: 0,
            pbr: 0,
            roe: 0,
            quarter: '데이터 수집 예정',
            salesGrowth: 0,
            profitGrowth: 0,
            status: 'pending'
          }
        ]
      }
    }
  };

  const StockCard = ({ stock, type }) => (
    <div style={{
      background: '#f9f8f7',
      border: '0.5px solid #e1e0d9',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        marginBottom: '1rem'
      }}>
        <div>
          <p style={{ fontSize: '14px', fontWeight: 600, margin: 0 }}>{stock.name}</p>
          <p style={{ fontSize: '12px', color: '#888780', margin: '4px 0 0' }}>
            {type === '우량주' ? '💎 우량주' : '🚀 유망주'}
          </p>
        </div>
        <div style={{
          background: stock.status === 'down' ? '#fde8e8' : stock.status === 'up' ? '#e8f5e9' : '#f5f5f5',
          padding: '4px 8px',
          borderRadius: '4px'
        }}>
          <p style={{
            fontSize: '12px',
            fontWeight: 500,
            margin: 0,
            color: stock.status === 'down' ? '#e34948' : stock.status === 'up' ? '#0ca30c' : '#888780'
          }}>
            {stock.status === 'down' ? '📉' : stock.status === 'up' ? '📈' : '⏳'}
          </p>
        </div>
      </div>

      {stock.status !== 'pending' ? (
        <div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            marginBottom: '1rem'
          }}>
            <div>
              <p style={{ fontSize: '11px', color: '#888780', margin: 0 }}>주가</p>
              <p style={{ fontSize: '13px', fontWeight: 600, margin: '4px 0 0' }}>
                {(stock.price).toLocaleString()}원
              </p>
            </div>
            <div>
              <p style={{ fontSize: '11px', color: '#888780', margin: 0 }}>등락</p>
              <p style={{
                fontSize: '13px',
                fontWeight: 600,
                margin: '4px 0 0',
                color: stock.status === 'down' ? '#e34948' : '#0ca30c'
              }}>
                {stock.change > 0 ? '+' : ''}{stock.change.toLocaleString()} ({stock.changePercent}%)
              </p>
            </div>
            <div>
              <p style={{ fontSize: '11px', color: '#888780', margin: 0 }}>코드</p>
              <p style={{ fontSize: '13px', fontWeight: 600, margin: '4px 0 0' }}>{stock.code}</p>
            </div>
          </div>

          <div style={{
            background: '#ffffff',
            border: '0.5px solid #e1e0d9',
            borderRadius: '6px',
            padding: '0.75rem',
            marginBottom: '0.75rem'
          }}>
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#0b0b0b', margin: '0 0 8px' }}>📊 재무지표</p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '8px'
            }}>
              <div>
                <p style={{ fontSize: '10px', color: '#888780', margin: 0 }}>PER</p>
                <p style={{ fontSize: '12px', fontWeight: 600, margin: '2px 0 0' }}>{stock.per.toFixed(1)}배</p>
              </div>
              <div>
                <p style={{ fontSize: '10px', color: '#888780', margin: 0 }}>PBR</p>
                <p style={{ fontSize: '12px', fontWeight: 600, margin: '2px 0 0' }}>{stock.pbr.toFixed(2)}배</p>
              </div>
              <div>
                <p style={{ fontSize: '10px', color: '#888780', margin: 0 }}>ROE</p>
                <p style={{ fontSize: '12px', fontWeight: 600, margin: '2px 0 0' }}>{stock.roe.toFixed(1)}%</p>
              </div>
            </div>
          </div>

          <div style={{
            background: '#ffffff',
            border: '0.5px solid #e1e0d9',
            borderRadius: '6px',
            padding: '0.75rem'
          }}>
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#0b0b0b', margin: '0 0 8px' }}>📈 실적 ({stock.quarter})</p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px'
            }}>
              <div>
                <p style={{ fontSize: '10px', color: '#888780', margin: 0 }}>매출 성장률</p>
                <p style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  margin: '2px 0 0',
                  color: stock.salesGrowth > 0 ? '#0ca30c' : '#e34948'
                }}>
                  {stock.salesGrowth > 0 ? '+' : ''}{stock.salesGrowth}%
                </p>
              </div>
              <div>
                <p style={{ fontSize: '10px', color: '#888780', margin: 0 }}>영업이익 성장률</p>
                <p style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  margin: '2px 0 0',
                  color: stock.profitGrowth > 0 ? '#0ca30c' : '#e34948'
                }}>
                  {stock.profitGrowth > 0 ? '+' : ''}{stock.profitGrowth}%
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{
          background: '#f0f0f0',
          padding: '1rem',
          borderRadius: '6px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '12px', color: '#888780', margin: 0 }}>⏳ {stock.quarter}</p>
        </div>
      )}
    </div>
  );

  const sectorData = sectors[selectedSector];

  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '2rem' }}>📊 한국 주식 대시보드</h1>

      {/* 섹터 탭 */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
          marginBottom: '1.5rem'
        }}>
          {Object.entries(sectors).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setSelectedSector(key)}
              style={{
                padding: '10px 16px',
                background: selectedSector === key ? '#0b0b0b' : '#f9f8f7',
                color: selectedSector === key ? 'white' : '#0b0b0b',
                border: '0.5px solid ' + (selectedSector === key ? 'transparent' : '#e1e0d9'),
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 500,
                whiteSpace: 'nowrap'
              }}
            >
              {value.name}
            </button>
          ))}
        </div>

        {/* 선택된 섹터의 데이터 */}
        <div>
          <h2 style={{ fontSize: '16px', fontWeight: 600, margin: '1.5rem 0 1rem' }}>💎 우량주</h2>
          {sectorData.stocks.우량주.map((stock, idx) => (
            <StockCard key={idx} stock={stock} type="우량주" />
          ))}

          <h2 style={{ fontSize: '16px', fontWeight: 600, margin: '2rem 0 1rem' }}>🚀 유망주</h2>
          {sectorData.stocks.유망주.map((stock, idx) => (
            <StockCard key={idx} stock={stock} type="유망주" />
          ))}
        </div>
      </div>

      {/* 주의 사항 */}
      <div style={{
        background: '#faeeda',
        color: '#854f0b',
        border: '0.5px solid #ef9f27',
        borderRadius: '8px',
        padding: '1rem',
        fontSize: '12px',
        marginTop: '2rem'
      }}>
        <p style={{ margin: '0 0 6px', fontWeight: 500 }}>📌 주의사항</p>
        <p style={{ margin: 0 }}>• 데이터는 2026년 7월 기준입니다</p>
        <p style={{ margin: '4px 0 0' }}>• 투자는 신중하게 판단하시기 바랍니다</p>
      </div>
    </main>
  );
}
