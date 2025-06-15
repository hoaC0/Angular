import { Task } from './Task'; // import model ( or interface )

export const TASKS: Task[] = [
    {
        id: 1,
        title: 'Homework',
        text: 'Complete the math assignment',
        date: '10.10.2025',
        reminder: true
    },
    {
        id: 2,
        title: 'Grocery Shopping',
        text: 'Buy vegetables and fruits',
        date: '25.10.2025',
        reminder: false
    },
    {
        id: 3,
        title: 'Gym',
        text: 'Attend the evening yoga class',
        date: '03.11.2025',
        reminder: true
    }
]