import './globals.css'

export const metadata = {
  title: '국내 주식 대시보드',
  description: '실시간 주식 정보 모니터링',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
