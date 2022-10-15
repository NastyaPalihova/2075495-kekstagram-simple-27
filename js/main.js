import {getPhotos} from './rendering.js'; // модуль с функцией для генерации данных

<<<<<<< HEAD
console.log(
  getPhotos()
);
=======
const getRandomNumber = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const randomNumber = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(randomNumber);
};

getRandomNumber(2,5);

// Функция для проверки максимальной длины строки

const isStringLengthValid = (string, maxLength) => string.length <= maxLength;

isStringLengthValid ('Функция для проверки максимальной длины строки', 5);

// Необходимые функции для создания массива из 25 сгенерированных объектов — фото

const PHOTO_AMOUNT = 25;

const Like = {
  MIN: 15,
  MAX: 200,
};

const Comment = {
  MIN: 0,
  MAX: 200,
};

const DESCRIPTIONS = [
  'Всем привет! Решил выложить пост. Не знаю, зачем. Вдруг понравилось. Часто здесь бывает – погляжу на сервер, и вдруг что-то по сердцу прокатится.',
  'Как вам эта фотография? Это я на крыльце школы, а это Лариска. Она и сейчас нас фотографирует. Нравится? Это мы ее с папой взяли в лабораторию.',
  'День сегодня скучный. Решил выложить фото. Это произошло как бы само собой, только что я ничего не помнил.',
  'Хеллоу! Утро мудренее» я не раз убеждался, что такое соотношение здесь и сейчас крайне обманчиво.',
  'Зашел я в интернет. Открываю одну вкладку, вижу свою фотографию. Оглядываюсь, а в комнате незнакомый мужик. Он говорит "Я твой друг, не бойся". Я закрываю страницу, открываю другую вкладку, а там опять моя фотография. Мне стало страшно, я не понимаю, что происходит.',
  'Сегодня странный день. У меня дома был кот, который исчез, когда я проснулся и вышел из комнаты. Он вернулся через 10 минут, но уже с женой. Мы поженились, но она все равно ушла.',
  'Вчера был веселый денёк! Мы с друзьями решили сыграть в игру. Проигравший должен был простоять на одной ноге час. Когда я выиграл, то встал в круг. Через минуту я почувствовал, что моя нога куда-то пропала.',
  'Ну и день, да? Вот бы у меня был такой друг, который был бы с ним 24 часа в сутки.',
  'Что вам рассказать? Я работал над проектом, который должен был привести к созданию анти-вируса. Мой друг начал кричать, что я сошел с ума, и ушел.',
  'Почему вы не ставите много лайков? Я бы поставил столько, сколько у вас подписчиков!',
  'Если хочешь одурачить мир, скажи ему правду. / Отто фон Бисмарк',
  'Страстная ненависть может дать смысл и цель пустой жизни. / Эрик Хоффер',
  'В любви бесит то, что в этом преступлении не обойтись без помощника. / Шарль Бодлер',
  'Вам не надоели соцсети? А мне надоели. Особенно когда в них пишут: "Привет, как дела".',
  'Расскажите, какая у вас самая любимая книга? Вот у меня есть любимая книга "Понедельник начинается в субботу" братьев Стругацких.',
  'Я считаю, что красота — это нечто большее, чем способность нравиться людям. Красота — это способность нравиться себе.',
  'Почему многие считают, что это невозможно, если ты не видел, как это происходит, не чувствовал этого и не испытал на себе? Это возможно. Просто не все об этом знают.',
  'Посоветуйте фильм ужасов, который заставляет смеяться, плакать и испытывать страх одновременно.',
  'Нелепый вечер. Играл в футбол, потом мне позвонили, сказал, что не приду, потому что опоздаю. Через минут 20 звонят мне и говорят, что уже звонят в скорую. Нелепый день.',
  'Жду лайков под фото. Написал, что люблю свою жену. Больше не жду.',
  'Почему вы не ставите много лайков? Это ведь так легко!',
];

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createPhoto = (element, index) => {
  const photoId = index + 1;

  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(Like.MIN, Like.MAX),
    comments: getRandomNumber(Comment.MIN, Comment.MAX),
  };
};

const photos = Array.from({length: PHOTO_AMOUNT}, createPhoto);

console.log(photos);
>>>>>>> cc6d254b34a6406e5951317a50552884818f8a67
