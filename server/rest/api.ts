/******************************************************************************************
 * Repository: https://github.com/blindbeat/sweet
 * Author: Sergey Kolmiller
 * Email: <uyem.ru@gmail.com>
 * License: Proprietary and confidential
 * License Text: Unauthorized copying of this file, via any medium is strictly prohibited
 * Copyright: kolserdav (c), All rights reserved
 * Create date: Tue Oct 12 2021 16:26:32 GMT+0700 (Krasnoyarsk Standard Time)
 ******************************************************************************************/
/**
 * ИНТЕРФЕЙС ПРОГРАММИСТА ФРОНТЕНДА
 * Объявление методов для типизации запросов
 * название метода соответствуют урл запроса /api/v1/user/findfirst=userFindFirst
 * готовые примеры запросов в rest/remote можно запустить в VSCode при помощи расширения humao.rest-client (
 * для активации Ctrl+Shift+P > начать воодить rest > выбрать Rest:SendRequest > настроить
 * там же горячие клавиши
 * )
 */
// Для переноса этого файла себе на фронтенд не забываем генерированный файл типов призмы
import { Prisma as P, User, PrismaPromise } from './prisma';
import Types from '../src/types';

// ПЕСОЧНИЦА.
// используется только для получения помощи от IDE в подборе запроса по типам
// Внимание! Эта песочница будет обновляться, чтобы держать свою песочницу на фронте
// создан файл sandbox.ts
async () => {
  userFindMany({
    where: {
      id: 12,
    },
    skip: 1,
    take: 2,
  });
  const d = await categoryUpdate({
    where: {
      id: 1,
    },
    data: {
      image: 1,
    },
  });
  /**
   * Создание категории через модель категорий /api/v1/category/create
   */
  await categoryCreate({
    data: {
      title: 'title',
      image: 1,
      active: false,
    },
  });
  /**
   * Изменение категории через модель категорий /api/v1/category/update
   */
  await categoryUpdate({
    where: {
      id: 1,
    },
    data: {
      title: 'new title',
      active: true,
    },
  });
  /**
   * Создание изменение и удаление эвентов также возможно через модель эвентов
   * как и в примере с категориями
   * Для создания пользователя с включенными категориями
   * /api/v1/user/create
   */
  await userCreate({
    data: {
      name: 'name',
      email: 'email@ds.d',
      password: '12345678', // userCreate принимает аргумент args при создании помимо args шлем passwordRepeat
      UserCategory: {
        create: {
          categoryId: 1, // Сразу при создании пользователя прикрепит ему категорию 1
        },
      },
    },
  });
  /**
   * Для создания пользователя с включенными эвентами
   * /api/v1/user/create
   */
  await userCreate({
    data: {
      name: 'name',
      email: 'email@ds.d',
      password: '12345678', // userCreate принимает аргумент args при создании помимо args шлем passwordRepeat
      Favorites: {
        create: [
          // Для множественного создания просто шлем массив объектов вместо одного объекта
          {
            eventId: 1, // Сразу при создании пользователя прикрепит ему событие 1 в избранные
          },
          {
            eventId: 2, // и событие 2
          },
        ],
      },
    },
  });
  /**
   * Получить пользователя с его категориями и избранными
   * /api/v1/user/findFirst
   */
  await userFindFirst({
    where: {
      id: 1,
    },
    include: {
      // Инклуде служит для включения в результаты, данных из связанных таблиц
      Favorites: true, // Только записи из таблицы Favorites привязанных
      UserCategory: {
        include: {
          Category: true, // Включит не только запись из таблицы связей, но и сами связанные категории из таблицы Category
        },
      },
    },
  });
  /**
   * Пример удаления у пользователя из избранного одного евента
   */
  await userUpdate({
    where: {
      // Ид пользователя
      id: 1,
    },
    data: {
      // userUpdate ждет data
      Favorites: {
        // Включаем связанную таблицу Favorites
        delete: {
          // Запускаем функцию удаления записи о связи пользователя и Eventa
          id: 1, // Ид записи связи (Favorites.id), котору нужно удалить, не путать с Event.id,
        },
      },
    },
  });
  /**
   * Связь категории и события
   * пример через категории /api/v1/category/update, но аналогично
   * можно сделать и через событие, только поменять соответвующие поля
   */
  categoryUpdate({
    where: {
      id: 1, // К категории 1
    },
    data: {
      EventCategory: {
        create: {
          eventId: 1, // Привязываем событие 1
        },
      },
    },
  });
  /**
   * Как получить события с категориями, к которым они привязаны
   */
  eventFindFirst({
    where: {
      id: 1, // Обращаемся к таблице Event, запрашивая id=1
    },
    include: {
      // Включаем таблицу связей
      EventCategory: {
        include: {
          // Включаем сами категории
          Category: true,
        },
      },
    },
  });
  /**
   *
   */
  /**
   * Получить пользователя с его избранными и вложенными категориями
   * /api/v1/user/findFirst
   */
  await userFindFirst({
    where: {
      id: 1, // Обращаемя к первому ид тпблицы пользоватлей
    },
    include: {
      // Включаем в результаты связанную таблицу Favorites
      Favorites: {
        include: {
          // Включаем по цепочке связанную таблицу Event
          Event: {
            include: {
              // Аключаем по цепочке связанную с Event EventCategory
              EventCategory: {
                include: {
                  Category: true, // Включаем категории в результат ответа
                },
              },
            },
          },
        },
      },
    },
  });
};

