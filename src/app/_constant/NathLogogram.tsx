export const HEIROGLYPH__CHARACTER = {
    "full": "A—— l S—— l D—— l F—— l G—— l H—— l J—— l K—— ",
    "upper": "Q—— l W—— l E—— l R—— l T—— l Y—— l U—— l I——",
    "lower": "q—— l w—— l e—— l r—— l t—— l y—— l u—— l i——",
    "left": "a—— l s—— l d—— l f—— l g—— l h—— l j—— l k——",
    "right": "—a— l —s— l —d— l —f— l —g— l —h— l —j— l —k—",
    "upper_left": "Z—— l X—— l C—— l V—— l B—— l N—— l M—— l <——",
    "upper_right": "—Z— l —X— l —C— l —V— l —B— l —N— l —M— l —<—",
    "lower_left": "z—— l x—— l c—— l v—— l b—— l n—— l m—— l ,——",
    "lower_right": "—z— l —x— l —c— l —v— l —b— l —n— l —m— l —,—"
}

export const HEIROGLYPH__KEY_BUTTON = {
    "full": "A S D F G H J K",
    "upper": "Q W E R T Y U I",
    "lower": "q w e r t y u i",
    "left": "a s d f g h j k",
    "right": "a s d f g h j k",
    "upper_left": "Z X C V B N M <",
    "upper_right": "Z X C V B N M <",
    "lower_left": "z x c v b n m ,",
    "lower_right": "z x c v b n m ,"
}

export const SPECIAL_CHARACTER__VALUE = {
    ",": "l",
    "<": "L",
    "o": "o",
    "O": "O",
    "p": "p",
    "P": "P"
}

export const CHARACTER_POSITION__EXAMPLE = {
    "full": "A—— l S—— l D——",
    "left_right": "a—d— l k—s— l h—f—",
    "upper_lower": "Qw—— l Er—— l Ty——",
    "upper": "Qx—c— l Tb—,— l Iv—m—",
    "right": "Nm—a— l Vc—g— l Cz—d—",
    "lower": "Ci—B— l Vr—N— l Xe—V—",
    "left": "g—Zx— l j—Bm l f—M,—",
    "grid": "Zx—Cv— l Bn—M,— l Xv—N,—"
}

export const CHARACTER_POSITION__KEY_BUTTON = Object.entries(CHARACTER_POSITION__EXAMPLE).map(([key, val]) => ([key, val])).reduce((accu: any, curr: string[]) => {
    accu[curr[0]] = curr[1].replaceAll("l", ",")
    return accu
}, {})