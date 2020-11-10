import React from 'react'
import { useCasVSekundach } from './hodiny'

// Zadání: Pomocí předchystané stavové proměnné, která se mění každou sekundu, zobraz aktuální čas ve formátu 7:49:05.

export const ZaverecnyBonus3 = () => {
	const casVSekundach = useCasVSekundach()

	return (
		<>
			Čas právě teď: <b>{casVSekundach}</b>
		</>
	)
}