/**
 * Псевдо метод запроса на сервер
 * @param args
 * @returns
 */
function getResult(args: any): any {
  return {
    status: 'success',
    message: 'success',
    data: args,
  };
}

//// Базовые методы пользователя
/**
 * Получить одного пользователя
 * @param {P.UserFindFirstArgs} args
 */
export async function userFindFirst<T extends P.UserFindFirstArgs>(
  args: P.SelectSubset<T, P.UserFindFirstArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
> {
  return getResult(args);
}

/**
 * Получить несколько пользователей
 * @param {P.UserFindManyArgs} args
 */
export async function userFindMany<T extends P.UserFindManyArgs>(
  args: P.SelectSubset<T, P.UserFindManyArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
> {
  return getResult(args);
}

/**
 * Создать одного пользователя
 * @param {P.UserCreateArgs} args
 */
export async function userCreate<T extends P.UserCreateArgs>(
  args: P.SelectSubset<T, P.UserCreateArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
> {
  return getResult(args);
}

/**
 * Изменить данные одного пользователя
 * @param {P.UserUpdateArgs} args
 */
export async function userUpdate<T extends P.UserUpdateArgs>(
  args: P.SelectSubset<T, P.UserUpdateArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
> {
  return getResult(args);
}

/**
 * Удалить одного пользователя
 * @param {P.UserDeleteArgs} args
 */
export async function userDelete<T extends P.UserDeleteArgs>(
  args: P.SelectSubset<T, P.UserDeleteArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
> {
  return getResult(args);
}

////// Методы категорий ///////
/**
 * Получить одну категорию
 * @param {P.CategoryFindFirstArgs} args
 */
export async function categoryFindFirst<T extends P.CategoryFindFirstArgs>(
  args: P.SelectSubset<T, P.CategoryFindFirstArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
> {
  return getResult(args);
}

/**
 * Получить несколько категорий
 * @param {P.CategoryFindManyArgs} args
 */
export async function categoryFindMany<T extends P.CategoryFindManyArgs>(
  args: P.SelectSubset<T, P.CategoryFindManyArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
> {
  return getResult(args);
}

/**
 * Создать одну категорию
 * @param {P.CategoryCreateArgs} args
 */
export async function categoryCreate<T extends P.CategoryCreateArgs>(
  args: P.SelectSubset<T, P.CategoryCreateArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
> {
  return getResult(args);
}

/**
 * Изменить одну категорию
 * @param {P.CategoryUpdateArgs} args
 */
export async function categoryUpdate<T extends P.CategoryUpdateArgs>(
  args: P.SelectSubset<T, P.CategoryUpdateArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
> {
  return getResult(args);
}

/**
 * Удалить одну категорию
 * @param {P.CategoryDeleteArgs} args
 */
export async function categoryDelete<T extends P.CategoryDeleteArgs>(
  args: P.SelectSubset<T, P.CategoryDeleteArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
> {
  return getResult(args);
}

////// Методы cобытий ///////
/**
 * Получить одно событие
 * @param {P.EventFindFirstArgs} args
 */
export async function eventFindFirst<T extends P.EventFindFirstArgs>(
  args: P.SelectSubset<T, P.EventFindFirstArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
> {
  return getResult(args);
}

/**
 * Получить несколько событий
 * @param {P.EventFindManyArgs} args
 */
export async function eventFindMany<T extends P.EventFindManyArgs>(
  args: P.SelectSubset<T, P.EventFindManyArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
> {
  return getResult(args);
}

/**
 * Создать одно событие
 * @param {P.EventCreateArgs} args
 */
export async function eventCreate<T extends P.EventCreateArgs>(
  args: P.SelectSubset<T, P.EventCreateArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
> {
  return getResult(args);
}

/**
 * Изменить одно событие
 * @param {P.EventUpdateArgs} args
 */
export async function evnentUpdate<T extends P.EventUpdateArgs>(
  args: P.SelectSubset<T, P.EventUpdateArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
> {
  return getResult(args);
}

/**
 * Удалить одно событие
 * @param {P.EventDeleteArgs} args
 */
export async function eventDelete<T extends P.EventDeleteArgs>(
  args: P.SelectSubset<T, P.EventDeleteArgs>
): Promise<
  P.CheckSelect<
    T,
    Types.Api.Result<User | null>,
    PrismaPromise<Types.Api.Result<P.UserGetPayload<T>>>
  >
> {
  return getResult(args);
}
