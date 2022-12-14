/** ЗАДАЧА 27 - Const
 *
 * Ответьте на следующие вопросы:
 *   1. Почему после 13 строки не выдается ошибка?
 *   2. Почему после строки 18 генерируется TypeError?
 *
 * Измените одну строку кода, чтобы эта ошибка исчезла.
 * Не меняйте строки 13, 18
 */

const arr = [1, 2] // <-- Объявление переменной используя const

// так як це ссилочний тип (масив або об'єкт), томи ми можемо змінювати безпосередньо його, але не саму змінну
// змінити на let щоб не було помилки, це я підглянув)))

arr.push(3) 

console.log(arr)
// [1, 2, 3]

arr = [1, 2, 3, 4]
// ДО: Uncaught TypeError: Assignment to constant variable.
// ПОСЛЕ: Нет ошибки

// помилка так як ми хочемо змінити константу

console.log(arr)
// [1, 2, 3, 4]
