/**
 * Decorative solar system for the header corner.
 *
 * Animation is entirely CSS — see the `.solar-system` block in
 * styles/index.css. Each `.orbit` is a bordered circle that spins; its
 * `.planet` child sits on the ring, so rotating the ring carries the planet
 * around it. Hidden from assistive tech since it conveys nothing.
 */
export default function SolarSystem() {
  return (
    <div className="solar-system" aria-hidden="true">
      <span className="sun" />
      <span className="orbit orbit-1">
        <span className="planet" />
      </span>
      <span className="orbit orbit-2">
        <span className="planet" />
      </span>
      <span className="orbit orbit-3">
        <span className="planet" />
      </span>
    </div>
  )
}
