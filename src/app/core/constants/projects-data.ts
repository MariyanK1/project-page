import { IProjectData } from './interfaces';

export const PROJECT_DATA: IProjectData[] = [
    {
        title: 'instagram clone',
        description: `I challenged myself with the task of creating a Full-Stack SPA with pure Javscript.
        Let's just say that after I was finished with the task I started appreciating tools like React and Angular a bit more.
        The backend is simple but I had a lot fun building it.
        `,
        tech: ['node', 'js', 'sass', 'mongo'],
        link: 'https://github.com/MariyanK1/full-stack-instagram-clone',
    },
    {
        title: 'github finder',
        description: `Simple Github account finder. Good practice for React Context. Search for your account in the search bar and check it out. 
        `,
        tech: ['react', 'js', 'css'],
        link: 'https://github.com/MariyanK1/Github-Finder',
    },
    {
        title: 'resizable columns',
        description: 'Custom resizable columns directive.',
        tech: ['angular'],
        link: 'https://github.com/MariyanK1/angular-resiable-column/tree/main/resizable-columns',
    },
    {
        title: 'crud api',
        description: 'CRUD API written in Golang',
        tech: ['golang'],
        link: 'https://github.com/MariyanK1/CRUD-API-golang-',
    },
];
