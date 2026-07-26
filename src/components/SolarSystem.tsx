/**
 * Decorative solar system for the header corner: the sun plus the four
 * inner planets.
 *
 * Animation is entirely CSS — see the `.solar-system` block in
 * styles/index.css. Each `.orbit` is a bordered circle that spins; its
 * `.planet` child sits on the ring, so rotating the ring carries the planet
 * around it. Hidden from assistive tech since it conveys nothing.
 */
const PLANETS = ['mercury', 'venus', 'earth', 'mars'] as const

export default function SolarSystem() {
  return (
    <div className="solar-system" aria-hidden="true">
      <span className="sun" />
      {PLANETS.map((planet) => (
        <span key={planet} className={`orbit orbit-${planet}`}>
          <span className="planet" />
        </span>
      ))}
    </div>
  )
}
