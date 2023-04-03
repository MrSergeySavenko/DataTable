import { uniqueKey, getNewId } from './utils';

describe('Тест папки utils', () => {
    test('uniqueKey, тест на получение ключей', () => {
        const arr = [{ firstName: 'Tom' }];

        expect(uniqueKey('bob', 1)).toBe('bob+1');
        expect(uniqueKey(arr[0].firstName, 0)).toBe('Tom+0');
    });

    test('getNewId, тест на сортировку массива и получение id на один больше максимального в массиве', () => {
        const arr = [{ id: 1 }, { id: 3 }, { id: 49 }, { id: 7 }, { id: 15 }, { id: 50 }];
        const arr1 = [{ id: 3 }, { id: 5 }, { id: 10 }, { id: 32 }];
        const arr2 = [{ id: '34' }];

        expect(getNewId(arr)).toBe(51);
        expect(getNewId(arr1)).toBe(33);
        expect(getNewId(arr2)).toBe(null);
    });
});
