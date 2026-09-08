import type { Exercise } from '../types/exercise';

export const exercises: Exercise[] = [
{
id: 'bench-press',
name: 'Press de banca',
description:
'Ejercicio compuesto para desarrollar principalmente el pecho, los tríceps y los hombros.',
muscleGroup: 'Pecho',
equipment: 'Barra',
difficulty: 'intermediate',
image:
'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e',
instructions: [
'Acuéstate en el banco con los pies apoyados en el suelo.',
'Sujeta la barra con las manos ligeramente más separadas que los hombros.',
'Baja la barra de forma controlada hacia el pecho.',
'Empuja la barra hacia arriba hasta extender los brazos.',
],
},
{
id: 'squat',
name: 'Sentadilla',
description:
'Ejercicio fundamental para desarrollar la fuerza de piernas y glúteos.',
muscleGroup: 'Piernas',
equipment: 'Barra',
difficulty: 'beginner',
image:
'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1',
instructions: [
'Coloca la barra de forma estable sobre los hombros.',
'Separa los pies aproximadamente al ancho de los hombros.',
'Desciende flexionando las rodillas y las caderas.',
'Impúlsate hacia arriba hasta volver a la posición inicial.',
],
},
{
id: 'pull-up',
name: 'Dominadas',
description:
'Ejercicio de tracción para desarrollar principalmente la espalda y los bíceps.',
muscleGroup: 'Espalda',
equipment: 'Barra de dominadas',
difficulty: 'advanced',
image:
'https://images.unsplash.com/photo-1605296867304-46d5465a13f1',
instructions: [
'Sujeta la barra con un agarre ligeramente más ancho que los hombros.',
'Comienza con los brazos extendidos.',
'Eleva el cuerpo llevando el pecho hacia la barra.',
'Desciende de forma controlada hasta extender nuevamente los brazos.',
],
},
];
