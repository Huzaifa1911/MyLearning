import {format as prettyFormat} from 'pretty-format';

export function Log(...args: any[]) {
  if (__DEV__)
    // eslint-disable-next-line no-console
    console.log.apply(
      null,
      args.map(arg => prettyFormat(arg)),
    );
}
