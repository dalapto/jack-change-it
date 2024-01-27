export type SuitType = "C" | "D" | "H" | "S";
export type JokerType = "R" | "B";
export type CardType = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13";

export interface CardData {
	deck: string;
	suit: SuitType;
	value: CardType;
}

export type CardCollection = CardData[];
