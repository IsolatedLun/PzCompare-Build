import re
import json
from os import walk
from utils import tuples_to_dict, humanize_text
from datetime import datetime

"""
    Parses PZ text files that contain object data and converts it to JSON.
"""
def file_parse(f_name: str, output: str, write_to_file: bool):
    def remove_comments(x: str):
        pattern = r"/\*.*?\*/"

        return re.sub(re.compile(pattern, re.DOTALL), "", x)

    # Gets all objects in the text file.
    def get_objects(x: str):
        pattern = '(?<=item\s)(\w+)(?:.*?)(\{.*?\})'
        data = {}
        names = []
        
        for x in re.findall(pattern, x, re.S):
            name, items = x[0], get_items(x[1])
            data[name.lower()] = tuples_to_dict(items)
            names.append(name)

        return [data, names]

    def get_items(x: str):
        pattern = r'(\w+)\s*=\s*(\S+),'

        return re.findall(pattern, x.strip(), re.MULTILINE)


    with open(f_name, 'r') as f:
        content = f.read()

        # 1) Strip comments (Not necessarily needed, but it's better)
        stripped_data = remove_comments(content)
        # 2) Get objects
        data, names = get_objects(stripped_data)

        if data == {}:
            raise Exception(f'File {f_name} does not contain valid data')
        
        if write_to_file:
            with open(output, 'a') as f:
                _dict = {
                    "objects": data,
                    "names": names
                }

                json.dump(_dict, f)

    return [data, names]

# Loops through many files in the assigned dir and executes file_parse().
"""
    Collects all parsed data into 1 object with other miscellaneous info and dumps it into a big JSON file.
"""
def bulk_parse(dir: str, output: str):
    objects = {}
    categories = {}
    unique_sub_categories = set()

    names = []

    with open(output, 'w') as main_file:
        for _, _, f_names in walk(dir):
            for f_name in f_names:
                print(f'Parsing {f_name}...')

                _data, _names = file_parse(f'{dir}/{f_name}', output, False)

                objects.update(_data)
                names += _names

                # Required filename eg. {category}.{type}.{index}.txt
                category, sub_category, *_ = f_name.split('.')
                
                # Automatically sorts/bundles items according to their type
                # setdefault is used as to not override an existing sub_category
                if sub_category == 'auto':
                    for (key, val) in _data.items():
                        categories.setdefault(category, {}) \
                            .setdefault(val['Type'].lower(), []).append(
                                { 'x': key, 'z': humanize_text(key) }
                            )

                        unique_sub_categories.add(val['Type'].lower())
                else:
                    categories.setdefault(category, {}) \
                        .setdefault(sub_category, []) \
                        .extend([{ 'x': x, 'z': humanize_text(x) } for x in _names])

                print(f'Finished parsing {f_name}...\n')

        # Finalizing everything to create the MasterData.
        _dict = {
            "objects": objects,
            "names": names,
            
            # after subCategory: [{ x: lol_meow, z: Lol Meow }, ...]
            "categories": categories,

            "misc": {
                "Objects": len(names),
                "Categories": len(categories),
                "Sub Categories": len(unique_sub_categories),
                "Mods": sum([x != 'vanilla' for x in categories.keys()]),
                "Last Updated": ' '.join(str(datetime.now()).split(' ')[0:2]).split('.')[0]
            }
        }

        json.dump(_dict, main_file)


bulk_parse('./files', './Master.json')