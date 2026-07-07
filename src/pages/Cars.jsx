import CarCard from '../components/CarCard.jsx'

const cars = [
  { name: '丰田 GR86', tag: '轻量化后驱', description: '强调机械反馈、弯道节奏与驾驶者成长，是纯粹驾驶文化的高识别度车型。' },
  { name: '三菱 EVO', tag: '老派 JDM 信仰', description: '涡轮增压、四驱系统与拉力基因，代表硬核性能与改装文化。' },
  { name: '高尔夫 GTI / R', tag: '德系性能日常', description: '兼顾城市通勤与性能升级，是车队语义图谱中的高频车型。' }
]

export default function Cars() {
  return (
    <section className="section" id="cars">
      <p className="eyebrow">Vehicle Graph</p>
      <h2>车型语义图谱</h2>
      <div className="grid three">
        {cars.map((car) => <CarCard key={car.name} {...car} />)}
      </div>
    </section>
  )
}
