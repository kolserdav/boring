"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageFindMany = exports.eventDelete = exports.evnentUpdate = exports.eventCreate = exports.eventFindMany = exports.eventFindFirst = exports.categoryDelete = exports.categoryUpdate = exports.categoryCreate = exports.categoryFindMany = exports.categoryFindFirst = exports.userDelete = exports.userUpdate = exports.userCreate = exports.userFindMany = exports.userFindFirst = exports.IMAGE_PREVIEW = void 0;
/**
 * Определяет константы размеров изображения
 */
exports.IMAGE_PREVIEW = {
    full: Infinity,
    desktop: 1920,
    tablet: 1024,
    mobile: 760,
    small: 320,
};
/**
 * Псевдо метод запроса на сервер
 * @param args
 * @returns
 */
function getResult(args) {
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
function userFindFirst(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.userFindFirst = userFindFirst;
/**
 * Получить несколько пользователей
 * @param {P.UserFindManyArgs} args
 */
function userFindMany(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.userFindMany = userFindMany;
/**
 * Создать одного пользователя
 * @param {P.UserCreateArgs} args
 */
function userCreate(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.userCreate = userCreate;
/**
 * Изменить данные одного пользователя
 * @param {P.UserUpdateArgs} args
 */
function userUpdate(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.userUpdate = userUpdate;
/**
 * Удалить одного пользователя
 * @param {P.UserDeleteArgs} args
 */
function userDelete(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.userDelete = userDelete;
////// Методы категорий ///////
/**
 * Получить одну категорию
 * @param {P.CategoryFindFirstArgs} args
 */
function categoryFindFirst(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.categoryFindFirst = categoryFindFirst;
/**
 * Получить несколько категорий
 * @param {P.CategoryFindManyArgs} args
 */
function categoryFindMany(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.categoryFindMany = categoryFindMany;
/**
 * Создать одну категорию
 * @param {P.CategoryCreateArgs} args
 */
function categoryCreate(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.categoryCreate = categoryCreate;
/**
 * Изменить одну категорию
 * @param {P.CategoryUpdateArgs} args
 */
function categoryUpdate(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.categoryUpdate = categoryUpdate;
/**
 * Удалить одну категорию
 * @param {P.CategoryDeleteArgs} args
 */
function categoryDelete(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.categoryDelete = categoryDelete;
////// Методы cобытий ///////
/**
 * Получить одно событие
 * @param {P.EventFindFirstArgs} args
 */
function eventFindFirst(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.eventFindFirst = eventFindFirst;
/**
 * Получить несколько событий
 * @param {P.EventFindManyArgs} args
 */
function eventFindMany(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.eventFindMany = eventFindMany;
/**
 * Создать одно событие
 * @param {P.EventCreateArgs} args
 */
function eventCreate(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.eventCreate = eventCreate;
/**
 * Изменить одно событие
 * @param {P.EventUpdateArgs} args
 */
function evnentUpdate(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.evnentUpdate = evnentUpdate;
/**
 * Удалить одно событие
 * @param {P.EventDeleteArgs} args
 */
function eventDelete(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.eventDelete = eventDelete;
/**
 * Получить несколько изображений
 * @param {P.ImageFindManyArgs} args
 */
function imageFindMany(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResult(args)];
        });
    });
}
exports.imageFindMany = imageFindMany;
