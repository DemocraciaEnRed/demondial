import pandas as pd
import json

DATA = {
    'alemania': {
        "name": 'Alemania',
        "asks": [],
        "clip": "BBA"
    },
    'arabia_saudita': {
        "name": 'Arabia Saudita',
        "asks": [],
        "clip": "MVA"
    },
    'argentina': {
        "name": 'Argentina',
        "asks": [],
        "clip": "MCU"
    },
    'australia': {
        "name": 'Australia',
        "asks": [],
        "clip": "MAA"
    },
    'belgica': {
        "name": 'Bélgica',
        "asks": [],
        "clip": "BRB"
    },
    'brasil': {
        "name": 'Brasil',
        "asks": [],
        "clip": "NAE"
    },
    'camerun': {
        "name": 'Camerún',
        "asks": [],
        "clip": "NVS"
    },
    'canada': {
        "name": 'Canadá',
        "asks": [],
        "clip": "BRB"
    },
    'catar': {
        "name": 'Catar',
        "asks": [],
        "clip": "MRC"
    },
    'corea_del_sur': {
        "name": 'Corea del Sur',
        "asks": [],
        "clip": "MRC"
    },
    'costa_rica': {
        "name": 'Costa Rica',
        "asks": [],
        "clip": "MRC"
    },
    'croacia': {
        "name": 'Croacia',
        "asks": [],
        "clip": "MRC"
    },
    'dinamarca': {
        "name": 'Dinamarca',
        "asks": [],
        "clip": "BRB"
    },
    'ecuador': {
        "name": 'Ecuador',
        "asks": [],
        "clip": "NAE"
    },
    'espana': {
        "name": 'España',
        "asks": [],
        "clip": "BRB"
    },
    'estados_unidos': {
        "name": 'Estados Unidos',
        "asks": [],
        "clip": "BBA"
    },
    'francia': {
        "name": 'Francia',
        "asks": [],
        "clip": "NAF"
    },
    'gales': {
        "name": 'Gales',
        "asks": [],
        "clip": "BRB"
    },
    'ghana': {
        "name": 'Ghana',
        "asks": [],
        "clip": "NBG"
    },
    'inglaterra': {
        "name": 'Inglaterra',
        "asks": [],
        "clip": "BBA"
    },
    'iran': {
        "name": 'Irán',
        "asks": [],
        "clip": "MBI"
    },
    'japon': {
        "name": 'Japón',
        "asks": [],
        "clip": "BAJ"
    },
    'marruecos': {
        "name": 'Marruecos',
        "asks": [],
        "clip": "BRB"
    },
    'mexico': {
        "name": 'México',
        "asks": [],
        "clip": "BVM"
    },
    'paises_bajos': {
        "name": 'Países Bajos',
        "asks": [],
        "clip": "BNP"
    },
    'polonia': {
        "name": 'Polonia',
        "asks": [],
        "clip": "BBA"
    },
    'portugal': {
        "name": 'Portugal',
        "asks": [],
        "clip": "BRB"
    },
    'senegal': {
        "name": 'Senegal',
        "asks": [],
        "clip": "NVS"
    },
    'serbia': {
        "name": 'Serbia',
        "asks": [],
        "clip": "BRB"
    },
    'suiza': {
        "name": 'Suiza',
        "asks": [],
        "clip": "BRB"
    },
    'tunez': {
        "name": 'Túnez',
        "asks": [],
        "clip": "BRB"
    },
    'uruguay': {
        "name": 'Uruguay',
        "asks": [],
        "clip": "MCU"
    }
}

renames = {v['name']: k for k,v in DATA.items()}
df = pd.read_excel('preguntas.xlsx')
df['Pais'] = df['Pais'].replace(renames)
df = df.drop(['#','Asignado', 'Explicacion?', 'Fuente'], axis=1)
df = df.rename(columns={'Pregunta': 'text'})
df = df.dropna(subset='Respuesta correcta')



df['A-res'] = df['Respuesta correcta'].replace({'A': True, 'B': False, 'C': False, 'D': False})
df['B-res'] = df['Respuesta correcta'].replace({'B': True, 'A': False, 'C': False, 'D': False})
df['C-res'] = df['Respuesta correcta'].replace({'C': True, 'A': False, 'B': False, 'D': False})
df['D-res'] = df['Respuesta correcta'].replace({'D': True, 'A': False, 'B': False, 'C': False})


for p in df['Pais'].unique():
    list_preg = []
    df_pais = df[df['Pais'] == p].copy().reset_index()
    for i in range(0, len(df_pais)):
        dict_preg_res = {'text': df_pais['text'][i]}
        dict_preg_res['options'] = [
            [df_pais['A'][i], df_pais['A-res'][i]],
            [df_pais['B'][i], df_pais['B-res'][i]],
            [df_pais['C'][i], df_pais['C-res'][i]],
            [df_pais['D'][i], df_pais['D-res'][i]],
        ]
        list_preg.append(dict_preg_res)
    DATA[p]['asks'] = list_preg


print(DATA)


file = open("final.txt","w")
for key, value in DATA.items(): 
    file.write('%s:%s\n' % (key, value))
file.close()