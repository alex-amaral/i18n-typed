export const _t = (id: string, ...rest: any[]): [string, ...any[]] => {
  if (!id) {
    id = '';
  }
  return [id, ...rest];
};
