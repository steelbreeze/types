/** A key/value pair. */
export interface Pair<TValue = any, TKey = Exclude<keyof TValue, symbol>> {
    /** The key. */
    key: TKey;
    /** The value. */
    value: TValue;
}
