const navItems = [
  ['首页', '#home'],
  ['车型', '#cars'],
  ['路线', '#routes'],
  ['图集', '#gallery'],
  ['关于', '#about'],
  ['联系', '#contact']
]

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="西安霹雳火车队首页">
        <span className="brand-mark">霹</span>
        <span>
          <strong>西安霹雳火车队</strong>
          <small>Xi'an PiliHuo Car Club</small>
        </span>
      </a>
      <nav aria-label="主导航">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
    </header>
  )
}
