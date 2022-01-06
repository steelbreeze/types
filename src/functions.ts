/** Prototype of a class constructor. */
export type Constructor<TResult> = new (...args: Array<any>) => TResult;

/** A function that takes a variable number of arguments and returns a result. */
export type Function<TArgs, TResult> = (...args: Array<TArgs>) => TResult;

/** A function taking one argument and returning a boolean result. */
export type Predicate<TArg> = Function<TArg, boolean>;

/** A supplier function, one with no parameters that returns a result. */
export type Supplier<TResult> = () => TResult;

/** Prototype of a function taking a single argument of a specific type and returning anything. */
export type Consumer<T> = Function<T, any>;

/** An operator that supplies a predicate. */
export type Operator<TArg> = Supplier<Predicate<TArg>>;
