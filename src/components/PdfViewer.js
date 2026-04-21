import React, { useState } from 'react';

export default function PdfViewer({ url, title = 'PDF 文档', height = '700px' }) {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{
      width: '100%',
      maxWidth: '100%',
      margin: '1.5rem 0',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid var(--ifm-color-emphasis-300)',
    }}>
      <div style={{
        padding: '8px 16px',
        backgroundColor: 'var(--ifm-background-secondary)',
        borderBottom: '1px solid var(--ifm-color-emphasis-300)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>
          📄 {title}
        </span>
        <a href={url} target="_blank" rel="noopener noreferrer"
           style={{ fontSize: '0.8rem', color: 'var(--ifm-color-primary)', textDecoration: 'none' }}>
          新窗口打开 ↗
        </a>
      </div>
      <div style={{ position: 'relative', width: '100%', height }}>
        {loading && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: 'var(--ifm-background-primary)', zIndex: 1,
          }}>
            <p style={{ color: 'var(--ifm-color-emphasis-400)' }}>正在加载 PDF...</p>
          </div>
        )}
        <iframe
          src={`${url}#toolbar=0&navpanes=1`}
          title={title}
          width="100%"
          height="100%"
          style={{ border: 'none', display: 'block' }}
          onLoad={() => setLoading(false)}
        >
          <p>您的浏览器不支持 PDF 预览，<a href={url}>点击此处下载</a>。</p>
        </iframe>
      </div>
    </div>
  );
}
