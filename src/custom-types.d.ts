declare module 'pokersolver' {
    export const Hand: {
        solve: (cards: string[]) => {name: string}
    };
  
    // Or if it's a default export, you can define the type as follows
    // const someFunction: (param: string) => number;
    // export default someFunction;
  }