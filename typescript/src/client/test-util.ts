export const syncify = async (method: Function): Promise<Function> => {
    try {
        const result = await method();
        return () => result;
    } catch (err) {
        return () => { throw err; };
    }
};