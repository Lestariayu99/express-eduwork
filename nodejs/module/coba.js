const getUserSync = (id) => {
    const nama = id === 1 ? 'Isabella' : 'Balqis';
    return { id, nama};
};

const userSatu = getUserSync (1);
console.log(userSatu);

const userSatu = getUserSync (2);
console.log(userDua);

const halo = 'Hello World !';
console.log(halo);