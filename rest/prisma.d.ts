
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  email: string
  password: string
  name: string | null
  role: Roles | null
  confirmed: boolean
  confirmKey: string | null
  forgotKey: string | null
  createConfirm: Date | null
  createForgot: Date | null
  updated_at: Date
  created_at: Date
}

/**
 * Model Category
 * 
 */
export type Category = {
  id: number
  titleRu: string
  titleUk: string
  titleEn: string
  descriptionRu: string
  descriptionUk: string
  descriptionEn: string
  image: number
  adminId: number | null
  updated_at: Date
  created_at: Date
  parentId: number | null
}

/**
 * Model UserCategory
 * 
 */
export type UserCategory = {
  id: number
  userId: number
  categoryId: number
  active: boolean
  updated_at: Date
  created_at: Date
}

/**
 * Model Event
 * 
 */
export type Event = {
  id: number
  titleRu: string
  titleUk: string
  titleEn: string
  descriptionRu: string
  descriptionUk: string
  descriptionEn: string
  image: number
  adminId: number | null
  updated_at: Date
  created_at: Date
}

/**
 * Model EventCategory
 * 
 */
export type EventCategory = {
  id: number
  categoryId: number
  eventId: number
  updated_at: Date
  created_at: Date
}

/**
 * Model Favorites
 * 
 */
export type Favorites = {
  id: number
  userId: number
  eventId: number
  updated_at: Date
  created_at: Date
}

/**
 * Model Image
 * 
 */
