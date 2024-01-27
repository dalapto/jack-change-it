export function range(min: number, max: number, step = 1): number[] {
	const list: number[] = [];
	while (min < max + 1) {
		list.push(min);
		min = min + step;
	}
	return list;
}
