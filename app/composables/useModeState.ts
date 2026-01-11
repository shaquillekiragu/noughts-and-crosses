export default function useModeState() {
	const game_mode = useState<0 | "player" | "computer">("game_mode", () => 0);
	return game_mode;
}
