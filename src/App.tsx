const features = [
  '现代化项目结构',
  '可扩展的 React + TypeScript 代码',
  '统一的前端样式与组件基础',
  '适合继续迭代的开发基座'
]

export default function App() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <span className="badge">FG-commits / project</span>
        <h1>项目已初始化完成</h1>
        <p className="subtitle">
          这是一个可直接开发的前端基础模板，已包含 React、TypeScript 与 Vite 的
          标准配置，可直接进入功能开发和页面迭代。
        </p>

        <div className="feature-list">
          {features.map((item) => (
            <div key={item} className="feature-item">
              <span className="dot" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="actions">
          <button type="button">开始开发</button>
          <button type="button" className="secondary">
            查看文档
          </button>
        </div>
      </section>
    </main>
  )
}
