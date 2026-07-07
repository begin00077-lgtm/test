export default function RouteSection({ name, tone, details }) {
  return (
    <article className="route-card">
      <span>{tone}</span>
      <h3>{name}</h3>
      <p>{details}</p>
    </article>
  )
}
