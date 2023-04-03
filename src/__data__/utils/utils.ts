export const uniqueKey = (name: any, i: number) => `${name}+${i}`;

export const getNewId = (arr) => {
    const arrMaxId = [...arr].sort((a, b) => (a.id > b.id ? 1 : -1))[arr.length - 1];
    if (typeof arrMaxId.id === 'number') {
        const maxId = arrMaxId.id + 1;
        return maxId;
    }
    return null;
};
