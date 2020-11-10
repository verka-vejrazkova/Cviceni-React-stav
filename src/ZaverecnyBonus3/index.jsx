import React from 'react'
import { useCasVSekundach } from './hodiny'

// Zadání: Pomocí předchystané stavové proměnné, která se mění každou sekundu, zobraz aktuální čas ve formátu 7:49:05.

export const ZaverecnyBonus3 = () => {
	const casVSekundach = useCasVSekundach()

	const sekundy = casVSekundach % 60
	const minuty = Math.floor(casVSekundach / 60) % 60
	const hodiny = Math.floor(casVSekundach / 60 / 60)

	return (
		<>
			Čas právě teď:{' '}
			<b>
				{hodiny}:{minuty}:{sekundy}
			</b>
		</>
	)
}
