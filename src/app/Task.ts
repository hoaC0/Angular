// ist wie ein modell
export interface Task {
    id?: number; // ? means optional
    title: string;
    text: string;
    date: string;
    reminder: boolean;
}