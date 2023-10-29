type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

function isEmpty(obj: Obj): boolean {
    // 配列の場合、配列の長さを確認する
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }
    // オブジェクトの場合、キーの数を確認する
    return Object.keys(obj).length === 0;
};