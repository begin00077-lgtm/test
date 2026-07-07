const items = ['山路晨光', '夜色集合', '机械细节', '车友共创']

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <p className="eyebrow">JDM Visual System</p>
      <h2>JDM 风格图集占位</h2>
      <div className="grid four">
        {items.map((item) => <div className="gallery-tile" key={item}>{item}</div>)}
      </div>
    </section>
  )
}
