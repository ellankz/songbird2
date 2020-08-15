export interface BirdInterface {
    image: string,
    name: string,
    audio: string,
    species: string,
    description: string,
    id: number | null,
    clicked?: boolean,
    color?: 'red' | 'green' | 'gray'
}

export interface BirdHighlightInterface {
    index: number,
    color: 'green' | 'gray' | 'red'
}