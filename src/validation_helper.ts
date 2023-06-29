export const validateSearchQuery = (title: string, limit: number, offset: number) => {
    if(title.length == 0)
        throw new Error("Title is required");
    if(limit < 0)
        throw new Error("Limit must be greater than 0");
    if(offset < 0)
        throw new Error("Offset must be greater than 0");
    if(limit > 10)
        throw new Error("Limit must be less than 10");
    return true;
}