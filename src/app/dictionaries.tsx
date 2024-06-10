
const dictionaries = {
    en: () => import('./_dictionaries/en.json').then((module) => module.default),
    nt: () => import('./_dictionaries/nt.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => (dictionaries as any)[locale]()