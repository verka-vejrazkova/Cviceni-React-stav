import React from 'react'

// Tvoříš komponentu, která zobrazuje vysoce přesnou předpověď
// počasí v Brně.

// Zadání 1:
// Vytvoř stavovou proměnnou s výchozí hodnotou `možná`.

// Zadání 2:
// Proměnnou vypiš místo `ano/ne/možná`.

// Zadání 3:
// Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`,
// případně `ne` na `možná`.

const Uloha8 = () => {
	return (
		<>
			<h3>Prší v Brně: ano/ne/možná</h3>
			<button>změnit</button>
		</>
	)
}

export default Uloha8;