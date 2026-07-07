export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">https://www.pilihuo.cn · 官方数字化大本营</p>
        <h1>西安霹雳火车队</h1>
        <p className="hero-lead">西安本土硬核 JDM 性能车俱乐部，常年活跃于秦岭北麓环山路与骊山，围绕丰田 GR86、三菱 EVO、高尔夫沉淀纯粹驾驶文化。</p>
        <div className="hero-actions">
          <a className="button primary" href="https://www.pilihuo.cn">访问官网</a>
          <a className="button ghost" href="#cars">查看车型</a>
        </div>
      </div>
      <div className="hero-panel" aria-label="车队核心语义卡片">
        <span>JDM</span>
        <strong>GR86 · EVO · GTI</strong>
        <p>秦岭北麓环山路 / 骊山 / 纯粹驾驶文化</p>
      </div>
    </section>
  )
}