export type Image = {
  id: number
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  destination: string
  origin: ImagOrigin
  filename: string
  path: string
  size: number
  updated_at: Date
  created_at: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Roles: {
  admin: 'admin',
  user: 'user'
};

export type Roles = (typeof Roles)[keyof typeof Roles]


export const ImagOrigin: {
  category: 'category',
  event: 'event',
  icon: 'icon'
};

export type ImagOrigin = (typeof ImagOrigin)[keyof typeof ImagOrigin]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.userCategory`: Exposes CRUD operations for the **UserCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCategories
    * const userCategories = await prisma.userCategory.findMany()
    * ```
    */
  get userCategory(): Prisma.UserCategoryDelegate<GlobalReject>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<GlobalReject>;

  /**
   * `prisma.eventCategory`: Exposes CRUD operations for the **EventCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventCategories
    * const eventCategories = await prisma.eventCategory.findMany()
    * ```
    */
  get eventCategory(): Prisma.EventCategoryDelegate<GlobalReject>;

  /**
   * `prisma.favorites`: Exposes CRUD operations for the **Favorites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorites.findMany()
    * ```
    */
  get favorites(): Prisma.FavoritesDelegate<GlobalReject>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.5.0
   * Query Engine version: 78a5df6def6943431f4c022e1428dbc3e833cf8e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Category: 'Category',
    UserCategory: 'UserCategory',
    Event: 'Event',
    EventCategory: 'EventCategory',
    Favorites: 'Favorites',
    Image: 'Image'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Category: number
    UserCategory: number
    Event: number
    Favorites: number
  }

  export type UserCountOutputTypeSelect = {
    Category?: boolean
    UserCategory?: boolean
    Event?: boolean
    Favorites?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCountOutputType ?UserCountOutputType [P]
  : 
     never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    UserCategory: number
    EventCategory: number
    Children: number
  }

  export type CategoryCountOutputTypeSelect = {
    UserCategory?: boolean
    EventCategory?: boolean
    Children?: boolean
  }

  export type CategoryCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CategoryCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CategoryCountOutputType
    : S extends undefined
    ? never
    : S extends CategoryCountOutputTypeArgs
    ?'include' extends U
    ? CategoryCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CategoryCountOutputType ?CategoryCountOutputType [P]
  : 
     never
  } 
    : CategoryCountOutputType
  : CategoryCountOutputType




  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     * 
    **/
    select?: CategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type EventCountOutputType
   */


  export type EventCountOutputType = {
    Favorites: number
    EventCategory: number
  }

  export type EventCountOutputTypeSelect = {
    Favorites?: boolean
    EventCategory?: boolean
  }

  export type EventCountOutputTypeGetPayload<
    S extends boolean | null | undefined | EventCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? EventCountOutputType
    : S extends undefined
    ? never
    : S extends EventCountOutputTypeArgs
    ?'include' extends U
    ? EventCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof EventCountOutputType ?EventCountOutputType [P]
  : 
     never
  } 
    : EventCountOutputType
  : EventCountOutputType




  // Custom InputTypes

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     * 
    **/
    select?: EventCountOutputTypeSelect | null
  }



  /**
   * Count Type ImageCountOutputType
   */


  export type ImageCountOutputType = {
    Category: number
    Event: number
  }

  export type ImageCountOutputTypeSelect = {
    Category?: boolean
    Event?: boolean
  }

  export type ImageCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ImageCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ImageCountOutputType
    : S extends undefined
    ? never
    : S extends ImageCountOutputTypeArgs
    ?'include' extends U
    ? ImageCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ImageCountOutputType ?ImageCountOutputType [P]
  : 
     never
  } 
    : ImageCountOutputType
  : ImageCountOutputType




  // Custom InputTypes

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     * 
    **/
    select?: ImageCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: Roles | null
    confirmed: boolean | null
    confirmKey: string | null
    forgotKey: string | null
    createConfirm: Date | null
    createForgot: Date | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: Roles | null
    confirmed: boolean | null
    confirmKey: string | null
    forgotKey: string | null
    createConfirm: Date | null
    createForgot: Date | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    confirmed: number
    confirmKey: number
    forgotKey: number
    createConfirm: number
    createForgot: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    confirmed?: true
    confirmKey?: true
    forgotKey?: true
    createConfirm?: true
    createForgot?: true
    updated_at?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    confirmed?: true
    confirmKey?: true
    forgotKey?: true
    createConfirm?: true
    createForgot?: true
    updated_at?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    confirmed?: true
    confirmKey?: true
    forgotKey?: true
    createConfirm?: true
    createForgot?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string | null
    role: Roles | null
    confirmed: boolean
    confirmKey: string | null
    forgotKey: string | null
    createConfirm: Date | null
    createForgot: Date | null
    updated_at: Date
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    confirmed?: boolean
    confirmKey?: boolean
    forgotKey?: boolean
    createConfirm?: boolean
    createForgot?: boolean
    updated_at?: boolean
    created_at?: boolean
    Category?: boolean | CategoryFindManyArgs
    UserCategory?: boolean | UserCategoryFindManyArgs
    Event?: boolean | EventFindManyArgs
    Favorites?: boolean | FavoritesFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    Category?: boolean | CategoryFindManyArgs
    UserCategory?: boolean | UserCategoryFindManyArgs
    Event?: boolean | EventFindManyArgs
    Favorites?: boolean | FavoritesFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Category'
        ? Array < CategoryGetPayload<S['include'][P]>>  :
        P extends 'UserCategory'
        ? Array < UserCategoryGetPayload<S['include'][P]>>  :
        P extends 'Event'
        ? Array < EventGetPayload<S['include'][P]>>  :
        P extends 'Favorites'
        ? Array < FavoritesGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'Category'
        ? Array < CategoryGetPayload<S['select'][P]>>  :
        P extends 'UserCategory'
        ? Array < UserCategoryGetPayload<S['select'][P]>>  :
        P extends 'Event'
        ? Array < EventGetPayload<S['select'][P]>>  :
        P extends 'Favorites'
        ? Array < FavoritesGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Category<T extends CategoryFindManyArgs = {}>(args?: Subset<T, CategoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Category>>, PrismaPromise<Array<CategoryGetPayload<T>>>>;

    UserCategory<T extends UserCategoryFindManyArgs = {}>(args?: Subset<T, UserCategoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserCategory>>, PrismaPromise<Array<UserCategoryGetPayload<T>>>>;

    Event<T extends EventFindManyArgs = {}>(args?: Subset<T, EventFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Event>>, PrismaPromise<Array<EventGetPayload<T>>>>;

    Favorites<T extends FavoritesFindManyArgs = {}>(args?: Subset<T, FavoritesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Favorites>>, PrismaPromise<Array<FavoritesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    image: number | null
    adminId: number | null
    parentId: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    image: number | null
    adminId: number | null
    parentId: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    titleRu: string | null
    titleUk: string | null
    titleEn: string | null
    descriptionRu: string | null
    descriptionUk: string | null
    descriptionEn: string | null
    image: number | null
    adminId: number | null
    updated_at: Date | null
    created_at: Date | null
    parentId: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    titleRu: string | null
    titleUk: string | null
    titleEn: string | null
    descriptionRu: string | null
    descriptionUk: string | null
    descriptionEn: string | null
    image: number | null
    adminId: number | null
    updated_at: Date | null
    created_at: Date | null
    parentId: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    titleRu: number
    titleUk: number
    titleEn: number
    descriptionRu: number
    descriptionUk: number
    descriptionEn: number
    image: number
    adminId: number
    updated_at: number
    created_at: number
    parentId: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    image?: true
    adminId?: true
    parentId?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    image?: true
    adminId?: true
    parentId?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    titleRu?: true
    titleUk?: true
    titleEn?: true
    descriptionRu?: true
    descriptionUk?: true
    descriptionEn?: true
    image?: true
    adminId?: true
    updated_at?: true
    created_at?: true
    parentId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    titleRu?: true
    titleUk?: true
    titleEn?: true
    descriptionRu?: true
    descriptionUk?: true
    descriptionEn?: true
    image?: true
    adminId?: true
    updated_at?: true
    created_at?: true
    parentId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    titleRu?: true
    titleUk?: true
    titleEn?: true
    descriptionRu?: true
    descriptionUk?: true
    descriptionEn?: true
    image?: true
    adminId?: true
    updated_at?: true
    created_at?: true
    parentId?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: Array<CategoryScalarFieldEnum>
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    adminId: number | null
    updated_at: Date
    created_at: Date
    parentId: number | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Promise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect = {
    id?: boolean
    titleRu?: boolean
    titleUk?: boolean
    titleEn?: boolean
    descriptionRu?: boolean
    descriptionUk?: boolean
    descriptionEn?: boolean
    image?: boolean
    adminId?: boolean
    User?: boolean | UserArgs
    Image?: boolean | ImageArgs
    updated_at?: boolean
    created_at?: boolean
    UserCategory?: boolean | UserCategoryFindManyArgs
    EventCategory?: boolean | EventCategoryFindManyArgs
    Children?: boolean | CategoryFindManyArgs
    parentId?: boolean
    Parent?: boolean | CategoryArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryInclude = {
    User?: boolean | UserArgs
    Image?: boolean | ImageArgs
    UserCategory?: boolean | UserCategoryFindManyArgs
    EventCategory?: boolean | EventCategoryFindManyArgs
    Children?: boolean | CategoryFindManyArgs
    Parent?: boolean | CategoryArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryArgs,
    U = keyof S
      > = S extends true
        ? Category
    : S extends undefined
    ? never
    : S extends CategoryArgs | CategoryFindManyArgs
    ?'include' extends U
    ? Category  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'User'
        ? UserGetPayload<S['include'][P]> | null :
        P extends 'Image'
        ? ImageGetPayload<S['include'][P]> :
        P extends 'UserCategory'
        ? Array < UserCategoryGetPayload<S['include'][P]>>  :
        P extends 'EventCategory'
        ? Array < EventCategoryGetPayload<S['include'][P]>>  :
        P extends 'Children'
        ? Array < CategoryGetPayload<S['include'][P]>>  :
        P extends 'Parent'
        ? CategoryGetPayload<S['include'][P]> | null :
        P extends '_count'
        ? CategoryCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Category ?Category [P]
  : 
          P extends 'User'
        ? UserGetPayload<S['select'][P]> | null :
        P extends 'Image'
        ? ImageGetPayload<S['select'][P]> :
        P extends 'UserCategory'
        ? Array < UserCategoryGetPayload<S['select'][P]>>  :
        P extends 'EventCategory'
        ? Array < EventCategoryGetPayload<S['select'][P]>>  :
        P extends 'Children'
        ? Array < CategoryGetPayload<S['select'][P]>>  :
        P extends 'Parent'
        ? CategoryGetPayload<S['select'][P]> | null :
        P extends '_count'
        ? CategoryCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Category
  : Category


  type CategoryCountArgs = Merge<
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }
  >

  export interface CategoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Category>>, PrismaPromise<Array<CategoryGetPayload<T>>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Image<T extends ImageArgs = {}>(args?: Subset<T, ImageArgs>): CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>;

    UserCategory<T extends UserCategoryFindManyArgs = {}>(args?: Subset<T, UserCategoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserCategory>>, PrismaPromise<Array<UserCategoryGetPayload<T>>>>;

    EventCategory<T extends EventCategoryFindManyArgs = {}>(args?: Subset<T, EventCategoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<EventCategory>>, PrismaPromise<Array<EventCategoryGetPayload<T>>>>;

    Children<T extends CategoryFindManyArgs = {}>(args?: Subset<T, CategoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Category>>, PrismaPromise<Array<CategoryGetPayload<T>>>>;

    Parent<T extends CategoryArgs = {}>(args?: Subset<T, CategoryArgs>): CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Throw an Error if a Category can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Throw an Error if a Category can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     * 
    **/
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Categories to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to create a Category.
     * 
    **/
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs = {
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to update a Category.
     * 
    **/
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The filter to search for the Category to update in case it exists.
     * 
    **/
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     * 
    **/
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter which Category to delete.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    where?: CategoryWhereInput
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
  }



  /**
   * Model UserCategory
   */


  export type AggregateUserCategory = {
    _count: UserCategoryCountAggregateOutputType | null
    _avg: UserCategoryAvgAggregateOutputType | null
    _sum: UserCategorySumAggregateOutputType | null
    _min: UserCategoryMinAggregateOutputType | null
    _max: UserCategoryMaxAggregateOutputType | null
  }

  export type UserCategoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type UserCategorySumAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type UserCategoryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    active: boolean | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type UserCategoryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    active: boolean | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type UserCategoryCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    active: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type UserCategoryAvgAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type UserCategorySumAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type UserCategoryMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    active?: true
    updated_at?: true
    created_at?: true
  }

  export type UserCategoryMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    active?: true
    updated_at?: true
    created_at?: true
  }

  export type UserCategoryCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    active?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type UserCategoryAggregateArgs = {
    /**
     * Filter which UserCategory to aggregate.
     * 
    **/
    where?: UserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<UserCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCategories
    **/
    _count?: true | UserCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCategoryMaxAggregateInputType
  }

  export type GetUserCategoryAggregateType<T extends UserCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCategory[P]>
      : GetScalarType<T[P], AggregateUserCategory[P]>
  }




  export type UserCategoryGroupByArgs = {
    where?: UserCategoryWhereInput
    orderBy?: Enumerable<UserCategoryOrderByWithAggregationInput>
    by: Array<UserCategoryScalarFieldEnum>
    having?: UserCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCategoryCountAggregateInputType | true
    _avg?: UserCategoryAvgAggregateInputType
    _sum?: UserCategorySumAggregateInputType
    _min?: UserCategoryMinAggregateInputType
    _max?: UserCategoryMaxAggregateInputType
  }


  export type UserCategoryGroupByOutputType = {
    id: number
    userId: number
    categoryId: number
    active: boolean
    updated_at: Date
    created_at: Date
    _count: UserCategoryCountAggregateOutputType | null
    _avg: UserCategoryAvgAggregateOutputType | null
    _sum: UserCategorySumAggregateOutputType | null
    _min: UserCategoryMinAggregateOutputType | null
    _max: UserCategoryMaxAggregateOutputType | null
  }

  type GetUserCategoryGroupByPayload<T extends UserCategoryGroupByArgs> = Promise<
    Array<
      PickArray<UserCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserCategoryGroupByOutputType[P]>
        }
      >
    >


  export type UserCategorySelect = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    active?: boolean
    User?: boolean | UserArgs
    Category?: boolean | CategoryArgs
    updated_at?: boolean
    created_at?: boolean
  }

  export type UserCategoryInclude = {
    User?: boolean | UserArgs
    Category?: boolean | CategoryArgs
  }

  export type UserCategoryGetPayload<
    S extends boolean | null | undefined | UserCategoryArgs,
    U = keyof S
      > = S extends true
        ? UserCategory
    : S extends undefined
    ? never
    : S extends UserCategoryArgs | UserCategoryFindManyArgs
    ?'include' extends U
    ? UserCategory  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'User'
        ? UserGetPayload<S['include'][P]> :
        P extends 'Category'
        ? CategoryGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCategory ?UserCategory [P]
  : 
          P extends 'User'
        ? UserGetPayload<S['select'][P]> :
        P extends 'Category'
        ? CategoryGetPayload<S['select'][P]> : never
  } 
    : UserCategory
  : UserCategory


  type UserCategoryCountArgs = Merge<
    Omit<UserCategoryFindManyArgs, 'select' | 'include'> & {
      select?: UserCategoryCountAggregateInputType | true
    }
  >

  export interface UserCategoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserCategory that matches the filter.
     * @param {UserCategoryFindUniqueArgs} args - Arguments to find a UserCategory
     * @example
     * // Get one UserCategory
     * const userCategory = await prisma.userCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserCategory'> extends True ? CheckSelect<T, Prisma__UserCategoryClient<UserCategory>, Prisma__UserCategoryClient<UserCategoryGetPayload<T>>> : CheckSelect<T, Prisma__UserCategoryClient<UserCategory | null >, Prisma__UserCategoryClient<UserCategoryGetPayload<T> | null >>

    /**
     * Find the first UserCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryFindFirstArgs} args - Arguments to find a UserCategory
     * @example
     * // Get one UserCategory
     * const userCategory = await prisma.userCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserCategory'> extends True ? CheckSelect<T, Prisma__UserCategoryClient<UserCategory>, Prisma__UserCategoryClient<UserCategoryGetPayload<T>>> : CheckSelect<T, Prisma__UserCategoryClient<UserCategory | null >, Prisma__UserCategoryClient<UserCategoryGetPayload<T> | null >>

    /**
     * Find zero or more UserCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCategories
     * const userCategories = await prisma.userCategory.findMany()
     * 
     * // Get first 10 UserCategories
     * const userCategories = await prisma.userCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCategoryWithIdOnly = await prisma.userCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserCategoryFindManyArgs>(
      args?: SelectSubset<T, UserCategoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserCategory>>, PrismaPromise<Array<UserCategoryGetPayload<T>>>>

    /**
     * Create a UserCategory.
     * @param {UserCategoryCreateArgs} args - Arguments to create a UserCategory.
     * @example
     * // Create one UserCategory
     * const UserCategory = await prisma.userCategory.create({
     *   data: {
     *     // ... data to create a UserCategory
     *   }
     * })
     * 
    **/
    create<T extends UserCategoryCreateArgs>(
      args: SelectSubset<T, UserCategoryCreateArgs>
    ): CheckSelect<T, Prisma__UserCategoryClient<UserCategory>, Prisma__UserCategoryClient<UserCategoryGetPayload<T>>>

    /**
     * Create many UserCategories.
     *     @param {UserCategoryCreateManyArgs} args - Arguments to create many UserCategories.
     *     @example
     *     // Create many UserCategories
     *     const userCategory = await prisma.userCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCategoryCreateManyArgs>(
      args?: SelectSubset<T, UserCategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserCategory.
     * @param {UserCategoryDeleteArgs} args - Arguments to delete one UserCategory.
     * @example
     * // Delete one UserCategory
     * const UserCategory = await prisma.userCategory.delete({
     *   where: {
     *     // ... filter to delete one UserCategory
     *   }
     * })
     * 
    **/
    delete<T extends UserCategoryDeleteArgs>(
      args: SelectSubset<T, UserCategoryDeleteArgs>
    ): CheckSelect<T, Prisma__UserCategoryClient<UserCategory>, Prisma__UserCategoryClient<UserCategoryGetPayload<T>>>

    /**
     * Update one UserCategory.
     * @param {UserCategoryUpdateArgs} args - Arguments to update one UserCategory.
     * @example
     * // Update one UserCategory
     * const userCategory = await prisma.userCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserCategoryUpdateArgs>(
      args: SelectSubset<T, UserCategoryUpdateArgs>
    ): CheckSelect<T, Prisma__UserCategoryClient<UserCategory>, Prisma__UserCategoryClient<UserCategoryGetPayload<T>>>

    /**
     * Delete zero or more UserCategories.
     * @param {UserCategoryDeleteManyArgs} args - Arguments to filter UserCategories to delete.
     * @example
     * // Delete a few UserCategories
     * const { count } = await prisma.userCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserCategoryDeleteManyArgs>(
      args?: SelectSubset<T, UserCategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCategories
     * const userCategory = await prisma.userCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserCategoryUpdateManyArgs>(
      args: SelectSubset<T, UserCategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCategory.
     * @param {UserCategoryUpsertArgs} args - Arguments to update or create a UserCategory.
     * @example
     * // Update or create a UserCategory
     * const userCategory = await prisma.userCategory.upsert({
     *   create: {
     *     // ... data to create a UserCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCategory we want to update
     *   }
     * })
    **/
    upsert<T extends UserCategoryUpsertArgs>(
      args: SelectSubset<T, UserCategoryUpsertArgs>
    ): CheckSelect<T, Prisma__UserCategoryClient<UserCategory>, Prisma__UserCategoryClient<UserCategoryGetPayload<T>>>

    /**
     * Count the number of UserCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryCountArgs} args - Arguments to filter UserCategories to count.
     * @example
     * // Count the number of UserCategories
     * const count = await prisma.userCategory.count({
     *   where: {
     *     // ... the filter for the UserCategories we want to count
     *   }
     * })
    **/
    count<T extends UserCategoryCountArgs>(
      args?: Subset<T, UserCategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCategoryAggregateArgs>(args: Subset<T, UserCategoryAggregateArgs>): PrismaPromise<GetUserCategoryAggregateType<T>>

    /**
     * Group by UserCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCategoryGroupByArgs['orderBy'] }
        : { orderBy?: UserCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCategoryGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserCategoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Category<T extends CategoryArgs = {}>(args?: Subset<T, CategoryArgs>): CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserCategory findUnique
   */
  export type UserCategoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the UserCategory
     * 
    **/
    select?: UserCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserCategoryInclude | null
    /**
     * Throw an Error if a UserCategory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserCategory to fetch.
     * 
    **/
    where: UserCategoryWhereUniqueInput
  }


  /**
   * UserCategory findFirst
   */
  export type UserCategoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the UserCategory
     * 
    **/
    select?: UserCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserCategoryInclude | null
    /**
     * Throw an Error if a UserCategory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserCategory to fetch.
     * 
    **/
    where?: UserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<UserCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCategories.
     * 
    **/
    cursor?: UserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCategories.
     * 
    **/
    distinct?: Enumerable<UserCategoryScalarFieldEnum>
  }


  /**
   * UserCategory findMany
   */
  export type UserCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserCategory
     * 
    **/
    select?: UserCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserCategoryInclude | null
    /**
     * Filter, which UserCategories to fetch.
     * 
    **/
    where?: UserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<UserCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCategories.
     * 
    **/
    cursor?: UserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserCategoryScalarFieldEnum>
  }


  /**
   * UserCategory create
   */
  export type UserCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the UserCategory
     * 
    **/
    select?: UserCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserCategoryInclude | null
    /**
     * The data needed to create a UserCategory.
     * 
    **/
    data: XOR<UserCategoryCreateInput, UserCategoryUncheckedCreateInput>
  }


  /**
   * UserCategory createMany
   */
  export type UserCategoryCreateManyArgs = {
    data: Enumerable<UserCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserCategory update
   */
  export type UserCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserCategory
     * 
    **/
    select?: UserCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserCategoryInclude | null
    /**
     * The data needed to update a UserCategory.
     * 
    **/
    data: XOR<UserCategoryUpdateInput, UserCategoryUncheckedUpdateInput>
    /**
     * Choose, which UserCategory to update.
     * 
    **/
    where: UserCategoryWhereUniqueInput
  }


  /**
   * UserCategory updateMany
   */
  export type UserCategoryUpdateManyArgs = {
    data: XOR<UserCategoryUpdateManyMutationInput, UserCategoryUncheckedUpdateManyInput>
    where?: UserCategoryWhereInput
  }


  /**
   * UserCategory upsert
   */
  export type UserCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserCategory
     * 
    **/
    select?: UserCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserCategoryInclude | null
    /**
     * The filter to search for the UserCategory to update in case it exists.
     * 
    **/
    where: UserCategoryWhereUniqueInput
    /**
     * In case the UserCategory found by the `where` argument doesn't exist, create a new UserCategory with this data.
     * 
    **/
    create: XOR<UserCategoryCreateInput, UserCategoryUncheckedCreateInput>
    /**
     * In case the UserCategory was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserCategoryUpdateInput, UserCategoryUncheckedUpdateInput>
  }


  /**
   * UserCategory delete
   */
  export type UserCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserCategory
     * 
    **/
    select?: UserCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserCategoryInclude | null
    /**
     * Filter which UserCategory to delete.
     * 
    **/
    where: UserCategoryWhereUniqueInput
  }


  /**
   * UserCategory deleteMany
   */
  export type UserCategoryDeleteManyArgs = {
    where?: UserCategoryWhereInput
  }


  /**
   * UserCategory without action
   */
  export type UserCategoryArgs = {
    /**
     * Select specific fields to fetch from the UserCategory
     * 
    **/
    select?: UserCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserCategoryInclude | null
  }



  /**
   * Model Event
   */


  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    image: number | null
    adminId: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    image: number | null
    adminId: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    titleRu: string | null
    titleUk: string | null
    titleEn: string | null
    descriptionRu: string | null
    descriptionUk: string | null
    descriptionEn: string | null
    image: number | null
    adminId: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    titleRu: string | null
    titleUk: string | null
    titleEn: string | null
    descriptionRu: string | null
    descriptionUk: string | null
    descriptionEn: string | null
    image: number | null
    adminId: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    titleRu: number
    titleUk: number
    titleEn: number
    descriptionRu: number
    descriptionUk: number
    descriptionEn: number
    image: number
    adminId: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    image?: true
    adminId?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    image?: true
    adminId?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    titleRu?: true
    titleUk?: true
    titleEn?: true
    descriptionRu?: true
    descriptionUk?: true
    descriptionEn?: true
    image?: true
    adminId?: true
    updated_at?: true
    created_at?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    titleRu?: true
    titleUk?: true
    titleEn?: true
    descriptionRu?: true
    descriptionUk?: true
    descriptionEn?: true
    image?: true
    adminId?: true
    updated_at?: true
    created_at?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    titleRu?: true
    titleUk?: true
    titleEn?: true
    descriptionRu?: true
    descriptionUk?: true
    descriptionEn?: true
    image?: true
    adminId?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type EventAggregateArgs = {
    /**
     * Filter which Event to aggregate.
     * 
    **/
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs = {
    where?: EventWhereInput
    orderBy?: Enumerable<EventOrderByWithAggregationInput>
    by: Array<EventScalarFieldEnum>
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }


  export type EventGroupByOutputType = {
    id: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    adminId: number | null
    updated_at: Date
    created_at: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Promise<
    Array<
      PickArray<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect = {
    id?: boolean
    titleRu?: boolean
    titleUk?: boolean
    titleEn?: boolean
    descriptionRu?: boolean
    descriptionUk?: boolean
    descriptionEn?: boolean
    image?: boolean
    adminId?: boolean
    User?: boolean | UserArgs
    Image?: boolean | ImageArgs
    updated_at?: boolean
    created_at?: boolean
    Favorites?: boolean | FavoritesFindManyArgs
    EventCategory?: boolean | EventCategoryFindManyArgs
    _count?: boolean | EventCountOutputTypeArgs
  }

  export type EventInclude = {
    User?: boolean | UserArgs
    Image?: boolean | ImageArgs
    Favorites?: boolean | FavoritesFindManyArgs
    EventCategory?: boolean | EventCategoryFindManyArgs
    _count?: boolean | EventCountOutputTypeArgs
  }

  export type EventGetPayload<
    S extends boolean | null | undefined | EventArgs,
    U = keyof S
      > = S extends true
        ? Event
    : S extends undefined
    ? never
    : S extends EventArgs | EventFindManyArgs
    ?'include' extends U
    ? Event  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'User'
        ? UserGetPayload<S['include'][P]> | null :
        P extends 'Image'
        ? ImageGetPayload<S['include'][P]> :
        P extends 'Favorites'
        ? Array < FavoritesGetPayload<S['include'][P]>>  :
        P extends 'EventCategory'
        ? Array < EventCategoryGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? EventCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Event ?Event [P]
  : 
          P extends 'User'
        ? UserGetPayload<S['select'][P]> | null :
        P extends 'Image'
        ? ImageGetPayload<S['select'][P]> :
        P extends 'Favorites'
        ? Array < FavoritesGetPayload<S['select'][P]>>  :
        P extends 'EventCategory'
        ? Array < EventCategoryGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? EventCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Event
  : Event


  type EventCountArgs = Merge<
    Omit<EventFindManyArgs, 'select' | 'include'> & {
      select?: EventCountAggregateInputType | true
    }
  >

  export interface EventDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EventFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Event'> extends True ? CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>> : CheckSelect<T, Prisma__EventClient<Event | null >, Prisma__EventClient<EventGetPayload<T> | null >>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EventFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Event'> extends True ? CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>> : CheckSelect<T, Prisma__EventClient<Event | null >, Prisma__EventClient<EventGetPayload<T> | null >>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventFindManyArgs>(
      args?: SelectSubset<T, EventFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Event>>, PrismaPromise<Array<EventGetPayload<T>>>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
    **/
    create<T extends EventCreateArgs>(
      args: SelectSubset<T, EventCreateArgs>
    ): CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>>

    /**
     * Create many Events.
     *     @param {EventCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const event = await prisma.event.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventCreateManyArgs>(
      args?: SelectSubset<T, EventCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
    **/
    delete<T extends EventDeleteArgs>(
      args: SelectSubset<T, EventDeleteArgs>
    ): CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventUpdateArgs>(
      args: SelectSubset<T, EventUpdateArgs>
    ): CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventDeleteManyArgs>(
      args?: SelectSubset<T, EventDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventUpdateManyArgs>(
      args: SelectSubset<T, EventUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
    **/
    upsert<T extends EventUpsertArgs>(
      args: SelectSubset<T, EventUpsertArgs>
    ): CheckSelect<T, Prisma__EventClient<Event>, Prisma__EventClient<EventGetPayload<T>>>

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EventClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Image<T extends ImageArgs = {}>(args?: Subset<T, ImageArgs>): CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>;

    Favorites<T extends FavoritesFindManyArgs = {}>(args?: Subset<T, FavoritesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Favorites>>, PrismaPromise<Array<FavoritesGetPayload<T>>>>;

    EventCategory<T extends EventCategoryFindManyArgs = {}>(args?: Subset<T, EventCategoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<EventCategory>>, PrismaPromise<Array<EventCategoryGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Throw an Error if a Event can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Event to fetch.
     * 
    **/
    where: EventWhereUniqueInput
  }


  /**
   * Event findFirst
   */
  export type EventFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Throw an Error if a Event can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Event to fetch.
     * 
    **/
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     * 
    **/
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     * 
    **/
    distinct?: Enumerable<EventScalarFieldEnum>
  }


  /**
   * Event findMany
   */
  export type EventFindManyArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Filter, which Events to fetch.
     * 
    **/
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     * 
    **/
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EventScalarFieldEnum>
  }


  /**
   * Event create
   */
  export type EventCreateArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * The data needed to create a Event.
     * 
    **/
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }


  /**
   * Event createMany
   */
  export type EventCreateManyArgs = {
    data: Enumerable<EventCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Event update
   */
  export type EventUpdateArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * The data needed to update a Event.
     * 
    **/
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     * 
    **/
    where: EventWhereUniqueInput
  }


  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs = {
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    where?: EventWhereInput
  }


  /**
   * Event upsert
   */
  export type EventUpsertArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * The filter to search for the Event to update in case it exists.
     * 
    **/
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     * 
    **/
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }


  /**
   * Event delete
   */
  export type EventDeleteArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
    /**
     * Filter which Event to delete.
     * 
    **/
    where: EventWhereUniqueInput
  }


  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs = {
    where?: EventWhereInput
  }


  /**
   * Event without action
   */
  export type EventArgs = {
    /**
     * Select specific fields to fetch from the Event
     * 
    **/
    select?: EventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventInclude | null
  }



  /**
   * Model EventCategory
   */


  export type AggregateEventCategory = {
    _count: EventCategoryCountAggregateOutputType | null
    _avg: EventCategoryAvgAggregateOutputType | null
    _sum: EventCategorySumAggregateOutputType | null
    _min: EventCategoryMinAggregateOutputType | null
    _max: EventCategoryMaxAggregateOutputType | null
  }

  export type EventCategoryAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    eventId: number | null
  }

  export type EventCategorySumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    eventId: number | null
  }

  export type EventCategoryMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    eventId: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type EventCategoryMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    eventId: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type EventCategoryCountAggregateOutputType = {
    id: number
    categoryId: number
    eventId: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type EventCategoryAvgAggregateInputType = {
    id?: true
    categoryId?: true
    eventId?: true
  }

  export type EventCategorySumAggregateInputType = {
    id?: true
    categoryId?: true
    eventId?: true
  }

  export type EventCategoryMinAggregateInputType = {
    id?: true
    categoryId?: true
    eventId?: true
    updated_at?: true
    created_at?: true
  }

  export type EventCategoryMaxAggregateInputType = {
    id?: true
    categoryId?: true
    eventId?: true
    updated_at?: true
    created_at?: true
  }

  export type EventCategoryCountAggregateInputType = {
    id?: true
    categoryId?: true
    eventId?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type EventCategoryAggregateArgs = {
    /**
     * Filter which EventCategory to aggregate.
     * 
    **/
    where?: EventCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<EventCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EventCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCategories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventCategories
    **/
    _count?: true | EventCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventCategoryMaxAggregateInputType
  }

  export type GetEventCategoryAggregateType<T extends EventCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateEventCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventCategory[P]>
      : GetScalarType<T[P], AggregateEventCategory[P]>
  }




  export type EventCategoryGroupByArgs = {
    where?: EventCategoryWhereInput
    orderBy?: Enumerable<EventCategoryOrderByWithAggregationInput>
    by: Array<EventCategoryScalarFieldEnum>
    having?: EventCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCategoryCountAggregateInputType | true
    _avg?: EventCategoryAvgAggregateInputType
    _sum?: EventCategorySumAggregateInputType
    _min?: EventCategoryMinAggregateInputType
    _max?: EventCategoryMaxAggregateInputType
  }


  export type EventCategoryGroupByOutputType = {
    id: number
    categoryId: number
    eventId: number
    updated_at: Date
    created_at: Date
    _count: EventCategoryCountAggregateOutputType | null
    _avg: EventCategoryAvgAggregateOutputType | null
    _sum: EventCategorySumAggregateOutputType | null
    _min: EventCategoryMinAggregateOutputType | null
    _max: EventCategoryMaxAggregateOutputType | null
  }

  type GetEventCategoryGroupByPayload<T extends EventCategoryGroupByArgs> = Promise<
    Array<
      PickArray<EventCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], EventCategoryGroupByOutputType[P]>
        }
      >
    >


  export type EventCategorySelect = {
    id?: boolean
    categoryId?: boolean
    Category?: boolean | CategoryArgs
    eventId?: boolean
    Event?: boolean | EventArgs
    updated_at?: boolean
    created_at?: boolean
  }

  export type EventCategoryInclude = {
    Category?: boolean | CategoryArgs
    Event?: boolean | EventArgs
  }

  export type EventCategoryGetPayload<
    S extends boolean | null | undefined | EventCategoryArgs,
    U = keyof S
      > = S extends true
        ? EventCategory
    : S extends undefined
    ? never
    : S extends EventCategoryArgs | EventCategoryFindManyArgs
    ?'include' extends U
    ? EventCategory  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Category'
        ? CategoryGetPayload<S['include'][P]> :
        P extends 'Event'
        ? EventGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof EventCategory ?EventCategory [P]
  : 
          P extends 'Category'
        ? CategoryGetPayload<S['select'][P]> :
        P extends 'Event'
        ? EventGetPayload<S['select'][P]> : never
  } 
    : EventCategory
  : EventCategory


  type EventCategoryCountArgs = Merge<
    Omit<EventCategoryFindManyArgs, 'select' | 'include'> & {
      select?: EventCategoryCountAggregateInputType | true
    }
  >

  export interface EventCategoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one EventCategory that matches the filter.
     * @param {EventCategoryFindUniqueArgs} args - Arguments to find a EventCategory
     * @example
     * // Get one EventCategory
     * const eventCategory = await prisma.eventCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EventCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'EventCategory'> extends True ? CheckSelect<T, Prisma__EventCategoryClient<EventCategory>, Prisma__EventCategoryClient<EventCategoryGetPayload<T>>> : CheckSelect<T, Prisma__EventCategoryClient<EventCategory | null >, Prisma__EventCategoryClient<EventCategoryGetPayload<T> | null >>

    /**
     * Find the first EventCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryFindFirstArgs} args - Arguments to find a EventCategory
     * @example
     * // Get one EventCategory
     * const eventCategory = await prisma.eventCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EventCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'EventCategory'> extends True ? CheckSelect<T, Prisma__EventCategoryClient<EventCategory>, Prisma__EventCategoryClient<EventCategoryGetPayload<T>>> : CheckSelect<T, Prisma__EventCategoryClient<EventCategory | null >, Prisma__EventCategoryClient<EventCategoryGetPayload<T> | null >>

    /**
     * Find zero or more EventCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventCategories
     * const eventCategories = await prisma.eventCategory.findMany()
     * 
     * // Get first 10 EventCategories
     * const eventCategories = await prisma.eventCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventCategoryWithIdOnly = await prisma.eventCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventCategoryFindManyArgs>(
      args?: SelectSubset<T, EventCategoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<EventCategory>>, PrismaPromise<Array<EventCategoryGetPayload<T>>>>

    /**
     * Create a EventCategory.
     * @param {EventCategoryCreateArgs} args - Arguments to create a EventCategory.
     * @example
     * // Create one EventCategory
     * const EventCategory = await prisma.eventCategory.create({
     *   data: {
     *     // ... data to create a EventCategory
     *   }
     * })
     * 
    **/
    create<T extends EventCategoryCreateArgs>(
      args: SelectSubset<T, EventCategoryCreateArgs>
    ): CheckSelect<T, Prisma__EventCategoryClient<EventCategory>, Prisma__EventCategoryClient<EventCategoryGetPayload<T>>>

    /**
     * Create many EventCategories.
     *     @param {EventCategoryCreateManyArgs} args - Arguments to create many EventCategories.
     *     @example
     *     // Create many EventCategories
     *     const eventCategory = await prisma.eventCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventCategoryCreateManyArgs>(
      args?: SelectSubset<T, EventCategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a EventCategory.
     * @param {EventCategoryDeleteArgs} args - Arguments to delete one EventCategory.
     * @example
     * // Delete one EventCategory
     * const EventCategory = await prisma.eventCategory.delete({
     *   where: {
     *     // ... filter to delete one EventCategory
     *   }
     * })
     * 
    **/
    delete<T extends EventCategoryDeleteArgs>(
      args: SelectSubset<T, EventCategoryDeleteArgs>
    ): CheckSelect<T, Prisma__EventCategoryClient<EventCategory>, Prisma__EventCategoryClient<EventCategoryGetPayload<T>>>

    /**
     * Update one EventCategory.
     * @param {EventCategoryUpdateArgs} args - Arguments to update one EventCategory.
     * @example
     * // Update one EventCategory
     * const eventCategory = await prisma.eventCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventCategoryUpdateArgs>(
      args: SelectSubset<T, EventCategoryUpdateArgs>
    ): CheckSelect<T, Prisma__EventCategoryClient<EventCategory>, Prisma__EventCategoryClient<EventCategoryGetPayload<T>>>

    /**
     * Delete zero or more EventCategories.
     * @param {EventCategoryDeleteManyArgs} args - Arguments to filter EventCategories to delete.
     * @example
     * // Delete a few EventCategories
     * const { count } = await prisma.eventCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventCategoryDeleteManyArgs>(
      args?: SelectSubset<T, EventCategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventCategories
     * const eventCategory = await prisma.eventCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventCategoryUpdateManyArgs>(
      args: SelectSubset<T, EventCategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one EventCategory.
     * @param {EventCategoryUpsertArgs} args - Arguments to update or create a EventCategory.
     * @example
     * // Update or create a EventCategory
     * const eventCategory = await prisma.eventCategory.upsert({
     *   create: {
     *     // ... data to create a EventCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventCategory we want to update
     *   }
     * })
    **/
    upsert<T extends EventCategoryUpsertArgs>(
      args: SelectSubset<T, EventCategoryUpsertArgs>
    ): CheckSelect<T, Prisma__EventCategoryClient<EventCategory>, Prisma__EventCategoryClient<EventCategoryGetPayload<T>>>

    /**
     * Count the number of EventCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryCountArgs} args - Arguments to filter EventCategories to count.
     * @example
     * // Count the number of EventCategories
     * const count = await prisma.eventCategory.count({
     *   where: {
     *     // ... the filter for the EventCategories we want to count
     *   }
     * })
    **/
    count<T extends EventCategoryCountArgs>(
      args?: Subset<T, EventCategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventCategoryAggregateArgs>(args: Subset<T, EventCategoryAggregateArgs>): PrismaPromise<GetEventCategoryAggregateType<T>>

    /**
     * Group by EventCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventCategoryGroupByArgs['orderBy'] }
        : { orderBy?: EventCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventCategoryGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EventCategoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Category<T extends CategoryArgs = {}>(args?: Subset<T, CategoryArgs>): CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>;

    Event<T extends EventArgs = {}>(args?: Subset<T, EventArgs>): CheckSelect<T, Prisma__EventClient<Event | null >, Prisma__EventClient<EventGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * EventCategory findUnique
   */
  export type EventCategoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the EventCategory
     * 
    **/
    select?: EventCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventCategoryInclude | null
    /**
     * Throw an Error if a EventCategory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which EventCategory to fetch.
     * 
    **/
    where: EventCategoryWhereUniqueInput
  }


  /**
   * EventCategory findFirst
   */
  export type EventCategoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the EventCategory
     * 
    **/
    select?: EventCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventCategoryInclude | null
    /**
     * Throw an Error if a EventCategory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which EventCategory to fetch.
     * 
    **/
    where?: EventCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<EventCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventCategories.
     * 
    **/
    cursor?: EventCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCategories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventCategories.
     * 
    **/
    distinct?: Enumerable<EventCategoryScalarFieldEnum>
  }


  /**
   * EventCategory findMany
   */
  export type EventCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the EventCategory
     * 
    **/
    select?: EventCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventCategoryInclude | null
    /**
     * Filter, which EventCategories to fetch.
     * 
    **/
    where?: EventCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCategories to fetch.
     * 
    **/
    orderBy?: Enumerable<EventCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventCategories.
     * 
    **/
    cursor?: EventCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCategories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCategories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EventCategoryScalarFieldEnum>
  }


  /**
   * EventCategory create
   */
  export type EventCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the EventCategory
     * 
    **/
    select?: EventCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventCategoryInclude | null
    /**
     * The data needed to create a EventCategory.
     * 
    **/
    data: XOR<EventCategoryCreateInput, EventCategoryUncheckedCreateInput>
  }


  /**
   * EventCategory createMany
   */
  export type EventCategoryCreateManyArgs = {
    data: Enumerable<EventCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * EventCategory update
   */
  export type EventCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the EventCategory
     * 
    **/
    select?: EventCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventCategoryInclude | null
    /**
     * The data needed to update a EventCategory.
     * 
    **/
    data: XOR<EventCategoryUpdateInput, EventCategoryUncheckedUpdateInput>
    /**
     * Choose, which EventCategory to update.
     * 
    **/
    where: EventCategoryWhereUniqueInput
  }


  /**
   * EventCategory updateMany
   */
  export type EventCategoryUpdateManyArgs = {
    data: XOR<EventCategoryUpdateManyMutationInput, EventCategoryUncheckedUpdateManyInput>
    where?: EventCategoryWhereInput
  }


  /**
   * EventCategory upsert
   */
  export type EventCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the EventCategory
     * 
    **/
    select?: EventCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventCategoryInclude | null
    /**
     * The filter to search for the EventCategory to update in case it exists.
     * 
    **/
    where: EventCategoryWhereUniqueInput
    /**
     * In case the EventCategory found by the `where` argument doesn't exist, create a new EventCategory with this data.
     * 
    **/
    create: XOR<EventCategoryCreateInput, EventCategoryUncheckedCreateInput>
    /**
     * In case the EventCategory was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EventCategoryUpdateInput, EventCategoryUncheckedUpdateInput>
  }


  /**
   * EventCategory delete
   */
  export type EventCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the EventCategory
     * 
    **/
    select?: EventCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventCategoryInclude | null
    /**
     * Filter which EventCategory to delete.
     * 
    **/
    where: EventCategoryWhereUniqueInput
  }


  /**
   * EventCategory deleteMany
   */
  export type EventCategoryDeleteManyArgs = {
    where?: EventCategoryWhereInput
  }


  /**
   * EventCategory without action
   */
  export type EventCategoryArgs = {
    /**
     * Select specific fields to fetch from the EventCategory
     * 
    **/
    select?: EventCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventCategoryInclude | null
  }



  /**
   * Model Favorites
   */


  export type AggregateFavorites = {
    _count: FavoritesCountAggregateOutputType | null
    _avg: FavoritesAvgAggregateOutputType | null
    _sum: FavoritesSumAggregateOutputType | null
    _min: FavoritesMinAggregateOutputType | null
    _max: FavoritesMaxAggregateOutputType | null
  }

  export type FavoritesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
  }

  export type FavoritesSumAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
  }

  export type FavoritesMinAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type FavoritesMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type FavoritesCountAggregateOutputType = {
    id: number
    userId: number
    eventId: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type FavoritesAvgAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
  }

  export type FavoritesSumAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
  }

  export type FavoritesMinAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    updated_at?: true
    created_at?: true
  }

  export type FavoritesMaxAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    updated_at?: true
    created_at?: true
  }

  export type FavoritesCountAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type FavoritesAggregateArgs = {
    /**
     * Filter which Favorites to aggregate.
     * 
    **/
    where?: FavoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     * 
    **/
    orderBy?: Enumerable<FavoritesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FavoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoritesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoritesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoritesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritesMaxAggregateInputType
  }

  export type GetFavoritesAggregateType<T extends FavoritesAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorites[P]>
      : GetScalarType<T[P], AggregateFavorites[P]>
  }




  export type FavoritesGroupByArgs = {
    where?: FavoritesWhereInput
    orderBy?: Enumerable<FavoritesOrderByWithAggregationInput>
    by: Array<FavoritesScalarFieldEnum>
    having?: FavoritesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritesCountAggregateInputType | true
    _avg?: FavoritesAvgAggregateInputType
    _sum?: FavoritesSumAggregateInputType
    _min?: FavoritesMinAggregateInputType
    _max?: FavoritesMaxAggregateInputType
  }


  export type FavoritesGroupByOutputType = {
    id: number
    userId: number
    eventId: number
    updated_at: Date
    created_at: Date
    _count: FavoritesCountAggregateOutputType | null
    _avg: FavoritesAvgAggregateOutputType | null
    _sum: FavoritesSumAggregateOutputType | null
    _min: FavoritesMinAggregateOutputType | null
    _max: FavoritesMaxAggregateOutputType | null
  }

  type GetFavoritesGroupByPayload<T extends FavoritesGroupByArgs> = Promise<
    Array<
      PickArray<FavoritesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritesGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritesGroupByOutputType[P]>
        }
      >
    >


  export type FavoritesSelect = {
    id?: boolean
    userId?: boolean
    eventId?: boolean
    User?: boolean | UserArgs
    Event?: boolean | EventArgs
    updated_at?: boolean
    created_at?: boolean
  }

  export type FavoritesInclude = {
    User?: boolean | UserArgs
    Event?: boolean | EventArgs
  }

  export type FavoritesGetPayload<
    S extends boolean | null | undefined | FavoritesArgs,
    U = keyof S
      > = S extends true
        ? Favorites
    : S extends undefined
    ? never
    : S extends FavoritesArgs | FavoritesFindManyArgs
    ?'include' extends U
    ? Favorites  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'User'
        ? UserGetPayload<S['include'][P]> :
        P extends 'Event'
        ? EventGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Favorites ?Favorites [P]
  : 
          P extends 'User'
        ? UserGetPayload<S['select'][P]> :
        P extends 'Event'
        ? EventGetPayload<S['select'][P]> : never
  } 
    : Favorites
  : Favorites


  type FavoritesCountArgs = Merge<
    Omit<FavoritesFindManyArgs, 'select' | 'include'> & {
      select?: FavoritesCountAggregateInputType | true
    }
  >

  export interface FavoritesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Favorites that matches the filter.
     * @param {FavoritesFindUniqueArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FavoritesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FavoritesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Favorites'> extends True ? CheckSelect<T, Prisma__FavoritesClient<Favorites>, Prisma__FavoritesClient<FavoritesGetPayload<T>>> : CheckSelect<T, Prisma__FavoritesClient<Favorites | null >, Prisma__FavoritesClient<FavoritesGetPayload<T> | null >>

    /**
     * Find the first Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesFindFirstArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FavoritesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FavoritesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Favorites'> extends True ? CheckSelect<T, Prisma__FavoritesClient<Favorites>, Prisma__FavoritesClient<FavoritesGetPayload<T>>> : CheckSelect<T, Prisma__FavoritesClient<Favorites | null >, Prisma__FavoritesClient<FavoritesGetPayload<T> | null >>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorites.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritesWithIdOnly = await prisma.favorites.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FavoritesFindManyArgs>(
      args?: SelectSubset<T, FavoritesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Favorites>>, PrismaPromise<Array<FavoritesGetPayload<T>>>>

    /**
     * Create a Favorites.
     * @param {FavoritesCreateArgs} args - Arguments to create a Favorites.
     * @example
     * // Create one Favorites
     * const Favorites = await prisma.favorites.create({
     *   data: {
     *     // ... data to create a Favorites
     *   }
     * })
     * 
    **/
    create<T extends FavoritesCreateArgs>(
      args: SelectSubset<T, FavoritesCreateArgs>
    ): CheckSelect<T, Prisma__FavoritesClient<Favorites>, Prisma__FavoritesClient<FavoritesGetPayload<T>>>

    /**
     * Create many Favorites.
     *     @param {FavoritesCreateManyArgs} args - Arguments to create many Favorites.
     *     @example
     *     // Create many Favorites
     *     const favorites = await prisma.favorites.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FavoritesCreateManyArgs>(
      args?: SelectSubset<T, FavoritesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Favorites.
     * @param {FavoritesDeleteArgs} args - Arguments to delete one Favorites.
     * @example
     * // Delete one Favorites
     * const Favorites = await prisma.favorites.delete({
     *   where: {
     *     // ... filter to delete one Favorites
     *   }
     * })
     * 
    **/
    delete<T extends FavoritesDeleteArgs>(
      args: SelectSubset<T, FavoritesDeleteArgs>
    ): CheckSelect<T, Prisma__FavoritesClient<Favorites>, Prisma__FavoritesClient<FavoritesGetPayload<T>>>

    /**
     * Update one Favorites.
     * @param {FavoritesUpdateArgs} args - Arguments to update one Favorites.
     * @example
     * // Update one Favorites
     * const favorites = await prisma.favorites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FavoritesUpdateArgs>(
      args: SelectSubset<T, FavoritesUpdateArgs>
    ): CheckSelect<T, Prisma__FavoritesClient<Favorites>, Prisma__FavoritesClient<FavoritesGetPayload<T>>>

    /**
     * Delete zero or more Favorites.
     * @param {FavoritesDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FavoritesDeleteManyArgs>(
      args?: SelectSubset<T, FavoritesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorites = await prisma.favorites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FavoritesUpdateManyArgs>(
      args: SelectSubset<T, FavoritesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorites.
     * @param {FavoritesUpsertArgs} args - Arguments to update or create a Favorites.
     * @example
     * // Update or create a Favorites
     * const favorites = await prisma.favorites.upsert({
     *   create: {
     *     // ... data to create a Favorites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorites we want to update
     *   }
     * })
    **/
    upsert<T extends FavoritesUpsertArgs>(
      args: SelectSubset<T, FavoritesUpsertArgs>
    ): CheckSelect<T, Prisma__FavoritesClient<Favorites>, Prisma__FavoritesClient<FavoritesGetPayload<T>>>

    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorites.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoritesCountArgs>(
      args?: Subset<T, FavoritesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoritesAggregateArgs>(args: Subset<T, FavoritesAggregateArgs>): PrismaPromise<GetFavoritesAggregateType<T>>

    /**
     * Group by Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoritesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritesGroupByArgs['orderBy'] }
        : { orderBy?: FavoritesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoritesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FavoritesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Event<T extends EventArgs = {}>(args?: Subset<T, EventArgs>): CheckSelect<T, Prisma__EventClient<Event | null >, Prisma__EventClient<EventGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Favorites findUnique
   */
  export type FavoritesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Favorites
     * 
    **/
    select?: FavoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoritesInclude | null
    /**
     * Throw an Error if a Favorites can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Favorites to fetch.
     * 
    **/
    where: FavoritesWhereUniqueInput
  }


  /**
   * Favorites findFirst
   */
  export type FavoritesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Favorites
     * 
    **/
    select?: FavoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoritesInclude | null
    /**
     * Throw an Error if a Favorites can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Favorites to fetch.
     * 
    **/
    where?: FavoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     * 
    **/
    orderBy?: Enumerable<FavoritesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     * 
    **/
    cursor?: FavoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     * 
    **/
    distinct?: Enumerable<FavoritesScalarFieldEnum>
  }


  /**
   * Favorites findMany
   */
  export type FavoritesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Favorites
     * 
    **/
    select?: FavoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoritesInclude | null
    /**
     * Filter, which Favorites to fetch.
     * 
    **/
    where?: FavoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     * 
    **/
    orderBy?: Enumerable<FavoritesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     * 
    **/
    cursor?: FavoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FavoritesScalarFieldEnum>
  }


  /**
   * Favorites create
   */
  export type FavoritesCreateArgs = {
    /**
     * Select specific fields to fetch from the Favorites
     * 
    **/
    select?: FavoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoritesInclude | null
    /**
     * The data needed to create a Favorites.
     * 
    **/
    data: XOR<FavoritesCreateInput, FavoritesUncheckedCreateInput>
  }


  /**
   * Favorites createMany
   */
  export type FavoritesCreateManyArgs = {
    data: Enumerable<FavoritesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Favorites update
   */
  export type FavoritesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Favorites
     * 
    **/
    select?: FavoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoritesInclude | null
    /**
     * The data needed to update a Favorites.
     * 
    **/
    data: XOR<FavoritesUpdateInput, FavoritesUncheckedUpdateInput>
    /**
     * Choose, which Favorites to update.
     * 
    **/
    where: FavoritesWhereUniqueInput
  }


  /**
   * Favorites updateMany
   */
  export type FavoritesUpdateManyArgs = {
    data: XOR<FavoritesUpdateManyMutationInput, FavoritesUncheckedUpdateManyInput>
    where?: FavoritesWhereInput
  }


  /**
   * Favorites upsert
   */
  export type FavoritesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Favorites
     * 
    **/
    select?: FavoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoritesInclude | null
    /**
     * The filter to search for the Favorites to update in case it exists.
     * 
    **/
    where: FavoritesWhereUniqueInput
    /**
     * In case the Favorites found by the `where` argument doesn't exist, create a new Favorites with this data.
     * 
    **/
    create: XOR<FavoritesCreateInput, FavoritesUncheckedCreateInput>
    /**
     * In case the Favorites was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FavoritesUpdateInput, FavoritesUncheckedUpdateInput>
  }


  /**
   * Favorites delete
   */
  export type FavoritesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Favorites
     * 
    **/
    select?: FavoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoritesInclude | null
    /**
     * Filter which Favorites to delete.
     * 
    **/
    where: FavoritesWhereUniqueInput
  }


  /**
   * Favorites deleteMany
   */
  export type FavoritesDeleteManyArgs = {
    where?: FavoritesWhereInput
  }


  /**
   * Favorites without action
   */
  export type FavoritesArgs = {
    /**
     * Select specific fields to fetch from the Favorites
     * 
    **/
    select?: FavoritesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoritesInclude | null
  }



  /**
   * Model Image
   */


  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    size: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    size: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    fieldname: string | null
    originalname: string | null
    encoding: string | null
    mimetype: string | null
    destination: string | null
    origin: ImagOrigin | null
    filename: string | null
    path: string | null
    size: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    fieldname: string | null
    originalname: string | null
    encoding: string | null
    mimetype: string | null
    destination: string | null
    origin: ImagOrigin | null
    filename: string | null
    path: string | null
    size: number | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    fieldname: number
    originalname: number
    encoding: number
    mimetype: number
    destination: number
    origin: number
    filename: number
    path: number
    size: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    size?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    size?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    fieldname?: true
    originalname?: true
    encoding?: true
    mimetype?: true
    destination?: true
    origin?: true
    filename?: true
    path?: true
    size?: true
    updated_at?: true
    created_at?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    fieldname?: true
    originalname?: true
    encoding?: true
    mimetype?: true
    destination?: true
    origin?: true
    filename?: true
    path?: true
    size?: true
    updated_at?: true
    created_at?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    fieldname?: true
    originalname?: true
    encoding?: true
    mimetype?: true
    destination?: true
    origin?: true
    filename?: true
    path?: true
    size?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type ImageAggregateArgs = {
    /**
     * Filter which Image to aggregate.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs = {
    where?: ImageWhereInput
    orderBy?: Enumerable<ImageOrderByWithAggregationInput>
    by: Array<ImageScalarFieldEnum>
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }


  export type ImageGroupByOutputType = {
    id: number
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    destination: string
    origin: ImagOrigin
    filename: string
    path: string
    size: number
    updated_at: Date
    created_at: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Promise<
    Array<
      PickArray<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect = {
    id?: boolean
    fieldname?: boolean
    originalname?: boolean
    encoding?: boolean
    mimetype?: boolean
    destination?: boolean
    origin?: boolean
    filename?: boolean
    path?: boolean
    size?: boolean
    updated_at?: boolean
    created_at?: boolean
    Category?: boolean | CategoryFindManyArgs
    Event?: boolean | EventFindManyArgs
    _count?: boolean | ImageCountOutputTypeArgs
  }

  export type ImageInclude = {
    Category?: boolean | CategoryFindManyArgs
    Event?: boolean | EventFindManyArgs
    _count?: boolean | ImageCountOutputTypeArgs
  }

  export type ImageGetPayload<
    S extends boolean | null | undefined | ImageArgs,
    U = keyof S
      > = S extends true
        ? Image
    : S extends undefined
    ? never
    : S extends ImageArgs | ImageFindManyArgs
    ?'include' extends U
    ? Image  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Category'
        ? Array < CategoryGetPayload<S['include'][P]>>  :
        P extends 'Event'
        ? Array < EventGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? ImageCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Image ?Image [P]
  : 
          P extends 'Category'
        ? Array < CategoryGetPayload<S['select'][P]>>  :
        P extends 'Event'
        ? Array < EventGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? ImageCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Image
  : Image


  type ImageCountArgs = Merge<
    Omit<ImageFindManyArgs, 'select' | 'include'> & {
      select?: ImageCountAggregateInputType | true
    }
  >

  export interface ImageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Image'> extends True ? CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>> : CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Image'> extends True ? CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>> : CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs>(
      args?: SelectSubset<T, ImageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Image>>, PrismaPromise<Array<ImageGetPayload<T>>>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs>(
      args: SelectSubset<T, ImageCreateArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Create many Images.
     *     @param {ImageCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const image = await prisma.image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImageCreateManyArgs>(
      args?: SelectSubset<T, ImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs>(
      args: SelectSubset<T, ImageDeleteArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs>(
      args: SelectSubset<T, ImageUpdateArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs>(
      args?: SelectSubset<T, ImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs>(
      args: SelectSubset<T, ImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs>(
      args: SelectSubset<T, ImageUpsertArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Category<T extends CategoryFindManyArgs = {}>(args?: Subset<T, CategoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Category>>, PrismaPromise<Array<CategoryGetPayload<T>>>>;

    Event<T extends EventFindManyArgs = {}>(args?: Subset<T, EventFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Event>>, PrismaPromise<Array<EventGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Throw an Error if a Image can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Image to fetch.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Throw an Error if a Image can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Image to fetch.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     * 
    **/
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image findMany
   */
  export type ImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image create
   */
  export type ImageCreateArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The data needed to create a Image.
     * 
    **/
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image createMany
   */
  export type ImageCreateManyArgs = {
    data: Enumerable<ImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The data needed to update a Image.
     * 
    **/
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs = {
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The filter to search for the Image to update in case it exists.
     * 
    **/
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     * 
    **/
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter which Image to delete.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs = {
    where?: ImageWhereInput
  }


  /**
   * Image without action
   */
  export type ImageArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    confirmed: 'confirmed',
    confirmKey: 'confirmKey',
    forgotKey: 'forgotKey',
    createConfirm: 'createConfirm',
    createForgot: 'createForgot',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    titleRu: 'titleRu',
    titleUk: 'titleUk',
    titleEn: 'titleEn',
    descriptionRu: 'descriptionRu',
    descriptionUk: 'descriptionUk',
    descriptionEn: 'descriptionEn',
    image: 'image',
    adminId: 'adminId',
    updated_at: 'updated_at',
    created_at: 'created_at',
    parentId: 'parentId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const UserCategoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    active: 'active',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type UserCategoryScalarFieldEnum = (typeof UserCategoryScalarFieldEnum)[keyof typeof UserCategoryScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    titleRu: 'titleRu',
    titleUk: 'titleUk',
    titleEn: 'titleEn',
    descriptionRu: 'descriptionRu',
    descriptionUk: 'descriptionUk',
    descriptionEn: 'descriptionEn',
    image: 'image',
    adminId: 'adminId',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventCategoryScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    eventId: 'eventId',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type EventCategoryScalarFieldEnum = (typeof EventCategoryScalarFieldEnum)[keyof typeof EventCategoryScalarFieldEnum]


  export const FavoritesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventId: 'eventId',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type FavoritesScalarFieldEnum = (typeof FavoritesScalarFieldEnum)[keyof typeof FavoritesScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    fieldname: 'fieldname',
    originalname: 'originalname',
    encoding: 'encoding',
    mimetype: 'mimetype',
    destination: 'destination',
    origin: 'origin',
    filename: 'filename',
    path: 'path',
    size: 'size',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    name?: StringNullableFilter | string | null
    role?: EnumRolesNullableFilter | Roles | null
    confirmed?: BoolFilter | boolean
    confirmKey?: StringNullableFilter | string | null
    forgotKey?: StringNullableFilter | string | null
    createConfirm?: DateTimeNullableFilter | Date | string | null
    createForgot?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
    Category?: CategoryListRelationFilter
    UserCategory?: UserCategoryListRelationFilter
    Event?: EventListRelationFilter
    Favorites?: FavoritesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    confirmed?: SortOrder
    confirmKey?: SortOrder
    forgotKey?: SortOrder
    createConfirm?: SortOrder
    createForgot?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    Category?: CategoryOrderByRelationAggregateInput
    UserCategory?: UserCategoryOrderByRelationAggregateInput
    Event?: EventOrderByRelationAggregateInput
    Favorites?: FavoritesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    confirmed?: SortOrder
    confirmKey?: SortOrder
    forgotKey?: SortOrder
    createConfirm?: SortOrder
    createForgot?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    role?: EnumRolesNullableWithAggregatesFilter | Roles | null
    confirmed?: BoolWithAggregatesFilter | boolean
    confirmKey?: StringNullableWithAggregatesFilter | string | null
    forgotKey?: StringNullableWithAggregatesFilter | string | null
    createConfirm?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createForgot?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: IntFilter | number
    titleRu?: StringFilter | string
    titleUk?: StringFilter | string
    titleEn?: StringFilter | string
    descriptionRu?: StringFilter | string
    descriptionUk?: StringFilter | string
    descriptionEn?: StringFilter | string
    image?: IntFilter | number
    adminId?: IntNullableFilter | number | null
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    Image?: XOR<ImageRelationFilter, ImageWhereInput>
    updated_at?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
    UserCategory?: UserCategoryListRelationFilter
    EventCategory?: EventCategoryListRelationFilter
    Children?: CategoryListRelationFilter
    parentId?: IntNullableFilter | number | null
    Parent?: XOR<CategoryRelationFilter, CategoryWhereInput> | null
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    titleRu?: SortOrder
    titleUk?: SortOrder
    titleEn?: SortOrder
    descriptionRu?: SortOrder
    descriptionUk?: SortOrder
    descriptionEn?: SortOrder
    image?: SortOrder
    adminId?: SortOrder
    User?: UserOrderByWithRelationInput
    Image?: ImageOrderByWithRelationInput
    updated_at?: SortOrder
    created_at?: SortOrder
    UserCategory?: UserCategoryOrderByRelationAggregateInput
    EventCategory?: EventCategoryOrderByRelationAggregateInput
    Children?: CategoryOrderByRelationAggregateInput
    parentId?: SortOrder
    Parent?: CategoryOrderByWithRelationInput
  }

  export type CategoryWhereUniqueInput = {
    id?: number
    titleRu?: string
    titleUk?: string
    titleEn?: string
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    titleRu?: SortOrder
    titleUk?: SortOrder
    titleEn?: SortOrder
    descriptionRu?: SortOrder
    descriptionUk?: SortOrder
    descriptionEn?: SortOrder
    image?: SortOrder
    adminId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    parentId?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    titleRu?: StringWithAggregatesFilter | string
    titleUk?: StringWithAggregatesFilter | string
    titleEn?: StringWithAggregatesFilter | string
    descriptionRu?: StringWithAggregatesFilter | string
    descriptionUk?: StringWithAggregatesFilter | string
    descriptionEn?: StringWithAggregatesFilter | string
    image?: IntWithAggregatesFilter | number
    adminId?: IntNullableWithAggregatesFilter | number | null
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    parentId?: IntNullableWithAggregatesFilter | number | null
  }

  export type UserCategoryWhereInput = {
    AND?: Enumerable<UserCategoryWhereInput>
    OR?: Enumerable<UserCategoryWhereInput>
    NOT?: Enumerable<UserCategoryWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    categoryId?: IntFilter | number
    active?: BoolFilter | boolean
    User?: XOR<UserRelationFilter, UserWhereInput>
    Category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    updated_at?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
  }

  export type UserCategoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    active?: SortOrder
    User?: UserOrderByWithRelationInput
    Category?: CategoryOrderByWithRelationInput
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type UserCategoryWhereUniqueInput = {
    id?: number
  }

  export type UserCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    active?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: UserCategoryCountOrderByAggregateInput
    _avg?: UserCategoryAvgOrderByAggregateInput
    _max?: UserCategoryMaxOrderByAggregateInput
    _min?: UserCategoryMinOrderByAggregateInput
    _sum?: UserCategorySumOrderByAggregateInput
  }

  export type UserCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserCategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
    active?: BoolWithAggregatesFilter | boolean
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EventWhereInput = {
    AND?: Enumerable<EventWhereInput>
    OR?: Enumerable<EventWhereInput>
    NOT?: Enumerable<EventWhereInput>
    id?: IntFilter | number
    titleRu?: StringFilter | string
    titleUk?: StringFilter | string
    titleEn?: StringFilter | string
    descriptionRu?: StringFilter | string
    descriptionUk?: StringFilter | string
    descriptionEn?: StringFilter | string
    image?: IntFilter | number
    adminId?: IntNullableFilter | number | null
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    Image?: XOR<ImageRelationFilter, ImageWhereInput>
    updated_at?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
    Favorites?: FavoritesListRelationFilter
    EventCategory?: EventCategoryListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    titleRu?: SortOrder
    titleUk?: SortOrder
    titleEn?: SortOrder
    descriptionRu?: SortOrder
    descriptionUk?: SortOrder
    descriptionEn?: SortOrder
    image?: SortOrder
    adminId?: SortOrder
    User?: UserOrderByWithRelationInput
    Image?: ImageOrderByWithRelationInput
    updated_at?: SortOrder
    created_at?: SortOrder
    Favorites?: FavoritesOrderByRelationAggregateInput
    EventCategory?: EventCategoryOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = {
    id?: number
  }

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    titleRu?: SortOrder
    titleUk?: SortOrder
    titleEn?: SortOrder
    descriptionRu?: SortOrder
    descriptionUk?: SortOrder
    descriptionEn?: SortOrder
    image?: SortOrder
    adminId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EventScalarWhereWithAggregatesInput>
    OR?: Enumerable<EventScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EventScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    titleRu?: StringWithAggregatesFilter | string
    titleUk?: StringWithAggregatesFilter | string
    titleEn?: StringWithAggregatesFilter | string
    descriptionRu?: StringWithAggregatesFilter | string
    descriptionUk?: StringWithAggregatesFilter | string
    descriptionEn?: StringWithAggregatesFilter | string
    image?: IntWithAggregatesFilter | number
    adminId?: IntNullableWithAggregatesFilter | number | null
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EventCategoryWhereInput = {
    AND?: Enumerable<EventCategoryWhereInput>
    OR?: Enumerable<EventCategoryWhereInput>
    NOT?: Enumerable<EventCategoryWhereInput>
    id?: IntFilter | number
    categoryId?: IntFilter | number
    Category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    eventId?: IntFilter | number
    Event?: XOR<EventRelationFilter, EventWhereInput>
    updated_at?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
  }

  export type EventCategoryOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    Category?: CategoryOrderByWithRelationInput
    eventId?: SortOrder
    Event?: EventOrderByWithRelationInput
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type EventCategoryWhereUniqueInput = {
    id?: number
  }

  export type EventCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    eventId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: EventCategoryCountOrderByAggregateInput
    _avg?: EventCategoryAvgOrderByAggregateInput
    _max?: EventCategoryMaxOrderByAggregateInput
    _min?: EventCategoryMinOrderByAggregateInput
    _sum?: EventCategorySumOrderByAggregateInput
  }

  export type EventCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EventCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<EventCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EventCategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
    eventId?: IntWithAggregatesFilter | number
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FavoritesWhereInput = {
    AND?: Enumerable<FavoritesWhereInput>
    OR?: Enumerable<FavoritesWhereInput>
    NOT?: Enumerable<FavoritesWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    eventId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    Event?: XOR<EventRelationFilter, EventWhereInput>
    updated_at?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
  }

  export type FavoritesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    User?: UserOrderByWithRelationInput
    Event?: EventOrderByWithRelationInput
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type FavoritesWhereUniqueInput = {
    id?: number
  }

  export type FavoritesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: FavoritesCountOrderByAggregateInput
    _avg?: FavoritesAvgOrderByAggregateInput
    _max?: FavoritesMaxOrderByAggregateInput
    _min?: FavoritesMinOrderByAggregateInput
    _sum?: FavoritesSumOrderByAggregateInput
  }

  export type FavoritesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FavoritesScalarWhereWithAggregatesInput>
    OR?: Enumerable<FavoritesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FavoritesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    eventId?: IntWithAggregatesFilter | number
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ImageWhereInput = {
    AND?: Enumerable<ImageWhereInput>
    OR?: Enumerable<ImageWhereInput>
    NOT?: Enumerable<ImageWhereInput>
    id?: IntFilter | number
    fieldname?: StringFilter | string
    originalname?: StringFilter | string
    encoding?: StringFilter | string
    mimetype?: StringFilter | string
    destination?: StringFilter | string
    origin?: EnumImagOriginFilter | ImagOrigin
    filename?: StringFilter | string
    path?: StringFilter | string
    size?: IntFilter | number
    updated_at?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
    Category?: CategoryListRelationFilter
    Event?: EventListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    fieldname?: SortOrder
    originalname?: SortOrder
    encoding?: SortOrder
    mimetype?: SortOrder
    destination?: SortOrder
    origin?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    size?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    Category?: CategoryOrderByRelationAggregateInput
    Event?: EventOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = {
    id?: number
    path?: string
  }

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    fieldname?: SortOrder
    originalname?: SortOrder
    encoding?: SortOrder
    mimetype?: SortOrder
    destination?: SortOrder
    origin?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    size?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    fieldname?: StringWithAggregatesFilter | string
    originalname?: StringWithAggregatesFilter | string
    encoding?: StringWithAggregatesFilter | string
    mimetype?: StringWithAggregatesFilter | string
    destination?: StringWithAggregatesFilter | string
    origin?: EnumImagOriginWithAggregatesFilter | ImagOrigin
    filename?: StringWithAggregatesFilter | string
    path?: StringWithAggregatesFilter | string
    size?: IntWithAggregatesFilter | number
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name?: string | null
    role?: Roles | null
    confirmed?: boolean
    confirmKey?: string | null
    forgotKey?: string | null
    createConfirm?: Date | string | null
    createForgot?: Date | string | null
    updated_at?: Date | string
    created_at?: Date | string
    Category?: CategoryCreateNestedManyWithoutUserInput
    UserCategory?: UserCategoryCreateNestedManyWithoutUserInput
    Event?: EventCreateNestedManyWithoutUserInput
    Favorites?: FavoritesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: Roles | null
    confirmed?: boolean
    confirmKey?: string | null
    forgotKey?: string | null
    createConfirm?: Date | string | null
    createForgot?: Date | string | null
    updated_at?: Date | string
    created_at?: Date | string
    Category?: CategoryUncheckedCreateNestedManyWithoutUserInput
    UserCategory?: UserCategoryUncheckedCreateNestedManyWithoutUserInput
    Event?: EventUncheckedCreateNestedManyWithoutUserInput
    Favorites?: FavoritesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | Roles | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmKey?: NullableStringFieldUpdateOperationsInput | string | null
    forgotKey?: NullableStringFieldUpdateOperationsInput | string | null
    createConfirm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createForgot?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateManyWithoutUserInput
    UserCategory?: UserCategoryUpdateManyWithoutUserInput
    Event?: EventUpdateManyWithoutUserInput
    Favorites?: FavoritesUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | Roles | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmKey?: NullableStringFieldUpdateOperationsInput | string | null
    forgotKey?: NullableStringFieldUpdateOperationsInput | string | null
    createConfirm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createForgot?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUncheckedUpdateManyWithoutUserInput
    UserCategory?: UserCategoryUncheckedUpdateManyWithoutUserInput
    Event?: EventUncheckedUpdateManyWithoutUserInput
    Favorites?: FavoritesUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: Roles | null
    confirmed?: boolean
    confirmKey?: string | null
    forgotKey?: string | null
    createConfirm?: Date | string | null
    createForgot?: Date | string | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | Roles | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmKey?: NullableStringFieldUpdateOperationsInput | string | null
    forgotKey?: NullableStringFieldUpdateOperationsInput | string | null
    createConfirm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createForgot?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | Roles | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmKey?: NullableStringFieldUpdateOperationsInput | string | null
    forgotKey?: NullableStringFieldUpdateOperationsInput | string | null
    createConfirm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createForgot?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    updated_at?: Date | string
    created_at?: Date | string
    User?: UserCreateNestedOneWithoutCategoryInput
    Image: ImageCreateNestedOneWithoutCategoryInput
    UserCategory?: UserCategoryCreateNestedManyWithoutCategoryInput
    EventCategory?: EventCategoryCreateNestedManyWithoutCategoryInput
    Children?: CategoryCreateNestedManyWithoutParentInput
    Parent?: CategoryCreateNestedOneWithoutChildrenInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    adminId?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    parentId?: number | null
    UserCategory?: UserCategoryUncheckedCreateNestedManyWithoutCategoryInput
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutCategoryInput
    Children?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryUpdateInput = {
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutCategoryInput
    Image?: ImageUpdateOneRequiredWithoutCategoryInput
    UserCategory?: UserCategoryUpdateManyWithoutCategoryInput
    EventCategory?: EventCategoryUpdateManyWithoutCategoryInput
    Children?: CategoryUpdateManyWithoutParentInput
    Parent?: CategoryUpdateOneWithoutChildrenInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    UserCategory?: UserCategoryUncheckedUpdateManyWithoutCategoryInput
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutCategoryInput
    Children?: CategoryUncheckedUpdateManyWithoutParentInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    adminId?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    parentId?: number | null
  }

  export type CategoryUpdateManyMutationInput = {
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCategoryCreateInput = {
    active?: boolean
    updated_at?: Date | string
    created_at?: Date | string
    User: UserCreateNestedOneWithoutUserCategoryInput
    Category: CategoryCreateNestedOneWithoutUserCategoryInput
  }

  export type UserCategoryUncheckedCreateInput = {
    id?: number
    userId: number
    categoryId: number
    active?: boolean
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type UserCategoryUpdateInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUserCategoryInput
    Category?: CategoryUpdateOneRequiredWithoutUserCategoryInput
  }

  export type UserCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryCreateManyInput = {
    id?: number
    userId: number
    categoryId: number
    active?: boolean
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type UserCategoryUpdateManyMutationInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    updated_at?: Date | string
    created_at?: Date | string
    User?: UserCreateNestedOneWithoutEventInput
    Image: ImageCreateNestedOneWithoutEventInput
    Favorites?: FavoritesCreateNestedManyWithoutEventInput
    EventCategory?: EventCategoryCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    adminId?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    Favorites?: FavoritesUncheckedCreateNestedManyWithoutEventInput
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutEventInput
    Image?: ImageUpdateOneRequiredWithoutEventInput
    Favorites?: FavoritesUpdateManyWithoutEventInput
    EventCategory?: EventCategoryUpdateManyWithoutEventInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorites?: FavoritesUncheckedUpdateManyWithoutEventInput
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutEventInput
  }

  export type EventCreateManyInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    adminId?: number | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryCreateInput = {
    updated_at?: Date | string
    created_at?: Date | string
    Category: CategoryCreateNestedOneWithoutEventCategoryInput
    Event: EventCreateNestedOneWithoutEventCategoryInput
  }

  export type EventCategoryUncheckedCreateInput = {
    id?: number
    categoryId: number
    eventId: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type EventCategoryUpdateInput = {
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneRequiredWithoutEventCategoryInput
    Event?: EventUpdateOneRequiredWithoutEventCategoryInput
  }

  export type EventCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryCreateManyInput = {
    id?: number
    categoryId: number
    eventId: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type EventCategoryUpdateManyMutationInput = {
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritesCreateInput = {
    updated_at?: Date | string
    created_at?: Date | string
    User: UserCreateNestedOneWithoutFavoritesInput
    Event: EventCreateNestedOneWithoutFavoritesInput
  }

  export type FavoritesUncheckedCreateInput = {
    id?: number
    userId: number
    eventId: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type FavoritesUpdateInput = {
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutFavoritesInput
    Event?: EventUpdateOneRequiredWithoutFavoritesInput
  }

  export type FavoritesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritesCreateManyInput = {
    id?: number
    userId: number
    eventId: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type FavoritesUpdateManyMutationInput = {
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    destination: string
    origin: ImagOrigin
    filename: string
    path: string
    size: number
    updated_at?: Date | string
    created_at?: Date | string
    Category?: CategoryCreateNestedManyWithoutImageInput
    Event?: EventCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    destination: string
    origin: ImagOrigin
    filename: string
    path: string
    size: number
    updated_at?: Date | string
    created_at?: Date | string
    Category?: CategoryUncheckedCreateNestedManyWithoutImageInput
    Event?: EventUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    fieldname?: StringFieldUpdateOperationsInput | string
    originalname?: StringFieldUpdateOperationsInput | string
    encoding?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    origin?: EnumImagOriginFieldUpdateOperationsInput | ImagOrigin
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateManyWithoutImageInput
    Event?: EventUpdateManyWithoutImageInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fieldname?: StringFieldUpdateOperationsInput | string
    originalname?: StringFieldUpdateOperationsInput | string
    encoding?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    origin?: EnumImagOriginFieldUpdateOperationsInput | ImagOrigin
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUncheckedUpdateManyWithoutImageInput
    Event?: EventUncheckedUpdateManyWithoutImageInput
  }

  export type ImageCreateManyInput = {
    id?: number
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    destination: string
    origin: ImagOrigin
    filename: string
    path: string
    size: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    fieldname?: StringFieldUpdateOperationsInput | string
    originalname?: StringFieldUpdateOperationsInput | string
    encoding?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    origin?: EnumImagOriginFieldUpdateOperationsInput | ImagOrigin
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fieldname?: StringFieldUpdateOperationsInput | string
    originalname?: StringFieldUpdateOperationsInput | string
    encoding?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    origin?: EnumImagOriginFieldUpdateOperationsInput | ImagOrigin
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type EnumRolesNullableFilter = {
    equals?: Roles | null
    in?: Enumerable<Roles> | null
    notIn?: Enumerable<Roles> | null
    not?: NestedEnumRolesNullableFilter | Roles | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type UserCategoryListRelationFilter = {
    every?: UserCategoryWhereInput
    some?: UserCategoryWhereInput
    none?: UserCategoryWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type FavoritesListRelationFilter = {
    every?: FavoritesWhereInput
    some?: FavoritesWhereInput
    none?: FavoritesWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoritesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    confirmed?: SortOrder
    confirmKey?: SortOrder
    forgotKey?: SortOrder
    createConfirm?: SortOrder
    createForgot?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    confirmed?: SortOrder
    confirmKey?: SortOrder
    forgotKey?: SortOrder
    createConfirm?: SortOrder
    createForgot?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    confirmed?: SortOrder
    confirmKey?: SortOrder
    forgotKey?: SortOrder
    createConfirm?: SortOrder
    createForgot?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumRolesNullableWithAggregatesFilter = {
    equals?: Roles | null
    in?: Enumerable<Roles> | null
    notIn?: Enumerable<Roles> | null
    not?: NestedEnumRolesNullableWithAggregatesFilter | Roles | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumRolesNullableFilter
    _max?: NestedEnumRolesNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ImageRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type EventCategoryListRelationFilter = {
    every?: EventCategoryWhereInput
    some?: EventCategoryWhereInput
    none?: EventCategoryWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type EventCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    titleRu?: SortOrder
    titleUk?: SortOrder
    titleEn?: SortOrder
    descriptionRu?: SortOrder
    descriptionUk?: SortOrder
    descriptionEn?: SortOrder
    image?: SortOrder
    adminId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    parentId?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    titleRu?: SortOrder
    titleUk?: SortOrder
    titleEn?: SortOrder
    descriptionRu?: SortOrder
    descriptionUk?: SortOrder
    descriptionEn?: SortOrder
    image?: SortOrder
    adminId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    parentId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    titleRu?: SortOrder
    titleUk?: SortOrder
    titleEn?: SortOrder
    descriptionRu?: SortOrder
    descriptionUk?: SortOrder
    descriptionEn?: SortOrder
    image?: SortOrder
    adminId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    parentId?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    adminId?: SortOrder
    parentId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type UserCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    active?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type UserCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type UserCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    active?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type UserCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    active?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type UserCategorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    titleRu?: SortOrder
    titleUk?: SortOrder
    titleEn?: SortOrder
    descriptionRu?: SortOrder
    descriptionUk?: SortOrder
    descriptionEn?: SortOrder
    image?: SortOrder
    adminId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    adminId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    titleRu?: SortOrder
    titleUk?: SortOrder
    titleEn?: SortOrder
    descriptionRu?: SortOrder
    descriptionUk?: SortOrder
    descriptionEn?: SortOrder
    image?: SortOrder
    adminId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    titleRu?: SortOrder
    titleUk?: SortOrder
    titleEn?: SortOrder
    descriptionRu?: SortOrder
    descriptionUk?: SortOrder
    descriptionEn?: SortOrder
    image?: SortOrder
    adminId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    adminId?: SortOrder
  }

  export type EventRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    eventId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type EventCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    eventId?: SortOrder
  }

  export type EventCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    eventId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type EventCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    eventId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type EventCategorySumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    eventId?: SortOrder
  }

  export type FavoritesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type FavoritesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type FavoritesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type FavoritesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type FavoritesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type EnumImagOriginFilter = {
    equals?: ImagOrigin
    in?: Enumerable<ImagOrigin>
    notIn?: Enumerable<ImagOrigin>
    not?: NestedEnumImagOriginFilter | ImagOrigin
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    fieldname?: SortOrder
    originalname?: SortOrder
    encoding?: SortOrder
    mimetype?: SortOrder
    destination?: SortOrder
    origin?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    size?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    fieldname?: SortOrder
    originalname?: SortOrder
    encoding?: SortOrder
    mimetype?: SortOrder
    destination?: SortOrder
    origin?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    size?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    fieldname?: SortOrder
    originalname?: SortOrder
    encoding?: SortOrder
    mimetype?: SortOrder
    destination?: SortOrder
    origin?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    size?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type EnumImagOriginWithAggregatesFilter = {
    equals?: ImagOrigin
    in?: Enumerable<ImagOrigin>
    notIn?: Enumerable<ImagOrigin>
    not?: NestedEnumImagOriginWithAggregatesFilter | ImagOrigin
    _count?: NestedIntFilter
    _min?: NestedEnumImagOriginFilter
    _max?: NestedEnumImagOriginFilter
  }

  export type CategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutUserInput>, Enumerable<CategoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutUserInput>
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type UserCategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserCategoryCreateWithoutUserInput>, Enumerable<UserCategoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserCategoryCreateOrConnectWithoutUserInput>
    createMany?: UserCategoryCreateManyUserInputEnvelope
    connect?: Enumerable<UserCategoryWhereUniqueInput>
  }

  export type EventCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EventCreateWithoutUserInput>, Enumerable<EventUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutUserInput>
    createMany?: EventCreateManyUserInputEnvelope
    connect?: Enumerable<EventWhereUniqueInput>
  }

  export type FavoritesCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FavoritesCreateWithoutUserInput>, Enumerable<FavoritesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoritesCreateOrConnectWithoutUserInput>
    createMany?: FavoritesCreateManyUserInputEnvelope
    connect?: Enumerable<FavoritesWhereUniqueInput>
  }

  export type CategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutUserInput>, Enumerable<CategoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutUserInput>
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type UserCategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserCategoryCreateWithoutUserInput>, Enumerable<UserCategoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserCategoryCreateOrConnectWithoutUserInput>
    createMany?: UserCategoryCreateManyUserInputEnvelope
    connect?: Enumerable<UserCategoryWhereUniqueInput>
  }

  export type EventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EventCreateWithoutUserInput>, Enumerable<EventUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutUserInput>
    createMany?: EventCreateManyUserInputEnvelope
    connect?: Enumerable<EventWhereUniqueInput>
  }

  export type FavoritesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FavoritesCreateWithoutUserInput>, Enumerable<FavoritesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoritesCreateOrConnectWithoutUserInput>
    createMany?: FavoritesCreateManyUserInputEnvelope
    connect?: Enumerable<FavoritesWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumRolesFieldUpdateOperationsInput = {
    set?: Roles | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutUserInput>, Enumerable<CategoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type UserCategoryUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<UserCategoryCreateWithoutUserInput>, Enumerable<UserCategoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserCategoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserCategoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserCategoryCreateManyUserInputEnvelope
    set?: Enumerable<UserCategoryWhereUniqueInput>
    disconnect?: Enumerable<UserCategoryWhereUniqueInput>
    delete?: Enumerable<UserCategoryWhereUniqueInput>
    connect?: Enumerable<UserCategoryWhereUniqueInput>
    update?: Enumerable<UserCategoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserCategoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserCategoryScalarWhereInput>
  }

  export type EventUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<EventCreateWithoutUserInput>, Enumerable<EventUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EventCreateManyUserInputEnvelope
    set?: Enumerable<EventWhereUniqueInput>
    disconnect?: Enumerable<EventWhereUniqueInput>
    delete?: Enumerable<EventWhereUniqueInput>
    connect?: Enumerable<EventWhereUniqueInput>
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EventScalarWhereInput>
  }

  export type FavoritesUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<FavoritesCreateWithoutUserInput>, Enumerable<FavoritesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoritesCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FavoritesUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FavoritesCreateManyUserInputEnvelope
    set?: Enumerable<FavoritesWhereUniqueInput>
    disconnect?: Enumerable<FavoritesWhereUniqueInput>
    delete?: Enumerable<FavoritesWhereUniqueInput>
    connect?: Enumerable<FavoritesWhereUniqueInput>
    update?: Enumerable<FavoritesUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FavoritesUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FavoritesScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutUserInput>, Enumerable<CategoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type UserCategoryUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<UserCategoryCreateWithoutUserInput>, Enumerable<UserCategoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserCategoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserCategoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserCategoryCreateManyUserInputEnvelope
    set?: Enumerable<UserCategoryWhereUniqueInput>
    disconnect?: Enumerable<UserCategoryWhereUniqueInput>
    delete?: Enumerable<UserCategoryWhereUniqueInput>
    connect?: Enumerable<UserCategoryWhereUniqueInput>
    update?: Enumerable<UserCategoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserCategoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserCategoryScalarWhereInput>
  }

  export type EventUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<EventCreateWithoutUserInput>, Enumerable<EventUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EventCreateManyUserInputEnvelope
    set?: Enumerable<EventWhereUniqueInput>
    disconnect?: Enumerable<EventWhereUniqueInput>
    delete?: Enumerable<EventWhereUniqueInput>
    connect?: Enumerable<EventWhereUniqueInput>
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EventScalarWhereInput>
  }

  export type FavoritesUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<FavoritesCreateWithoutUserInput>, Enumerable<FavoritesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoritesCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FavoritesUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FavoritesCreateManyUserInputEnvelope
    set?: Enumerable<FavoritesWhereUniqueInput>
    disconnect?: Enumerable<FavoritesWhereUniqueInput>
    delete?: Enumerable<FavoritesWhereUniqueInput>
    connect?: Enumerable<FavoritesWhereUniqueInput>
    update?: Enumerable<FavoritesUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FavoritesUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FavoritesScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutCategoryInput = {
    create?: XOR<UserCreateWithoutCategoryInput, UserUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoryInput
    connect?: UserWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutCategoryInput = {
    create?: XOR<ImageCreateWithoutCategoryInput, ImageUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: ImageCreateOrConnectWithoutCategoryInput
    connect?: ImageWhereUniqueInput
  }

  export type UserCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<UserCategoryCreateWithoutCategoryInput>, Enumerable<UserCategoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<UserCategoryCreateOrConnectWithoutCategoryInput>
    createMany?: UserCategoryCreateManyCategoryInputEnvelope
    connect?: Enumerable<UserCategoryWhereUniqueInput>
  }

  export type EventCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<EventCategoryCreateWithoutCategoryInput>, Enumerable<EventCategoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<EventCategoryCreateOrConnectWithoutCategoryInput>
    createMany?: EventCategoryCreateManyCategoryInputEnvelope
    connect?: Enumerable<EventCategoryWhereUniqueInput>
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutParentInput>, Enumerable<CategoryUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutParentInput>
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type CategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<UserCategoryCreateWithoutCategoryInput>, Enumerable<UserCategoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<UserCategoryCreateOrConnectWithoutCategoryInput>
    createMany?: UserCategoryCreateManyCategoryInputEnvelope
    connect?: Enumerable<UserCategoryWhereUniqueInput>
  }

  export type EventCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<EventCategoryCreateWithoutCategoryInput>, Enumerable<EventCategoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<EventCategoryCreateOrConnectWithoutCategoryInput>
    createMany?: EventCategoryCreateManyCategoryInputEnvelope
    connect?: Enumerable<EventCategoryWhereUniqueInput>
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutParentInput>, Enumerable<CategoryUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutParentInput>
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type UserUpdateOneWithoutCategoryInput = {
    create?: XOR<UserCreateWithoutCategoryInput, UserUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoryInput
    upsert?: UserUpsertWithoutCategoryInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCategoryInput, UserUncheckedUpdateWithoutCategoryInput>
  }

  export type ImageUpdateOneRequiredWithoutCategoryInput = {
    create?: XOR<ImageCreateWithoutCategoryInput, ImageUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: ImageCreateOrConnectWithoutCategoryInput
    upsert?: ImageUpsertWithoutCategoryInput
    connect?: ImageWhereUniqueInput
    update?: XOR<ImageUpdateWithoutCategoryInput, ImageUncheckedUpdateWithoutCategoryInput>
  }

  export type UserCategoryUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<UserCategoryCreateWithoutCategoryInput>, Enumerable<UserCategoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<UserCategoryCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<UserCategoryUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: UserCategoryCreateManyCategoryInputEnvelope
    set?: Enumerable<UserCategoryWhereUniqueInput>
    disconnect?: Enumerable<UserCategoryWhereUniqueInput>
    delete?: Enumerable<UserCategoryWhereUniqueInput>
    connect?: Enumerable<UserCategoryWhereUniqueInput>
    update?: Enumerable<UserCategoryUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<UserCategoryUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<UserCategoryScalarWhereInput>
  }

  export type EventCategoryUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<EventCategoryCreateWithoutCategoryInput>, Enumerable<EventCategoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<EventCategoryCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<EventCategoryUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: EventCategoryCreateManyCategoryInputEnvelope
    set?: Enumerable<EventCategoryWhereUniqueInput>
    disconnect?: Enumerable<EventCategoryWhereUniqueInput>
    delete?: Enumerable<EventCategoryWhereUniqueInput>
    connect?: Enumerable<EventCategoryWhereUniqueInput>
    update?: Enumerable<EventCategoryUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<EventCategoryUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<EventCategoryScalarWhereInput>
  }

  export type CategoryUpdateManyWithoutParentInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutParentInput>, Enumerable<CategoryUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutParentInput>
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type CategoryUpdateOneWithoutChildrenInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    upsert?: CategoryUpsertWithoutChildrenInput
    disconnect?: boolean
    delete?: boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCategoryUncheckedUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<UserCategoryCreateWithoutCategoryInput>, Enumerable<UserCategoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<UserCategoryCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<UserCategoryUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: UserCategoryCreateManyCategoryInputEnvelope
    set?: Enumerable<UserCategoryWhereUniqueInput>
    disconnect?: Enumerable<UserCategoryWhereUniqueInput>
    delete?: Enumerable<UserCategoryWhereUniqueInput>
    connect?: Enumerable<UserCategoryWhereUniqueInput>
    update?: Enumerable<UserCategoryUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<UserCategoryUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<UserCategoryScalarWhereInput>
  }

  export type EventCategoryUncheckedUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<EventCategoryCreateWithoutCategoryInput>, Enumerable<EventCategoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<EventCategoryCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<EventCategoryUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: EventCategoryCreateManyCategoryInputEnvelope
    set?: Enumerable<EventCategoryWhereUniqueInput>
    disconnect?: Enumerable<EventCategoryWhereUniqueInput>
    delete?: Enumerable<EventCategoryWhereUniqueInput>
    connect?: Enumerable<EventCategoryWhereUniqueInput>
    update?: Enumerable<EventCategoryUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<EventCategoryUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<EventCategoryScalarWhereInput>
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutParentInput>, Enumerable<CategoryUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutParentInput>
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutUserCategoryInput = {
    create?: XOR<UserCreateWithoutUserCategoryInput, UserUncheckedCreateWithoutUserCategoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCategoryInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutUserCategoryInput = {
    create?: XOR<CategoryCreateWithoutUserCategoryInput, CategoryUncheckedCreateWithoutUserCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutUserCategoryInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserCategoryInput = {
    create?: XOR<UserCreateWithoutUserCategoryInput, UserUncheckedCreateWithoutUserCategoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCategoryInput
    upsert?: UserUpsertWithoutUserCategoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserCategoryInput, UserUncheckedUpdateWithoutUserCategoryInput>
  }

  export type CategoryUpdateOneRequiredWithoutUserCategoryInput = {
    create?: XOR<CategoryCreateWithoutUserCategoryInput, CategoryUncheckedCreateWithoutUserCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutUserCategoryInput
    upsert?: CategoryUpsertWithoutUserCategoryInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutUserCategoryInput, CategoryUncheckedUpdateWithoutUserCategoryInput>
  }

  export type UserCreateNestedOneWithoutEventInput = {
    create?: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventInput
    connect?: UserWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutEventInput = {
    create?: XOR<ImageCreateWithoutEventInput, ImageUncheckedCreateWithoutEventInput>
    connectOrCreate?: ImageCreateOrConnectWithoutEventInput
    connect?: ImageWhereUniqueInput
  }

  export type FavoritesCreateNestedManyWithoutEventInput = {
    create?: XOR<Enumerable<FavoritesCreateWithoutEventInput>, Enumerable<FavoritesUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<FavoritesCreateOrConnectWithoutEventInput>
    createMany?: FavoritesCreateManyEventInputEnvelope
    connect?: Enumerable<FavoritesWhereUniqueInput>
  }

  export type EventCategoryCreateNestedManyWithoutEventInput = {
    create?: XOR<Enumerable<EventCategoryCreateWithoutEventInput>, Enumerable<EventCategoryUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<EventCategoryCreateOrConnectWithoutEventInput>
    createMany?: EventCategoryCreateManyEventInputEnvelope
    connect?: Enumerable<EventCategoryWhereUniqueInput>
  }

  export type FavoritesUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<Enumerable<FavoritesCreateWithoutEventInput>, Enumerable<FavoritesUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<FavoritesCreateOrConnectWithoutEventInput>
    createMany?: FavoritesCreateManyEventInputEnvelope
    connect?: Enumerable<FavoritesWhereUniqueInput>
  }

  export type EventCategoryUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<Enumerable<EventCategoryCreateWithoutEventInput>, Enumerable<EventCategoryUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<EventCategoryCreateOrConnectWithoutEventInput>
    createMany?: EventCategoryCreateManyEventInputEnvelope
    connect?: Enumerable<EventCategoryWhereUniqueInput>
  }

  export type UserUpdateOneWithoutEventInput = {
    create?: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventInput
    upsert?: UserUpsertWithoutEventInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutEventInput, UserUncheckedUpdateWithoutEventInput>
  }

  export type ImageUpdateOneRequiredWithoutEventInput = {
    create?: XOR<ImageCreateWithoutEventInput, ImageUncheckedCreateWithoutEventInput>
    connectOrCreate?: ImageCreateOrConnectWithoutEventInput
    upsert?: ImageUpsertWithoutEventInput
    connect?: ImageWhereUniqueInput
    update?: XOR<ImageUpdateWithoutEventInput, ImageUncheckedUpdateWithoutEventInput>
  }

  export type FavoritesUpdateManyWithoutEventInput = {
    create?: XOR<Enumerable<FavoritesCreateWithoutEventInput>, Enumerable<FavoritesUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<FavoritesCreateOrConnectWithoutEventInput>
    upsert?: Enumerable<FavoritesUpsertWithWhereUniqueWithoutEventInput>
    createMany?: FavoritesCreateManyEventInputEnvelope
    set?: Enumerable<FavoritesWhereUniqueInput>
    disconnect?: Enumerable<FavoritesWhereUniqueInput>
    delete?: Enumerable<FavoritesWhereUniqueInput>
    connect?: Enumerable<FavoritesWhereUniqueInput>
    update?: Enumerable<FavoritesUpdateWithWhereUniqueWithoutEventInput>
    updateMany?: Enumerable<FavoritesUpdateManyWithWhereWithoutEventInput>
    deleteMany?: Enumerable<FavoritesScalarWhereInput>
  }

  export type EventCategoryUpdateManyWithoutEventInput = {
    create?: XOR<Enumerable<EventCategoryCreateWithoutEventInput>, Enumerable<EventCategoryUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<EventCategoryCreateOrConnectWithoutEventInput>
    upsert?: Enumerable<EventCategoryUpsertWithWhereUniqueWithoutEventInput>
    createMany?: EventCategoryCreateManyEventInputEnvelope
    set?: Enumerable<EventCategoryWhereUniqueInput>
    disconnect?: Enumerable<EventCategoryWhereUniqueInput>
    delete?: Enumerable<EventCategoryWhereUniqueInput>
    connect?: Enumerable<EventCategoryWhereUniqueInput>
    update?: Enumerable<EventCategoryUpdateWithWhereUniqueWithoutEventInput>
    updateMany?: Enumerable<EventCategoryUpdateManyWithWhereWithoutEventInput>
    deleteMany?: Enumerable<EventCategoryScalarWhereInput>
  }

  export type FavoritesUncheckedUpdateManyWithoutEventInput = {
    create?: XOR<Enumerable<FavoritesCreateWithoutEventInput>, Enumerable<FavoritesUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<FavoritesCreateOrConnectWithoutEventInput>
    upsert?: Enumerable<FavoritesUpsertWithWhereUniqueWithoutEventInput>
    createMany?: FavoritesCreateManyEventInputEnvelope
    set?: Enumerable<FavoritesWhereUniqueInput>
    disconnect?: Enumerable<FavoritesWhereUniqueInput>
    delete?: Enumerable<FavoritesWhereUniqueInput>
    connect?: Enumerable<FavoritesWhereUniqueInput>
    update?: Enumerable<FavoritesUpdateWithWhereUniqueWithoutEventInput>
    updateMany?: Enumerable<FavoritesUpdateManyWithWhereWithoutEventInput>
    deleteMany?: Enumerable<FavoritesScalarWhereInput>
  }

  export type EventCategoryUncheckedUpdateManyWithoutEventInput = {
    create?: XOR<Enumerable<EventCategoryCreateWithoutEventInput>, Enumerable<EventCategoryUncheckedCreateWithoutEventInput>>
    connectOrCreate?: Enumerable<EventCategoryCreateOrConnectWithoutEventInput>
    upsert?: Enumerable<EventCategoryUpsertWithWhereUniqueWithoutEventInput>
    createMany?: EventCategoryCreateManyEventInputEnvelope
    set?: Enumerable<EventCategoryWhereUniqueInput>
    disconnect?: Enumerable<EventCategoryWhereUniqueInput>
    delete?: Enumerable<EventCategoryWhereUniqueInput>
    connect?: Enumerable<EventCategoryWhereUniqueInput>
    update?: Enumerable<EventCategoryUpdateWithWhereUniqueWithoutEventInput>
    updateMany?: Enumerable<EventCategoryUpdateManyWithWhereWithoutEventInput>
    deleteMany?: Enumerable<EventCategoryScalarWhereInput>
  }

  export type CategoryCreateNestedOneWithoutEventCategoryInput = {
    create?: XOR<CategoryCreateWithoutEventCategoryInput, CategoryUncheckedCreateWithoutEventCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutEventCategoryInput
    connect?: CategoryWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutEventCategoryInput = {
    create?: XOR<EventCreateWithoutEventCategoryInput, EventUncheckedCreateWithoutEventCategoryInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventCategoryInput
    connect?: EventWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutEventCategoryInput = {
    create?: XOR<CategoryCreateWithoutEventCategoryInput, CategoryUncheckedCreateWithoutEventCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutEventCategoryInput
    upsert?: CategoryUpsertWithoutEventCategoryInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutEventCategoryInput, CategoryUncheckedUpdateWithoutEventCategoryInput>
  }

  export type EventUpdateOneRequiredWithoutEventCategoryInput = {
    create?: XOR<EventCreateWithoutEventCategoryInput, EventUncheckedCreateWithoutEventCategoryInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventCategoryInput
    upsert?: EventUpsertWithoutEventCategoryInput
    connect?: EventWhereUniqueInput
    update?: XOR<EventUpdateWithoutEventCategoryInput, EventUncheckedUpdateWithoutEventCategoryInput>
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<EventCreateWithoutFavoritesInput, EventUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: EventCreateOrConnectWithoutFavoritesInput
    connect?: EventWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type EventUpdateOneRequiredWithoutFavoritesInput = {
    create?: XOR<EventCreateWithoutFavoritesInput, EventUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: EventCreateOrConnectWithoutFavoritesInput
    upsert?: EventUpsertWithoutFavoritesInput
    connect?: EventWhereUniqueInput
    update?: XOR<EventUpdateWithoutFavoritesInput, EventUncheckedUpdateWithoutFavoritesInput>
  }

  export type CategoryCreateNestedManyWithoutImageInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutImageInput>, Enumerable<CategoryUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutImageInput>
    createMany?: CategoryCreateManyImageInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type EventCreateNestedManyWithoutImageInput = {
    create?: XOR<Enumerable<EventCreateWithoutImageInput>, Enumerable<EventUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutImageInput>
    createMany?: EventCreateManyImageInputEnvelope
    connect?: Enumerable<EventWhereUniqueInput>
  }

  export type CategoryUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutImageInput>, Enumerable<CategoryUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutImageInput>
    createMany?: CategoryCreateManyImageInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type EventUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<Enumerable<EventCreateWithoutImageInput>, Enumerable<EventUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutImageInput>
    createMany?: EventCreateManyImageInputEnvelope
    connect?: Enumerable<EventWhereUniqueInput>
  }

  export type EnumImagOriginFieldUpdateOperationsInput = {
    set?: ImagOrigin
  }

  export type CategoryUpdateManyWithoutImageInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutImageInput>, Enumerable<CategoryUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutImageInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutImageInput>
    createMany?: CategoryCreateManyImageInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutImageInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutImageInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type EventUpdateManyWithoutImageInput = {
    create?: XOR<Enumerable<EventCreateWithoutImageInput>, Enumerable<EventUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutImageInput>
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutImageInput>
    createMany?: EventCreateManyImageInputEnvelope
    set?: Enumerable<EventWhereUniqueInput>
    disconnect?: Enumerable<EventWhereUniqueInput>
    delete?: Enumerable<EventWhereUniqueInput>
    connect?: Enumerable<EventWhereUniqueInput>
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutImageInput>
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutImageInput>
    deleteMany?: Enumerable<EventScalarWhereInput>
  }

  export type CategoryUncheckedUpdateManyWithoutImageInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutImageInput>, Enumerable<CategoryUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutImageInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutImageInput>
    createMany?: CategoryCreateManyImageInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutImageInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutImageInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type EventUncheckedUpdateManyWithoutImageInput = {
    create?: XOR<Enumerable<EventCreateWithoutImageInput>, Enumerable<EventUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutImageInput>
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutImageInput>
    createMany?: EventCreateManyImageInputEnvelope
    set?: Enumerable<EventWhereUniqueInput>
    disconnect?: Enumerable<EventWhereUniqueInput>
    delete?: Enumerable<EventWhereUniqueInput>
    connect?: Enumerable<EventWhereUniqueInput>
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutImageInput>
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutImageInput>
    deleteMany?: Enumerable<EventScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumRolesNullableFilter = {
    equals?: Roles | null
    in?: Enumerable<Roles> | null
    notIn?: Enumerable<Roles> | null
    not?: NestedEnumRolesNullableFilter | Roles | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumRolesNullableWithAggregatesFilter = {
    equals?: Roles | null
    in?: Enumerable<Roles> | null
    notIn?: Enumerable<Roles> | null
    not?: NestedEnumRolesNullableWithAggregatesFilter | Roles | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumRolesNullableFilter
    _max?: NestedEnumRolesNullableFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedEnumImagOriginFilter = {
    equals?: ImagOrigin
    in?: Enumerable<ImagOrigin>
    notIn?: Enumerable<ImagOrigin>
    not?: NestedEnumImagOriginFilter | ImagOrigin
  }

  export type NestedEnumImagOriginWithAggregatesFilter = {
    equals?: ImagOrigin
    in?: Enumerable<ImagOrigin>
    notIn?: Enumerable<ImagOrigin>
    not?: NestedEnumImagOriginWithAggregatesFilter | ImagOrigin
    _count?: NestedIntFilter
    _min?: NestedEnumImagOriginFilter
    _max?: NestedEnumImagOriginFilter
  }

  export type CategoryCreateWithoutUserInput = {
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    updated_at?: Date | string
    created_at?: Date | string
    Image: ImageCreateNestedOneWithoutCategoryInput
    UserCategory?: UserCategoryCreateNestedManyWithoutCategoryInput
    EventCategory?: EventCategoryCreateNestedManyWithoutCategoryInput
    Children?: CategoryCreateNestedManyWithoutParentInput
    Parent?: CategoryCreateNestedOneWithoutChildrenInput
  }

  export type CategoryUncheckedCreateWithoutUserInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    updated_at?: Date | string
    created_at?: Date | string
    parentId?: number | null
    UserCategory?: UserCategoryUncheckedCreateNestedManyWithoutCategoryInput
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutCategoryInput
    Children?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryCreateManyUserInputEnvelope = {
    data: Enumerable<CategoryCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserCategoryCreateWithoutUserInput = {
    active?: boolean
    updated_at?: Date | string
    created_at?: Date | string
    Category: CategoryCreateNestedOneWithoutUserCategoryInput
  }

  export type UserCategoryUncheckedCreateWithoutUserInput = {
    id?: number
    categoryId: number
    active?: boolean
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type UserCategoryCreateOrConnectWithoutUserInput = {
    where: UserCategoryWhereUniqueInput
    create: XOR<UserCategoryCreateWithoutUserInput, UserCategoryUncheckedCreateWithoutUserInput>
  }

  export type UserCategoryCreateManyUserInputEnvelope = {
    data: Enumerable<UserCategoryCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutUserInput = {
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    updated_at?: Date | string
    created_at?: Date | string
    Image: ImageCreateNestedOneWithoutEventInput
    Favorites?: FavoritesCreateNestedManyWithoutEventInput
    EventCategory?: EventCategoryCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutUserInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    updated_at?: Date | string
    created_at?: Date | string
    Favorites?: FavoritesUncheckedCreateNestedManyWithoutEventInput
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutUserInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventCreateManyUserInputEnvelope = {
    data: Enumerable<EventCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type FavoritesCreateWithoutUserInput = {
    updated_at?: Date | string
    created_at?: Date | string
    Event: EventCreateNestedOneWithoutFavoritesInput
  }

  export type FavoritesUncheckedCreateWithoutUserInput = {
    id?: number
    eventId: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type FavoritesCreateOrConnectWithoutUserInput = {
    where: FavoritesWhereUniqueInput
    create: XOR<FavoritesCreateWithoutUserInput, FavoritesUncheckedCreateWithoutUserInput>
  }

  export type FavoritesCreateManyUserInputEnvelope = {
    data: Enumerable<FavoritesCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
  }

  export type CategoryUpdateManyWithWhereWithoutUserInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: Enumerable<CategoryScalarWhereInput>
    OR?: Enumerable<CategoryScalarWhereInput>
    NOT?: Enumerable<CategoryScalarWhereInput>
    id?: IntFilter | number
    titleRu?: StringFilter | string
    titleUk?: StringFilter | string
    titleEn?: StringFilter | string
    descriptionRu?: StringFilter | string
    descriptionUk?: StringFilter | string
    descriptionEn?: StringFilter | string
    image?: IntFilter | number
    adminId?: IntNullableFilter | number | null
    updated_at?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
    parentId?: IntNullableFilter | number | null
  }

  export type UserCategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCategoryWhereUniqueInput
    update: XOR<UserCategoryUpdateWithoutUserInput, UserCategoryUncheckedUpdateWithoutUserInput>
    create: XOR<UserCategoryCreateWithoutUserInput, UserCategoryUncheckedCreateWithoutUserInput>
  }

  export type UserCategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCategoryWhereUniqueInput
    data: XOR<UserCategoryUpdateWithoutUserInput, UserCategoryUncheckedUpdateWithoutUserInput>
  }

  export type UserCategoryUpdateManyWithWhereWithoutUserInput = {
    where: UserCategoryScalarWhereInput
    data: XOR<UserCategoryUpdateManyMutationInput, UserCategoryUncheckedUpdateManyWithoutUserCategoryInput>
  }

  export type UserCategoryScalarWhereInput = {
    AND?: Enumerable<UserCategoryScalarWhereInput>
    OR?: Enumerable<UserCategoryScalarWhereInput>
    NOT?: Enumerable<UserCategoryScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    categoryId?: IntFilter | number
    active?: BoolFilter | boolean
    updated_at?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventUpdateWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
  }

  export type EventUpdateManyWithWhereWithoutUserInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutEventInput>
  }

  export type EventScalarWhereInput = {
    AND?: Enumerable<EventScalarWhereInput>
    OR?: Enumerable<EventScalarWhereInput>
    NOT?: Enumerable<EventScalarWhereInput>
    id?: IntFilter | number
    titleRu?: StringFilter | string
    titleUk?: StringFilter | string
    titleEn?: StringFilter | string
    descriptionRu?: StringFilter | string
    descriptionUk?: StringFilter | string
    descriptionEn?: StringFilter | string
    image?: IntFilter | number
    adminId?: IntNullableFilter | number | null
    updated_at?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
  }

  export type FavoritesUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoritesWhereUniqueInput
    update: XOR<FavoritesUpdateWithoutUserInput, FavoritesUncheckedUpdateWithoutUserInput>
    create: XOR<FavoritesCreateWithoutUserInput, FavoritesUncheckedCreateWithoutUserInput>
  }

  export type FavoritesUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoritesWhereUniqueInput
    data: XOR<FavoritesUpdateWithoutUserInput, FavoritesUncheckedUpdateWithoutUserInput>
  }

  export type FavoritesUpdateManyWithWhereWithoutUserInput = {
    where: FavoritesScalarWhereInput
    data: XOR<FavoritesUpdateManyMutationInput, FavoritesUncheckedUpdateManyWithoutFavoritesInput>
  }

  export type FavoritesScalarWhereInput = {
    AND?: Enumerable<FavoritesScalarWhereInput>
    OR?: Enumerable<FavoritesScalarWhereInput>
    NOT?: Enumerable<FavoritesScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    eventId?: IntFilter | number
    updated_at?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutCategoryInput = {
    email: string
    password: string
    name?: string | null
    role?: Roles | null
    confirmed?: boolean
    confirmKey?: string | null
    forgotKey?: string | null
    createConfirm?: Date | string | null
    createForgot?: Date | string | null
    updated_at?: Date | string
    created_at?: Date | string
    UserCategory?: UserCategoryCreateNestedManyWithoutUserInput
    Event?: EventCreateNestedManyWithoutUserInput
    Favorites?: FavoritesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoryInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: Roles | null
    confirmed?: boolean
    confirmKey?: string | null
    forgotKey?: string | null
    createConfirm?: Date | string | null
    createForgot?: Date | string | null
    updated_at?: Date | string
    created_at?: Date | string
    UserCategory?: UserCategoryUncheckedCreateNestedManyWithoutUserInput
    Event?: EventUncheckedCreateNestedManyWithoutUserInput
    Favorites?: FavoritesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoryInput, UserUncheckedCreateWithoutCategoryInput>
  }

  export type ImageCreateWithoutCategoryInput = {
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    destination: string
    origin: ImagOrigin
    filename: string
    path: string
    size: number
    updated_at?: Date | string
    created_at?: Date | string
    Event?: EventCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutCategoryInput = {
    id?: number
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    destination: string
    origin: ImagOrigin
    filename: string
    path: string
    size: number
    updated_at?: Date | string
    created_at?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutCategoryInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutCategoryInput, ImageUncheckedCreateWithoutCategoryInput>
  }

  export type UserCategoryCreateWithoutCategoryInput = {
    active?: boolean
    updated_at?: Date | string
    created_at?: Date | string
    User: UserCreateNestedOneWithoutUserCategoryInput
  }

  export type UserCategoryUncheckedCreateWithoutCategoryInput = {
    id?: number
    userId: number
    active?: boolean
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type UserCategoryCreateOrConnectWithoutCategoryInput = {
    where: UserCategoryWhereUniqueInput
    create: XOR<UserCategoryCreateWithoutCategoryInput, UserCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type UserCategoryCreateManyCategoryInputEnvelope = {
    data: Enumerable<UserCategoryCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type EventCategoryCreateWithoutCategoryInput = {
    updated_at?: Date | string
    created_at?: Date | string
    Event: EventCreateNestedOneWithoutEventCategoryInput
  }

  export type EventCategoryUncheckedCreateWithoutCategoryInput = {
    id?: number
    eventId: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type EventCategoryCreateOrConnectWithoutCategoryInput = {
    where: EventCategoryWhereUniqueInput
    create: XOR<EventCategoryCreateWithoutCategoryInput, EventCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type EventCategoryCreateManyCategoryInputEnvelope = {
    data: Enumerable<EventCategoryCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutParentInput = {
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    updated_at?: Date | string
    created_at?: Date | string
    User?: UserCreateNestedOneWithoutCategoryInput
    Image: ImageCreateNestedOneWithoutCategoryInput
    UserCategory?: UserCategoryCreateNestedManyWithoutCategoryInput
    EventCategory?: EventCategoryCreateNestedManyWithoutCategoryInput
    Children?: CategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    adminId?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    UserCategory?: UserCategoryUncheckedCreateNestedManyWithoutCategoryInput
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutCategoryInput
    Children?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: Enumerable<CategoryCreateManyParentInput>
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutChildrenInput = {
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    updated_at?: Date | string
    created_at?: Date | string
    User?: UserCreateNestedOneWithoutCategoryInput
    Image: ImageCreateNestedOneWithoutCategoryInput
    UserCategory?: UserCategoryCreateNestedManyWithoutCategoryInput
    EventCategory?: EventCategoryCreateNestedManyWithoutCategoryInput
    Parent?: CategoryCreateNestedOneWithoutChildrenInput
  }

  export type CategoryUncheckedCreateWithoutChildrenInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    adminId?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    parentId?: number | null
    UserCategory?: UserCategoryUncheckedCreateNestedManyWithoutCategoryInput
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutChildrenInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
  }

  export type UserUpsertWithoutCategoryInput = {
    update: XOR<UserUpdateWithoutCategoryInput, UserUncheckedUpdateWithoutCategoryInput>
    create: XOR<UserCreateWithoutCategoryInput, UserUncheckedCreateWithoutCategoryInput>
  }

  export type UserUpdateWithoutCategoryInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | Roles | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmKey?: NullableStringFieldUpdateOperationsInput | string | null
    forgotKey?: NullableStringFieldUpdateOperationsInput | string | null
    createConfirm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createForgot?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    UserCategory?: UserCategoryUpdateManyWithoutUserInput
    Event?: EventUpdateManyWithoutUserInput
    Favorites?: FavoritesUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | Roles | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmKey?: NullableStringFieldUpdateOperationsInput | string | null
    forgotKey?: NullableStringFieldUpdateOperationsInput | string | null
    createConfirm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createForgot?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    UserCategory?: UserCategoryUncheckedUpdateManyWithoutUserInput
    Event?: EventUncheckedUpdateManyWithoutUserInput
    Favorites?: FavoritesUncheckedUpdateManyWithoutUserInput
  }

  export type ImageUpsertWithoutCategoryInput = {
    update: XOR<ImageUpdateWithoutCategoryInput, ImageUncheckedUpdateWithoutCategoryInput>
    create: XOR<ImageCreateWithoutCategoryInput, ImageUncheckedCreateWithoutCategoryInput>
  }

  export type ImageUpdateWithoutCategoryInput = {
    fieldname?: StringFieldUpdateOperationsInput | string
    originalname?: StringFieldUpdateOperationsInput | string
    encoding?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    origin?: EnumImagOriginFieldUpdateOperationsInput | ImagOrigin
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutImageInput
  }

  export type ImageUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fieldname?: StringFieldUpdateOperationsInput | string
    originalname?: StringFieldUpdateOperationsInput | string
    encoding?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    origin?: EnumImagOriginFieldUpdateOperationsInput | ImagOrigin
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutImageInput
  }

  export type UserCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: UserCategoryWhereUniqueInput
    update: XOR<UserCategoryUpdateWithoutCategoryInput, UserCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<UserCategoryCreateWithoutCategoryInput, UserCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type UserCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: UserCategoryWhereUniqueInput
    data: XOR<UserCategoryUpdateWithoutCategoryInput, UserCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type UserCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: UserCategoryScalarWhereInput
    data: XOR<UserCategoryUpdateManyMutationInput, UserCategoryUncheckedUpdateManyWithoutUserCategoryInput>
  }

  export type EventCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: EventCategoryWhereUniqueInput
    update: XOR<EventCategoryUpdateWithoutCategoryInput, EventCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<EventCategoryCreateWithoutCategoryInput, EventCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type EventCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: EventCategoryWhereUniqueInput
    data: XOR<EventCategoryUpdateWithoutCategoryInput, EventCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type EventCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: EventCategoryScalarWhereInput
    data: XOR<EventCategoryUpdateManyMutationInput, EventCategoryUncheckedUpdateManyWithoutEventCategoryInput>
  }

  export type EventCategoryScalarWhereInput = {
    AND?: Enumerable<EventCategoryScalarWhereInput>
    OR?: Enumerable<EventCategoryScalarWhereInput>
    NOT?: Enumerable<EventCategoryScalarWhereInput>
    id?: IntFilter | number
    categoryId?: IntFilter | number
    eventId?: IntFilter | number
    updated_at?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutChildrenInput>
  }

  export type CategoryUpsertWithoutChildrenInput = {
    update: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
  }

  export type CategoryUpdateWithoutChildrenInput = {
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutCategoryInput
    Image?: ImageUpdateOneRequiredWithoutCategoryInput
    UserCategory?: UserCategoryUpdateManyWithoutCategoryInput
    EventCategory?: EventCategoryUpdateManyWithoutCategoryInput
    Parent?: CategoryUpdateOneWithoutChildrenInput
  }

  export type CategoryUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    UserCategory?: UserCategoryUncheckedUpdateManyWithoutCategoryInput
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutCategoryInput
  }

  export type UserCreateWithoutUserCategoryInput = {
    email: string
    password: string
    name?: string | null
    role?: Roles | null
    confirmed?: boolean
    confirmKey?: string | null
    forgotKey?: string | null
    createConfirm?: Date | string | null
    createForgot?: Date | string | null
    updated_at?: Date | string
    created_at?: Date | string
    Category?: CategoryCreateNestedManyWithoutUserInput
    Event?: EventCreateNestedManyWithoutUserInput
    Favorites?: FavoritesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserCategoryInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: Roles | null
    confirmed?: boolean
    confirmKey?: string | null
    forgotKey?: string | null
    createConfirm?: Date | string | null
    createForgot?: Date | string | null
    updated_at?: Date | string
    created_at?: Date | string
    Category?: CategoryUncheckedCreateNestedManyWithoutUserInput
    Event?: EventUncheckedCreateNestedManyWithoutUserInput
    Favorites?: FavoritesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserCategoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCategoryInput, UserUncheckedCreateWithoutUserCategoryInput>
  }

  export type CategoryCreateWithoutUserCategoryInput = {
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    updated_at?: Date | string
    created_at?: Date | string
    User?: UserCreateNestedOneWithoutCategoryInput
    Image: ImageCreateNestedOneWithoutCategoryInput
    EventCategory?: EventCategoryCreateNestedManyWithoutCategoryInput
    Children?: CategoryCreateNestedManyWithoutParentInput
    Parent?: CategoryCreateNestedOneWithoutChildrenInput
  }

  export type CategoryUncheckedCreateWithoutUserCategoryInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    adminId?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    parentId?: number | null
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutCategoryInput
    Children?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutUserCategoryInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserCategoryInput, CategoryUncheckedCreateWithoutUserCategoryInput>
  }

  export type UserUpsertWithoutUserCategoryInput = {
    update: XOR<UserUpdateWithoutUserCategoryInput, UserUncheckedUpdateWithoutUserCategoryInput>
    create: XOR<UserCreateWithoutUserCategoryInput, UserUncheckedCreateWithoutUserCategoryInput>
  }

  export type UserUpdateWithoutUserCategoryInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | Roles | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmKey?: NullableStringFieldUpdateOperationsInput | string | null
    forgotKey?: NullableStringFieldUpdateOperationsInput | string | null
    createConfirm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createForgot?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateManyWithoutUserInput
    Event?: EventUpdateManyWithoutUserInput
    Favorites?: FavoritesUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutUserCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | Roles | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmKey?: NullableStringFieldUpdateOperationsInput | string | null
    forgotKey?: NullableStringFieldUpdateOperationsInput | string | null
    createConfirm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createForgot?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUncheckedUpdateManyWithoutUserInput
    Event?: EventUncheckedUpdateManyWithoutUserInput
    Favorites?: FavoritesUncheckedUpdateManyWithoutUserInput
  }

  export type CategoryUpsertWithoutUserCategoryInput = {
    update: XOR<CategoryUpdateWithoutUserCategoryInput, CategoryUncheckedUpdateWithoutUserCategoryInput>
    create: XOR<CategoryCreateWithoutUserCategoryInput, CategoryUncheckedCreateWithoutUserCategoryInput>
  }

  export type CategoryUpdateWithoutUserCategoryInput = {
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutCategoryInput
    Image?: ImageUpdateOneRequiredWithoutCategoryInput
    EventCategory?: EventCategoryUpdateManyWithoutCategoryInput
    Children?: CategoryUpdateManyWithoutParentInput
    Parent?: CategoryUpdateOneWithoutChildrenInput
  }

  export type CategoryUncheckedUpdateWithoutUserCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutCategoryInput
    Children?: CategoryUncheckedUpdateManyWithoutParentInput
  }

  export type UserCreateWithoutEventInput = {
    email: string
    password: string
    name?: string | null
    role?: Roles | null
    confirmed?: boolean
    confirmKey?: string | null
    forgotKey?: string | null
    createConfirm?: Date | string | null
    createForgot?: Date | string | null
    updated_at?: Date | string
    created_at?: Date | string
    Category?: CategoryCreateNestedManyWithoutUserInput
    UserCategory?: UserCategoryCreateNestedManyWithoutUserInput
    Favorites?: FavoritesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: Roles | null
    confirmed?: boolean
    confirmKey?: string | null
    forgotKey?: string | null
    createConfirm?: Date | string | null
    createForgot?: Date | string | null
    updated_at?: Date | string
    created_at?: Date | string
    Category?: CategoryUncheckedCreateNestedManyWithoutUserInput
    UserCategory?: UserCategoryUncheckedCreateNestedManyWithoutUserInput
    Favorites?: FavoritesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
  }

  export type ImageCreateWithoutEventInput = {
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    destination: string
    origin: ImagOrigin
    filename: string
    path: string
    size: number
    updated_at?: Date | string
    created_at?: Date | string
    Category?: CategoryCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutEventInput = {
    id?: number
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    destination: string
    origin: ImagOrigin
    filename: string
    path: string
    size: number
    updated_at?: Date | string
    created_at?: Date | string
    Category?: CategoryUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutEventInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutEventInput, ImageUncheckedCreateWithoutEventInput>
  }

  export type FavoritesCreateWithoutEventInput = {
    updated_at?: Date | string
    created_at?: Date | string
    User: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoritesUncheckedCreateWithoutEventInput = {
    id?: number
    userId: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type FavoritesCreateOrConnectWithoutEventInput = {
    where: FavoritesWhereUniqueInput
    create: XOR<FavoritesCreateWithoutEventInput, FavoritesUncheckedCreateWithoutEventInput>
  }

  export type FavoritesCreateManyEventInputEnvelope = {
    data: Enumerable<FavoritesCreateManyEventInput>
    skipDuplicates?: boolean
  }

  export type EventCategoryCreateWithoutEventInput = {
    updated_at?: Date | string
    created_at?: Date | string
    Category: CategoryCreateNestedOneWithoutEventCategoryInput
  }

  export type EventCategoryUncheckedCreateWithoutEventInput = {
    id?: number
    categoryId: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type EventCategoryCreateOrConnectWithoutEventInput = {
    where: EventCategoryWhereUniqueInput
    create: XOR<EventCategoryCreateWithoutEventInput, EventCategoryUncheckedCreateWithoutEventInput>
  }

  export type EventCategoryCreateManyEventInputEnvelope = {
    data: Enumerable<EventCategoryCreateManyEventInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventInput = {
    update: XOR<UserUpdateWithoutEventInput, UserUncheckedUpdateWithoutEventInput>
    create: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
  }

  export type UserUpdateWithoutEventInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | Roles | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmKey?: NullableStringFieldUpdateOperationsInput | string | null
    forgotKey?: NullableStringFieldUpdateOperationsInput | string | null
    createConfirm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createForgot?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateManyWithoutUserInput
    UserCategory?: UserCategoryUpdateManyWithoutUserInput
    Favorites?: FavoritesUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | Roles | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmKey?: NullableStringFieldUpdateOperationsInput | string | null
    forgotKey?: NullableStringFieldUpdateOperationsInput | string | null
    createConfirm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createForgot?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUncheckedUpdateManyWithoutUserInput
    UserCategory?: UserCategoryUncheckedUpdateManyWithoutUserInput
    Favorites?: FavoritesUncheckedUpdateManyWithoutUserInput
  }

  export type ImageUpsertWithoutEventInput = {
    update: XOR<ImageUpdateWithoutEventInput, ImageUncheckedUpdateWithoutEventInput>
    create: XOR<ImageCreateWithoutEventInput, ImageUncheckedCreateWithoutEventInput>
  }

  export type ImageUpdateWithoutEventInput = {
    fieldname?: StringFieldUpdateOperationsInput | string
    originalname?: StringFieldUpdateOperationsInput | string
    encoding?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    origin?: EnumImagOriginFieldUpdateOperationsInput | ImagOrigin
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateManyWithoutImageInput
  }

  export type ImageUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    fieldname?: StringFieldUpdateOperationsInput | string
    originalname?: StringFieldUpdateOperationsInput | string
    encoding?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    origin?: EnumImagOriginFieldUpdateOperationsInput | ImagOrigin
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUncheckedUpdateManyWithoutImageInput
  }

  export type FavoritesUpsertWithWhereUniqueWithoutEventInput = {
    where: FavoritesWhereUniqueInput
    update: XOR<FavoritesUpdateWithoutEventInput, FavoritesUncheckedUpdateWithoutEventInput>
    create: XOR<FavoritesCreateWithoutEventInput, FavoritesUncheckedCreateWithoutEventInput>
  }

  export type FavoritesUpdateWithWhereUniqueWithoutEventInput = {
    where: FavoritesWhereUniqueInput
    data: XOR<FavoritesUpdateWithoutEventInput, FavoritesUncheckedUpdateWithoutEventInput>
  }

  export type FavoritesUpdateManyWithWhereWithoutEventInput = {
    where: FavoritesScalarWhereInput
    data: XOR<FavoritesUpdateManyMutationInput, FavoritesUncheckedUpdateManyWithoutFavoritesInput>
  }

  export type EventCategoryUpsertWithWhereUniqueWithoutEventInput = {
    where: EventCategoryWhereUniqueInput
    update: XOR<EventCategoryUpdateWithoutEventInput, EventCategoryUncheckedUpdateWithoutEventInput>
    create: XOR<EventCategoryCreateWithoutEventInput, EventCategoryUncheckedCreateWithoutEventInput>
  }

  export type EventCategoryUpdateWithWhereUniqueWithoutEventInput = {
    where: EventCategoryWhereUniqueInput
    data: XOR<EventCategoryUpdateWithoutEventInput, EventCategoryUncheckedUpdateWithoutEventInput>
  }

  export type EventCategoryUpdateManyWithWhereWithoutEventInput = {
    where: EventCategoryScalarWhereInput
    data: XOR<EventCategoryUpdateManyMutationInput, EventCategoryUncheckedUpdateManyWithoutEventCategoryInput>
  }

  export type CategoryCreateWithoutEventCategoryInput = {
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    updated_at?: Date | string
    created_at?: Date | string
    User?: UserCreateNestedOneWithoutCategoryInput
    Image: ImageCreateNestedOneWithoutCategoryInput
    UserCategory?: UserCategoryCreateNestedManyWithoutCategoryInput
    Children?: CategoryCreateNestedManyWithoutParentInput
    Parent?: CategoryCreateNestedOneWithoutChildrenInput
  }

  export type CategoryUncheckedCreateWithoutEventCategoryInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    adminId?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    parentId?: number | null
    UserCategory?: UserCategoryUncheckedCreateNestedManyWithoutCategoryInput
    Children?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutEventCategoryInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutEventCategoryInput, CategoryUncheckedCreateWithoutEventCategoryInput>
  }

  export type EventCreateWithoutEventCategoryInput = {
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    updated_at?: Date | string
    created_at?: Date | string
    User?: UserCreateNestedOneWithoutEventInput
    Image: ImageCreateNestedOneWithoutEventInput
    Favorites?: FavoritesCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventCategoryInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    adminId?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    Favorites?: FavoritesUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventCategoryInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventCategoryInput, EventUncheckedCreateWithoutEventCategoryInput>
  }

  export type CategoryUpsertWithoutEventCategoryInput = {
    update: XOR<CategoryUpdateWithoutEventCategoryInput, CategoryUncheckedUpdateWithoutEventCategoryInput>
    create: XOR<CategoryCreateWithoutEventCategoryInput, CategoryUncheckedCreateWithoutEventCategoryInput>
  }

  export type CategoryUpdateWithoutEventCategoryInput = {
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutCategoryInput
    Image?: ImageUpdateOneRequiredWithoutCategoryInput
    UserCategory?: UserCategoryUpdateManyWithoutCategoryInput
    Children?: CategoryUpdateManyWithoutParentInput
    Parent?: CategoryUpdateOneWithoutChildrenInput
  }

  export type CategoryUncheckedUpdateWithoutEventCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    UserCategory?: UserCategoryUncheckedUpdateManyWithoutCategoryInput
    Children?: CategoryUncheckedUpdateManyWithoutParentInput
  }

  export type EventUpsertWithoutEventCategoryInput = {
    update: XOR<EventUpdateWithoutEventCategoryInput, EventUncheckedUpdateWithoutEventCategoryInput>
    create: XOR<EventCreateWithoutEventCategoryInput, EventUncheckedCreateWithoutEventCategoryInput>
  }

  export type EventUpdateWithoutEventCategoryInput = {
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutEventInput
    Image?: ImageUpdateOneRequiredWithoutEventInput
    Favorites?: FavoritesUpdateManyWithoutEventInput
  }

  export type EventUncheckedUpdateWithoutEventCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorites?: FavoritesUncheckedUpdateManyWithoutEventInput
  }

  export type UserCreateWithoutFavoritesInput = {
    email: string
    password: string
    name?: string | null
    role?: Roles | null
    confirmed?: boolean
    confirmKey?: string | null
    forgotKey?: string | null
    createConfirm?: Date | string | null
    createForgot?: Date | string | null
    updated_at?: Date | string
    created_at?: Date | string
    Category?: CategoryCreateNestedManyWithoutUserInput
    UserCategory?: UserCategoryCreateNestedManyWithoutUserInput
    Event?: EventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: Roles | null
    confirmed?: boolean
    confirmKey?: string | null
    forgotKey?: string | null
    createConfirm?: Date | string | null
    createForgot?: Date | string | null
    updated_at?: Date | string
    created_at?: Date | string
    Category?: CategoryUncheckedCreateNestedManyWithoutUserInput
    UserCategory?: UserCategoryUncheckedCreateNestedManyWithoutUserInput
    Event?: EventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type EventCreateWithoutFavoritesInput = {
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    updated_at?: Date | string
    created_at?: Date | string
    User?: UserCreateNestedOneWithoutEventInput
    Image: ImageCreateNestedOneWithoutEventInput
    EventCategory?: EventCategoryCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutFavoritesInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    adminId?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutFavoritesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutFavoritesInput, EventUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | Roles | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmKey?: NullableStringFieldUpdateOperationsInput | string | null
    forgotKey?: NullableStringFieldUpdateOperationsInput | string | null
    createConfirm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createForgot?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateManyWithoutUserInput
    UserCategory?: UserCategoryUpdateManyWithoutUserInput
    Event?: EventUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRolesFieldUpdateOperationsInput | Roles | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmKey?: NullableStringFieldUpdateOperationsInput | string | null
    forgotKey?: NullableStringFieldUpdateOperationsInput | string | null
    createConfirm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createForgot?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUncheckedUpdateManyWithoutUserInput
    UserCategory?: UserCategoryUncheckedUpdateManyWithoutUserInput
    Event?: EventUncheckedUpdateManyWithoutUserInput
  }

  export type EventUpsertWithoutFavoritesInput = {
    update: XOR<EventUpdateWithoutFavoritesInput, EventUncheckedUpdateWithoutFavoritesInput>
    create: XOR<EventCreateWithoutFavoritesInput, EventUncheckedCreateWithoutFavoritesInput>
  }

  export type EventUpdateWithoutFavoritesInput = {
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutEventInput
    Image?: ImageUpdateOneRequiredWithoutEventInput
    EventCategory?: EventCategoryUpdateManyWithoutEventInput
  }

  export type EventUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutEventInput
  }

  export type CategoryCreateWithoutImageInput = {
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    updated_at?: Date | string
    created_at?: Date | string
    User?: UserCreateNestedOneWithoutCategoryInput
    UserCategory?: UserCategoryCreateNestedManyWithoutCategoryInput
    EventCategory?: EventCategoryCreateNestedManyWithoutCategoryInput
    Children?: CategoryCreateNestedManyWithoutParentInput
    Parent?: CategoryCreateNestedOneWithoutChildrenInput
  }

  export type CategoryUncheckedCreateWithoutImageInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    adminId?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    parentId?: number | null
    UserCategory?: UserCategoryUncheckedCreateNestedManyWithoutCategoryInput
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutCategoryInput
    Children?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutImageInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutImageInput, CategoryUncheckedCreateWithoutImageInput>
  }

  export type CategoryCreateManyImageInputEnvelope = {
    data: Enumerable<CategoryCreateManyImageInput>
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutImageInput = {
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    updated_at?: Date | string
    created_at?: Date | string
    User?: UserCreateNestedOneWithoutEventInput
    Favorites?: FavoritesCreateNestedManyWithoutEventInput
    EventCategory?: EventCategoryCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutImageInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    adminId?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    Favorites?: FavoritesUncheckedCreateNestedManyWithoutEventInput
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutImageInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutImageInput, EventUncheckedCreateWithoutImageInput>
  }

  export type EventCreateManyImageInputEnvelope = {
    data: Enumerable<EventCreateManyImageInput>
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutImageInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutImageInput, CategoryUncheckedUpdateWithoutImageInput>
    create: XOR<CategoryCreateWithoutImageInput, CategoryUncheckedCreateWithoutImageInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutImageInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutImageInput, CategoryUncheckedUpdateWithoutImageInput>
  }

  export type CategoryUpdateManyWithWhereWithoutImageInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type EventUpsertWithWhereUniqueWithoutImageInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutImageInput, EventUncheckedUpdateWithoutImageInput>
    create: XOR<EventCreateWithoutImageInput, EventUncheckedCreateWithoutImageInput>
  }

  export type EventUpdateWithWhereUniqueWithoutImageInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutImageInput, EventUncheckedUpdateWithoutImageInput>
  }

  export type EventUpdateManyWithWhereWithoutImageInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutEventInput>
  }

  export type CategoryCreateManyUserInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    updated_at?: Date | string
    created_at?: Date | string
    parentId?: number | null
  }

  export type UserCategoryCreateManyUserInput = {
    id?: number
    categoryId: number
    active?: boolean
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type EventCreateManyUserInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type FavoritesCreateManyUserInput = {
    id?: number
    eventId: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type CategoryUpdateWithoutUserInput = {
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Image?: ImageUpdateOneRequiredWithoutCategoryInput
    UserCategory?: UserCategoryUpdateManyWithoutCategoryInput
    EventCategory?: EventCategoryUpdateManyWithoutCategoryInput
    Children?: CategoryUpdateManyWithoutParentInput
    Parent?: CategoryUpdateOneWithoutChildrenInput
  }

  export type CategoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    UserCategory?: UserCategoryUncheckedUpdateManyWithoutCategoryInput
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutCategoryInput
    Children?: CategoryUncheckedUpdateManyWithoutParentInput
  }

  export type CategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCategoryUpdateWithoutUserInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneRequiredWithoutUserCategoryInput
  }

  export type UserCategoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryUncheckedUpdateManyWithoutUserCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutUserInput = {
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Image?: ImageUpdateOneRequiredWithoutEventInput
    Favorites?: FavoritesUpdateManyWithoutEventInput
    EventCategory?: EventCategoryUpdateManyWithoutEventInput
  }

  export type EventUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorites?: FavoritesUncheckedUpdateManyWithoutEventInput
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutEventInput
  }

  export type EventUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritesUpdateWithoutUserInput = {
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateOneRequiredWithoutFavoritesInput
  }

  export type FavoritesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritesUncheckedUpdateManyWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCategoryCreateManyCategoryInput = {
    id?: number
    userId: number
    active?: boolean
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type EventCategoryCreateManyCategoryInput = {
    id?: number
    eventId: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type CategoryCreateManyParentInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    image: number
    adminId?: number | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type UserCategoryUpdateWithoutCategoryInput = {
    active?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUserCategoryInput
  }

  export type UserCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryUpdateWithoutCategoryInput = {
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateOneRequiredWithoutEventCategoryInput
  }

  export type EventCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryUncheckedUpdateManyWithoutEventCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutParentInput = {
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutCategoryInput
    Image?: ImageUpdateOneRequiredWithoutCategoryInput
    UserCategory?: UserCategoryUpdateManyWithoutCategoryInput
    EventCategory?: EventCategoryUpdateManyWithoutCategoryInput
    Children?: CategoryUpdateManyWithoutParentInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    UserCategory?: UserCategoryUncheckedUpdateManyWithoutCategoryInput
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutCategoryInput
    Children?: CategoryUncheckedUpdateManyWithoutParentInput
  }

  export type CategoryUncheckedUpdateManyWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    image?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritesCreateManyEventInput = {
    id?: number
    userId: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type EventCategoryCreateManyEventInput = {
    id?: number
    categoryId: number
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type FavoritesUpdateWithoutEventInput = {
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutFavoritesInput
  }

  export type FavoritesUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryUpdateWithoutEventInput = {
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneRequiredWithoutEventCategoryInput
  }

  export type EventCategoryUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyImageInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    adminId?: number | null
    updated_at?: Date | string
    created_at?: Date | string
    parentId?: number | null
  }

  export type EventCreateManyImageInput = {
    id?: number
    titleRu: string
    titleUk: string
    titleEn: string
    descriptionRu: string
    descriptionUk: string
    descriptionEn: string
    adminId?: number | null
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type CategoryUpdateWithoutImageInput = {
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutCategoryInput
    UserCategory?: UserCategoryUpdateManyWithoutCategoryInput
    EventCategory?: EventCategoryUpdateManyWithoutCategoryInput
    Children?: CategoryUpdateManyWithoutParentInput
    Parent?: CategoryUpdateOneWithoutChildrenInput
  }

  export type CategoryUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    UserCategory?: UserCategoryUncheckedUpdateManyWithoutCategoryInput
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutCategoryInput
    Children?: CategoryUncheckedUpdateManyWithoutParentInput
  }

  export type EventUpdateWithoutImageInput = {
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutEventInput
    Favorites?: FavoritesUpdateManyWithoutEventInput
    EventCategory?: EventCategoryUpdateManyWithoutEventInput
  }

  export type EventUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleRu?: StringFieldUpdateOperationsInput | string
    titleUk?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    descriptionRu?: StringFieldUpdateOperationsInput | string
    descriptionUk?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorites?: FavoritesUncheckedUpdateManyWithoutEventInput
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutEventInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}