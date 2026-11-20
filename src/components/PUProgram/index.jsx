import React from 'react';
import styles from './styles.module.css';

export default function PUProgram({projectId, language = 'zh-CN', image, title}) {
  const english = language === 'en';
  const projectUrl = `https://makecode.microbit.org/${projectId}?lang=${language}`;
  const editorUrl = `https://makecode.microbit.org/?lang=${language}#pub:${projectId}`;
  return (
    <section aria-label={title}>
      <figure className={styles.figure}>
        <a href={image} target="_blank" rel="noopener noreferrer" aria-label={english ? `Open full-size image: ${title}` : `查看大图：${title}`}>
          <img className={styles.blocks} src={image} alt={title} loading="lazy" />
        </a>
        <figcaption>{title}</figcaption>
      </figure>
      <p><a href={english ? editorUrl : projectUrl} target="_blank" rel="noopener noreferrer">{english ? 'Open this program in MakeCode to view, edit or download' : '在 MakeCode 中查看、编辑或下载此程序'}</a></p>
      <details open>
        <summary>{english ? 'Interactive program preview' : '互动程序预览'}</summary>
        <iframe className={styles.frame} src={editorUrl} title={title} loading="lazy" allowFullScreen sandbox="allow-scripts allow-same-origin allow-downloads allow-popups allow-forms" />
      </details>
    </section>
  );
}
