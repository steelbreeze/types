/** A key/value pair. */
export interface Pair<TValue = any, TKey = keyof TValue> {
    /** The key. */
    key: TKey;
    /** The value. */
    value: TValue;
}
