const key = 'TIKTOK_STORAGE';

function useLocalStorage() {
    const getItem = () => {
        const dataStorage = JSON.parse(localStorage.getItem(key)) || {};
        return dataStorage;
    };
    const setItem = (obj) => {
        const dataSotrage = getItem();
        Object.assign(dataSotrage, obj);

        const jsonData = JSON.stringify(dataSotrage);
        return localStorage.setItem(key, jsonData);
    };

    const deleteItem = (item) => {
        const dataStorage = getItem();
        delete dataStorage[item];

        // convert data storage to json
        const jsonData = JSON.stringify(dataStorage);

        return localStorage.setItem(key, jsonData);
    };

    return {
        getDataStorage: getItem(),
        setDataStorage: setItem,
        deleteStorage: deleteItem,
    };
}

export default useLocalStorage;
