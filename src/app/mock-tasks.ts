import { Task } from './Task'; // import model ( or interface )

export const TASKS: Task[] = [
    {
        id: 1,
        title: 'Homework',
        text: 'Complete the math assignment',
        date: '2025-10-01',
        reminder: true
    },
    {
        id: 2,
        title: 'Grocery Shopping',
        text: 'Buy vegetables and fruits',
        date: '2025-10-02',
        reminder: false
    },
    {
        id: 3,
        title: 'Gym',
        text: 'Attend the evening yoga class',
        date: '2025-10-03',
        reminder: true
    }
]