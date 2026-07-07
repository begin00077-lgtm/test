export default function CarCard({ name, tag, description }) {
  return (
    <article className="card car-card">
      <p className="card-tag">{tag}</p>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  )
}
