export interface newsAnswer {
    counts: number,
    news: [
        {
            date: string,
            owner: object,
            pictures: Array<object>
        }
    ]
}