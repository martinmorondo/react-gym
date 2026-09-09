import type { Exercise } from '../types/exercise';

import benchPressImage from '../assets/img/press-banca.jpg';
import squatImage from '../assets/img/sentadilla.jpg';
import pullUpImage from '../assets/img/dominadas.jpg';
import deadliftImage from '../assets/img/peso-muerto.jpg';
import bicepsCurlImage from '../assets/img/curl-biceps.jpg';
import militaryPressImage from '../assets/img/press-militar.jpg';

export const exercises: Exercise[] = [
  {
    id: 'bench-press',
    name: 'Press de banca',
    description:
      'Ejercicio compuesto para desarrollar principalmente la fuerza y masa muscular del pecho.',
    muscleGroup: 'Pecho',
    equipment: 'Barra',
    difficulty: 'intermediate',
    image: benchPressImage,
    instructions: [
      'Acostate en el banco con los pies firmes en el suelo.',
      'Agarrá la barra ligeramente más abierta que el ancho de los hombros.',
      'Bajá la barra de forma controlada hacia la zona media del pecho.',
      'Empujá la barra hacia arriba hasta extender los brazos sin bloquear los codos.',
    ],
  },
  {
    id: 'squat',
    name: 'Sentadilla',
    description:
      'Ejercicio fundamental para desarrollar fuerza y masa muscular en las piernas y glúteos.',
    muscleGroup: 'Piernas',
    equipment: 'Barra',
    difficulty: 'intermediate',
    image: squatImage,
    instructions: [
      'Colocá la barra de forma estable sobre la parte superior de la espalda.',
      'Separá los pies aproximadamente al ancho de los hombros.',
      'Descendé flexionando las rodillas y llevando la cadera hacia atrás.',
      'Subí empujando el suelo hasta volver a la posición inicial.',
    ],
  },
  {
    id: 'pull-up',
    name: 'Dominadas',
    description:
      'Ejercicio de peso corporal enfocado principalmente en la espalda y los brazos.',
    muscleGroup: 'Espalda',
    equipment: 'Barra de dominadas',
    difficulty: 'advanced',
    image: pullUpImage,
    instructions: [
      'Agarrá la barra con las manos ligeramente más abiertas que los hombros.',
      'Colgate con los brazos extendidos y mantené el cuerpo estable.',
      'Tirá del cuerpo hacia arriba llevando el pecho hacia la barra.',
      'Descendé de forma controlada hasta extender nuevamente los brazos.',
    ],
  },
  {
    id: 'deadlift',
    name: 'Peso muerto',
    description:
      'Ejercicio compuesto que trabaja la cadena posterior, incluyendo espalda, glúteos e isquiotibiales.',
    muscleGroup: 'Espalda',
    equipment: 'Barra',
    difficulty: 'advanced',
    image: deadliftImage,
    instructions: [
      'Colocá la barra frente a las piernas con los pies aproximadamente al ancho de las caderas.',
      'Flexioná las rodillas y llevá la cadera hacia atrás manteniendo la espalda neutra.',
      'Agarrá la barra y levantala manteniéndola cerca del cuerpo.',
      'Extendé cadera y rodillas hasta quedar completamente erguido.',
    ],
  },
  {
    id: 'biceps-curl',
    name: 'Curl de bíceps',
    description:
      'Ejercicio de aislamiento para desarrollar principalmente la musculatura de los bíceps.',
    muscleGroup: 'Bíceps',
    equipment: 'Mancuernas',
    difficulty: 'beginner',
    image: bicepsCurlImage,
    instructions: [
      'Parate con una mancuerna en cada mano y los brazos extendidos.',
      'Mantené los codos cerca del torso.',
      'Flexioná los codos llevando las mancuernas hacia los hombros.',
      'Bajá las mancuernas lentamente hasta la posición inicial.',
    ],
  },
  {
    id: 'military-press',
    name: 'Press militar',
    description:
      'Ejercicio de empuje vertical orientado principalmente al desarrollo de los hombros.',
    muscleGroup: 'Hombros',
    equipment: 'Barra',
    difficulty: 'intermediate',
    image: militaryPressImage,
    instructions: [
      'Sostené la barra a la altura de los hombros.',
      'Mantené el torso firme y los pies estables.',
      'Empujá la barra verticalmente por encima de la cabeza.',
      'Descendé la barra de forma controlada hasta la posición inicial.',
    ],
  },
];
