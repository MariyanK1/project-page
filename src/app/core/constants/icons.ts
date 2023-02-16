export const ICON_PATH = 'assets/tech-icons/';
export const ICON_EXT = '.png';

export const ICON_NAMES = [
    'angular',
    'css',
    'js',
    'mongo',
    'react',
    'rxjs',
    'sass',
    'ts',
    'node',
] as const;

export type PossibleNames = (typeof ICON_NAMES)[number];
