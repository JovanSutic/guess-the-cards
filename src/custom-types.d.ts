declare module "pokersolver" {
  export const Hand: {
    solve: (cards: string[]) => { name: string };
  };
}
