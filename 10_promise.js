
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
};


module.exports = {sleep};