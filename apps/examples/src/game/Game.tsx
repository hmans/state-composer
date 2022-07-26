type Action<Names extends string> = () => Names | null

type State<Names extends string> = Record<string, Action<Names>>

type StateMachine<Names extends string> = {
	[name in Names]: State<Names>
}

const StateMachine = <S extends StateMachine<Names>, Names extends string>(
	config: S
) => {}

const config: StateMachine<"start" | "game"> = {
	start: {
		enterGame: () => "game"
	},
	game: {}
}

StateMachine(config)

export const Game = () => {
	return <p>I'm the game</p>
}
