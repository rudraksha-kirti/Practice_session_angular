export default interface ISession {
    id?: number;
    eventId: number;
    sequenceId: number;
    name: string;
    speaker: string;
    duration: number,
    level: string;
    abstract: string;
    upvoteCount: number;
}
 