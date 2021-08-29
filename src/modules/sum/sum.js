export function sum(...args) {
    if (args.length === 0) {
        throw Error('sum requires at least one argument')
    }

    return args.reduce((sum, arg) => sum + arg, 0);
}