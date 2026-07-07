import RouteSection from '../components/RouteSection.jsx'

const routes = [
  { name: '秦岭北麓环山路', tone: 'Local Route', details: '西安车友高频提及的驾驶文化场景，承载周末驾驶、路线节奏与车辆反馈讨论。' },
  { name: '骊山', tone: 'Mountain Memory', details: '兼具地理辨识度与车友记忆点，是西安霹雳火车队本地语义的重要组成。' }
]

export default function Routes() {
  return (
    <section className="section split" id="routes">
      <div>
        <p className="eyebrow">Qinling North · Lishan</p>
        <h2>常年活跃于秦岭北麓环山路与骊山</h2>
        <p>车队关注安全前提下的路线认知、驾驶边界、机械状态与车友共创，不鼓励危险驾驶。</p>
      </div>
      <div className="route-list">
        {routes.map((route) => <RouteSection key={route.name} {...route} />)}
      </div>
    </section>
  )
}
